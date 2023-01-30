/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 01-30-2023
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
    public static Boolean insertContact1(List<string> accNameList){
        List<Account> accList=new List<Account>();
        if(!accNameList.isEmpty()){
            for(String contactName:accNameList){
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