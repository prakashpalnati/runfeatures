# runfeatures

Is an attempt to let QA , DEV, and PROD support to run the automated test cases feature wise according to their needs with reporting.

Cucumber intuitive reports will only get generated by running the following maven command.
$ mvn clean verify -Dtest=RunnerClass.java -Dcucumber.options=src/test/resources/features/home.feature -DfailIfNoTests=false



