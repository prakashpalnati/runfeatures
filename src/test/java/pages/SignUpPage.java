package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by prakash on 17/10/16.
 */
public class SignUpPage {

    @FindBy(id="first-name")
    public WebElement fldUserName;

    @FindBy(id="user-email")
    public WebElement fldUserEmail;

    @FindBy(id="user-password")
    public WebElement fldPassword;

    @FindBy(id="retype-password")
    public WebElement fldRetypePassword;

    @FindBy(css = "button[mode='teacher']")
    public WebElement btnSignUpAsTeacher;

    @FindBy(css = "input[placeholder='Enter zip code']")
    public WebElement fldEnterZipCode;
}
