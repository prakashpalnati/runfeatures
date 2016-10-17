package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import utils.Properties;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

/**
 * Created by prakash on 13/10/16.
 */
public class Driver {

   static WebDriver driver = null;
    String userDir = System.getProperty("user.dir");
    String fileSeparator = System.getProperty("file.separator");
    String osType = System.getProperty("os.name");

@Before
public void beforeSuite() throws IOException {
    //ReportUtil.initReports();
    //DOMConfigurator.configure("log4j.xml");


    Properties.loadPropertiesFile("common.properties");
    String Browser = Properties.getPropertyValue("Browser");
    String Server = Properties.getPropertyValue("Server");

    if (Browser.equalsIgnoreCase("firefox")){

        driver = new FirefoxDriver();

    }

    if (Browser.equalsIgnoreCase("chrome")){
        String driverPath=null;
    if(osType.startsWith("windows")){
        driverPath= userDir+fileSeparator+"chromedriver.exe";}
        else{
        driverPath= userDir+fileSeparator+"chromedriver";
    }
        System.setProperty("webdriver.chrome.driver", driverPath);
        driver = new ChromeDriver();

    }

    //driver.get(Server);
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
}

@After
    public void afterSuite(){

   driver.quit();
   driver = null;
}

}