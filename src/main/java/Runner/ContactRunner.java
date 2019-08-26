package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
features="F:/Eclipse_Workspace/BDD/src/main/java/Features/Contact.feature",	
glue={"stepDefinition"},	format={"pretty","html: test-output"}, dryRun=true)

public class ContactRunner {
	
	
	

	
	
}
