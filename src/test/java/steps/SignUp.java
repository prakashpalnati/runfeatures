package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pages.HomeAndLoginPage;
import pages.SignUpPage;
import utils.Utils;

import java.util.List;

/**
 * Created by prakash on 13/10/16.
 */
public class SignUp  {

//HomeAndLoginPage objHomeAndLoginPage = new HomeAndLoginPage();
    WebDriver driver = Driver.driver;
    HomeAndLoginPage objHomeAndLoginPage = PageFactory.initElements(Driver.driver, HomeAndLoginPage.class);
    SignUpPage objSignUpPage = PageFactory.initElements(Driver.driver, SignUpPage.class);
    public static String random = Utils.generateRandomString(5, Utils.Mode.ALPHA);



    @Given("^User on Homepage$")
    public void userOnHomepage() throws Throwable {

        driver.get("http://10.0.0.68");
        // Write code here that turns the phrase above into concrete actions

    }


    @When("^clicked on signUp link$")
    public void clickedOnSignUpLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objHomeAndLoginPage.btnSignUp.click();
    }

    @When("^clicked on I am a Teacher$")
    public void clickedOnIAmATeacher() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objHomeAndLoginPage.btnIamATeacher.click();
    }




    @When("^user enters \"([^\"]*)\"  and \"([^\"]*)\"$")
    public void userEntersAnd(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String email = username+"@snapwiz.com";
        objSignUpPage.fldUserName.sendKeys(username);
        objSignUpPage.fldUserEmail.sendKeys(email);
        objSignUpPage.fldPassword.sendKeys(password);
        objSignUpPage.fldRetypePassword.sendKeys(password);
        objSignUpPage.btnSignUpAsTeacher.click();

        Assert.assertTrue(objSignUpPage.fldEnterZipCode.isDisplayed(),"enter zip code i s not displayed");
    }
}
