package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by prakash on 6/10/16.
 */
public class home {
    @cucumber.api.java.en.Given("^I am on ML home page$")
    public void iAmOnMLHomePage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }
    
    @When("I click on SignUp button in ML home page")
    public  void method(){
        
    }

    @When("^I click on SignUp button in sign up page$")
    public void iClickOnSignUpButtonInSignUpPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I should see ML Logo i(\\d+)n Header$")
    public void iShouldSeeMLLogoINHeader(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


}
