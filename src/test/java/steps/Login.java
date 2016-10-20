package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pages.HomeAndLoginPage;
import pages.LoginPage;
import pages.SignUpPage;
import utils.Utils;

/**
 * Created by subbareddy on 10/18/2016.
 */
public class Login {
    WebDriver driver = Driver.driver;
    LoginPage objLogin=PageFactory.initElements(Driver.driver,LoginPage.class);

    @Given("^User on LoginPage$")
    public void userOnLoginPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get(Driver.Server);
    }

    @When("^user enters \"([^\"]*)\"  and \"([^\"]*)\" for  login$")
    public void userEntersAndForLogin(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objLogin.fldUserName.sendKeys("teacher14@snapwiz.com");
        objLogin.fldPassword.sendKeys("snapwiz");
        objLogin.btnsignIn.click();
    }

    @Then("^Click on Signin Button$")
    public void clickOnSigninButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals(objLogin.btnSignOut.isDisplayed(),"Login Failed And SignOut Button Not Displayed");


    }
}
