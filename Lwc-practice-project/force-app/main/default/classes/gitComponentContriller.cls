/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 01-27-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class gitComponentContriller {
   

    @AuraEnabled
    public static Boolean insertContact(string contactName){
        Account GitAccount=new Account(Name =contactName);
        Boolean isSuccessful=false;
        try {
            insert GitAccount;
            isSuccessful=true;
            return isSuccessful;
        } catch (Exception e) {
            //throw new AuraHandledException(e.getMessage());
            return isSuccessful;
        }
    }
   
    @AuraEnabled
    public static Boolean insertContact1(List<string> contactNameList){
        List<Account> accList=new List<Account>();
        if(!contactNameList.isEmpty()){
            for(String contactName:contactNameList){
            accList.add(new Account(Name =contactName));
        }
    }
        
        Boolean isSuccessful=false;
        try {
            if(!accList.isEmpty()){
            insert accList;
            }
            isSuccessful=true;
            return isSuccessful;
        } catch (Exception e) {
            //throw new AuraHandledException(e.getMessage());
            return isSuccessful;
        }
    }
}