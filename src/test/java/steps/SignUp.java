package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pages.HomeAndLoginPage;
import pages.SignUpPage;
import utils.Utils;

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

    @When("^enter username and password$")
    public void enterUsernameAndPassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objSignUpPage.fldUserName.sendKeys("eg56veh");
        objSignUpPage.fldUserEmail.sendKeys("bwtrhgkfd@nsdkf.com");
        objSignUpPage.fldPassword.sendKeys("snapwiz");
        objSignUpPage.fldRetypePassword.sendKeys("snapwiz");
        objSignUpPage.btnSignUpAsTeacher.click();


    }
}
