package utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;



public class Properties {

    private static java.util.Properties propFile=null;
    static String userDir = System.getProperty("user.dir");
    static String  fileSeparator = System.getProperty("file.separator");


    public static void loadPropertiesFile(String fileName) throws IOException{
        java.util.Properties prop=new java.util.Properties();
        InputStream inputStream=Properties.class.getClassLoader().getResourceAsStream(fileName);
        if(inputStream !=null ){
            prop.load(inputStream);
        }
        else {
            throw new FileNotFoundException("property file " + fileName + " not found in the resource folder");
        }
        propFile=prop;
    }

    public static String getPropertyValue(String key){
        return propFile.getProperty(key);


}


}