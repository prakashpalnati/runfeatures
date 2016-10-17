package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomeAndLoginPage {
    @FindBy(css  = "span[mode='teacher']")
   public WebElement btnSignUp;

    @FindBy(css = "span[title='Click to Sign up as Teacher']")
    public WebElement btnIamATeacher;


}
