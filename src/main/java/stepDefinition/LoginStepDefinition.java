/*package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;
	@Given("^user is in login page$")
	public void user_is_in_login_page(){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PC\\Downloads\\chromedriver_win32\\chromedriver.exe");
		 driver=new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
	}
	
	@When("^title of page is freecrm$")
	public void When_title_of_page_is_freecrm(){
		String title=driver.getTitle();
		Assert.assertEquals("CRM", title);
		
	}
	@Then ("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_username_and_password(String username,String password){
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	@Then ("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		driver.findElement(By.xpath("//*[@id='ui']/div/div/form/div/div[3]")).click();
		
	}
	@And ("^user is on home page$")
	public void  user_is_on_home_page(){
		System.out.println(driver.getCurrentUrl());
		
	}
	
}
*/