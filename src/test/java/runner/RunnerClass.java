package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
        plugin = { "html:target/cucumber-html-report", "json:target/cucumber.json" },
        features = {"src/test/resources/home.feature" },
        glue = {"steps" },
        strict = true,
        dryRun = false,
        monochrome = true)

@RunWith(Cucumber.class)
public class RunnerClass {

}