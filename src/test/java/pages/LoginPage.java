package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by subbareddy on 10/18/2016.
 */
public class LoginPage {
    @FindBy(id="login-email")
    public WebElement fldUserName;

    @FindBy(id = "login-password")
    public WebElement fldPassword;

    @FindBy(id = "user-drop")
    public   WebElement chkbxRember;

    @FindBy(id = "signIn")
    public WebElement btnsignIn;

    @FindBy(id = "google-openid-login")
    public WebElement btnGoogleSignIn;

    @FindBy(id = "mso365-sso-login")
    public WebElement btnMso;
    @FindBy(id = "signout")
    public WebElement btnSignOut;
}
