package com.jpaexample.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.jpaexample.model.ImgJoke;
import com.jpaexample.model.Joke;
import com.jpaexample.service.ImgJokeService;
import com.jpaexample.service.JokeService;

@Controller
@RequestMapping(value = "/jokes")
public class TestController {

    @Autowired
    private JokeService jokeService;
    @Autowired
    private ImgJokeService imgJokeService;
    public TestController(){}
    
    @RequestMapping(value="html", method = RequestMethod.GET )
    public String startHtml(){
        return "/index.html";
    }  

    /***
     * 
     * @param request
     * @param genre
     * @return
     */
	@RequestMapping(value = "/findByGenre", produces = "application/json; charset=ISO-8859-8", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Joke> findByGenre(HttpServletRequest request, String genre)
	{
		System.out.println(genre);
		List<Joke> list = jokeService.findByGenre(genre);
		return list;
	}
	
	/***
	 * 
	 * @param request
	 * @param title
	 * @return
	 */
	@RequestMapping(value = "/findByTitle", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Joke> findByTitle(HttpServletRequest request, String title)
	{
		List<Joke> list = jokeService.findByTitle(title);
		return list;
	}
	
	/***
	 * 
	 * @param request
	 * @param rating
	 * @return
	 */
	@RequestMapping(value = "/findByRating", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Joke> findByRating(HttpServletRequest request, int rating)
	{
		List<Joke> list = jokeService.findByRating(rating);
		return list;
	}
	
	@RequestMapping(value = "/gettextjokes", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Joke> GetAllTextJokes(HttpServletRequest request) throws UnsupportedEncodingException
	{
			String path = this.getClass().getClassLoader().getResource("").getPath();
			String fullPath = URLDecoder.decode(path, "UTF-8");
			String pathArr[] = fullPath.split("/WEB-INF/classes/");
			System.out.println(fullPath);
			System.out.println(pathArr[0]);
			fullPath = pathArr[0];
			
			String reponsePath = "";
			// to read a file from webcontent
			reponsePath = new File(fullPath).getPath() + File.separatorChar + "newfile.txt";
			System.out.println(path +" "+reponsePath);
		
		List<Joke> jokes = jokeService.findByIdGreaterThan(0);
		return jokes;
	}

	/***
	 * 
	 * @param request
	 * @param url
	 * @return
	 */
	@RequestMapping(value = "/getalltextjokes", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Joke> getJokes(HttpServletRequest request, String url)
	{	
		double num = 0;
		for (int i = 10; i <= 1140; i+=10) {
			String page = "?page="+i+"&cat=0"; //http://www.xoox.co.il/joke/
			System.out.println(i);
			try {
				Document document = Jsoup.parse(new URL(url + page).openStream(), "ISO-8859-8", url);
				
				Elements tables = document.select("table.font12");
				for (Element table : tables) {
					Joke joke = new Joke();
					Elements trs = table.select("tr");
					for (Element tr: trs){
						Elements tds = tr.select("td:eq(0)");
						for (Element td : tds){
							Elements bs = td.select("b");
							for (Element b : bs){
								if (b.text().length() < 30){
									joke.setGenre(b.text());
								}
							}
						}
						Elements td_titles = tr.select("td.font16b");
						for (Element td_title : td_titles){
							if (td_title.text() != "" && td_title.text().length() < 30){
								joke.setTitle(td_title.text());
								joke.setId(num++);
							}
						}
					} 
//					Elements td_title = table.select("tr:eq(1)");
					Elements td_content = table.select("tr:eq(2)");
					joke.setContent(td_content.text());
					joke.setRating(0);
					jokeService.addJoke(joke);
				}
				
				
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		List<Joke> jokes = jokeService.findByIdGreaterThan(0);
		return jokes;
	}
	
	/***
	 * 
	 * @param request
	 * @param url
	 * @return
	 */
	@RequestMapping(value = "/getallimgjokes", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<ImgJoke> getImgJokes(HttpServletRequest request, String url)
	{	
		double num = 0;
		String destinationFile = "C:/Users/user01/Desktop/Spring/WebCrawler/images/";
		for (int i = 1; i <= 4465; i++) {
			String page = "photo"+i+".html"; //http://www.xoox.co.il/pic/
			try {
				Document document = Jsoup.parse(new URL(url + page).openStream(), "ISO-8859-8", url);
				Elements images = document.select("img");
					for(Element img : images){
						ImgJoke imgjoke = new ImgJoke();
						String imgHref = img.attr("src");
						System.out.println(imgHref);
							switch(imgHref){
							case "/images/share_image_facebook.png": break;
							case "../Logo_title.jpg": break;
							case "previous.jpg": break;
							case "next.jpg": break;
							case "/images/like/icons/fav.png": break;
							case "http://www.xoox.co.il/images/facebook.jpg": break;
							case "http://www.xoox.co.il/images/delicious.jpg": break;
							case "http://www.xoox.co.il/images/myspace.jpg": break;
							case "http://www.xoox.co.il/images/twitter.jpg": break;
							case "http://www.xoox.co.il/images/reddit.jpg": break;
							case "http://www.xoox.co.il/images/digg.png": break;
							default: {
								imgjoke.setImg("image" + num);
								String imgTitle = img.attr("title");
								if(imgTitle.length() < 30){
									imgjoke.setTitle(imgTitle);
								}
								
								imgJokeService.saveImage(url + imgHref, destinationFile + "image" + num + ".jpg");
								imgjoke.setRating(0);
								imgjoke.setId(num);
								imgjoke.setGenre("");
								num++;
								imgJokeService.addJoke(imgjoke);
							}
						}
					}
			}
			catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		List<ImgJoke> jokes = imgJokeService.findByIdGreaterThan(0);
		return jokes;
	}
}

