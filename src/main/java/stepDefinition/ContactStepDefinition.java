package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactStepDefinition {
	WebDriver driver;
	@Given("^user is already on home page$")
	public void user_is_already_on_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PC\\Downloads\\chromedriver_win32\\chromedriver.exe");
		 driver=new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
	}

	@When("^title is freecrm$")
	public void title_is_freecrm() throws Throwable {
		String title=driver.getTitle();
		Assert.assertEquals("CRM", title);
	}

	@Then("^user should enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_uname_and_pwd(String username, String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on  Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='ui']/div/div/form/div/div[3]")).click();;
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.out.println(driver.getCurrentUrl());
	}

	@Then("^user moves to new contact menu$")
	public void user_moves_to_new_contact_menu() throws Throwable {
	   driver.findElement(By.xpath("//div[@id='main-nav']//a[3]//span[@class='item-text']")).click();
	}

	@Then("^user clicks on New$")
	public void user_clicks_on_New() throws Throwable {
	   driver.findElement(By.xpath("//button[text()='New']")).click();
	}
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_fname_and_lastname(String fname, String lname) {
		driver.findElement(By.name("first_name")).sendKeys(fname);
		driver.findElement(By.name("last_name")).sendKeys(lname);
	}

	@Then("^user clicks on save$")
	public void user_clicks_on_save() throws Throwable {
	    driver.findElement(By.xpath("//button[text()='Save']")).click();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
