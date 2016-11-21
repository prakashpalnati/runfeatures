package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by rahul on 11/21/2016.
 */
public class asssignmentpage
{
    @FindBy(className = "as-assignments-count")
    public WebElement btnallassignment;

    @FindBy(className = "gray-count")
    public  WebElement btnnotopen;

    @FindBy(className = "red-count active")
    public WebElement btninprogress;

    @FindBy(className = "orange-count active")
    public WebElement btnawatinggrades;

    @FindBy(className = "green-count")
    public WebElement btngraded;

    @FindBy(className = "btn btn-blue btn-rounded")
    public WebElement btncreatenewassignment;

}
