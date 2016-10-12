package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by prakash on 6/10/16.
 */
public class Home {
    int actualSum;

    @Given("^I have a calculator$")
    public void iHaveACalculator() throws Throwable {

    }

    @When("^I add (\\d+) and (\\d+)$")
    public void iAddAnd(int value1, int value2) throws Throwable {
        actualSum = value1 + value2;
    }

    @Then("^the result should be (\\d+)$")
    public void theResultShouldBe(int expectedSum) throws Throwable {
        Assert.assertEquals(expectedSum, actualSum);
    }

}
