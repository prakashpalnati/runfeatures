package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by rahul on 11/21/2016.
 */
public class myprofile
{

    @FindBy(xpath = ".//*[@id='updateForm']/div/div[1]/div[2]/div/div[1]/span")
    public WebElement editprofile;

    @FindBy(id = "user-first-name")
    public WebElement username;

    @FindBy(id = "user-last-name")
    public WebElement userlastname;

    @FindBy(id = "user-email\" class=\"as-userProfile-input")
    public WebElement useremail;

    @FindBy(className = "as-profile-change-paswdLink down-arrow")
    public WebElement clkonchangepassword;

    @FindBy(id = "user-password")
    public WebElement userpassword;


    @FindBy(id = "user-confirm-password")
    public WebElement confirmpassword;

    @FindBy(id="save")
    public WebElement save;



}
