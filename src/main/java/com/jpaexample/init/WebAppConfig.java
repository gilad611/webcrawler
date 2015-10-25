package com.jpaexample.init;

import java.sql.SQLException;
import java.util.Properties;

import javax.annotation.Resource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;



//import org.hibernate.jpa.HibernatePersistenceProvider;
import org.hibernate.ejb.HibernatePersistence;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;


@Configuration
@EnableWebMvc
@EnableTransactionManagement
@ComponentScan("com.jpaexample")
@PropertySource("classpath:app.properties")
@EnableJpaRepositories("com.jpaexample.dao")
public class WebAppConfig {

	private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "hibernate.dialect";
	private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";
	private static final String PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN = "entitymanager.persistence_unit_name";

	// YL
	private static final String TOMCAT_CONTEXT_CONF_DS_NAME = "java:/comp/env/jdbc/MySql";
	
	@SuppressWarnings("unused")
	private static org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(WebAppConfig.class);
	
	// CTOR
	public WebAppConfig() {
	}

	@Resource
	private Environment env;

    //-----------------------------------------------------------------
	@Bean
	public DataSource dataSource() {

		// start: inject DataSource as resource from tomcat env.
		// as defined in <catalina.base>/conf/contex.xml
		Context ctx = null;
		DataSource lookUpDataSource = null;
	
		try {
			logger.info("WebAppConfig.dataSource() - building new InitialContext");
			ctx = new InitialContext();
			logger.info("WebAppConfig.dataSource() - B4 lookup for resource [" + TOMCAT_CONTEXT_CONF_DS_NAME + "].");
			lookUpDataSource = (DataSource) ctx.lookup(TOMCAT_CONTEXT_CONF_DS_NAME);
			if (lookUpDataSource != null && lookUpDataSource.getConnection() != null) {
				logger.info("WebAppConfig.dataSource() - got DataSource from tomcat env. by lookup");
			} else {
				logger.error("WebAppConfig.dataSource() - lookup failure : no DataSource obtained from tomcat env. by lookup for ["
								+ TOMCAT_CONTEXT_CONF_DS_NAME
								+ "].\n"
								+ "Check Resource declaration in ["
								+ System.getProperty("catalina.base")
								+ "]/conf/contex.xml");
			}// else
		} catch (NamingException e) {
			logger.error("WebAppConfig.dataSource() - got NamingException while looking up for DS ["
							+ TOMCAT_CONTEXT_CONF_DS_NAME + "].\n"
							+ "Check Resource declaration in ["
							+ System.getProperty("catalina.base")
							+ "]/conf/contex.xml", e);
		} catch (SQLException se) {
			logger.error("WebAppConfig.dataSource() - got SQLException while calling lookUpDataSource.getConnection() after lookup for DS ["
							+ TOMCAT_CONTEXT_CONF_DS_NAME + "].", se);
		}
		return lookUpDataSource;

	}// dataSource()
    //-----------------------------------------------------------------
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setDataSource(dataSource());
		entityManagerFactoryBean
				.setPersistenceProviderClass(HibernatePersistence.class);
		entityManagerFactoryBean.setPackagesToScan( env.getRequiredProperty(PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN));
		// entityManagerFactoryBean.setPackagesToScan(prop.getPropertyValue(PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN));
		entityManagerFactoryBean.setJpaProperties(hibProperties());

		return entityManagerFactoryBean;
	}
    //-----------------------------------------------------------------
	private Properties hibProperties() {
		Properties properties = new Properties();
		properties.put(PROPERTY_NAME_HIBERNATE_DIALECT,
				env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_DIALECT));
		properties.put(PROPERTY_NAME_HIBERNATE_SHOW_SQL,
				env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_SHOW_SQL));

		return properties;
	}
    //-----------------------------------------------------------------
	@Bean
	public JpaTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory()
				.getObject());
		return transactionManager;
	}
    //-----------------------------------------------------------------
	@Bean
	public UrlBasedViewResolver setupViewResolver() {
		UrlBasedViewResolver resolver = new UrlBasedViewResolver();
		resolver.setPrefix("/");
		resolver.setSuffix("/");
		resolver.setViewClass(JstlView.class);
		return resolver;
	}
    //-----------------------------------------------------------------
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		  registry.addResourceHandler("/**")
		    .addResourceLocations("/");
		}
}