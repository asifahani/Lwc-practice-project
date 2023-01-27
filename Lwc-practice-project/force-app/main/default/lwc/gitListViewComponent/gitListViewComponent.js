import { api, LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';
import searchMessage from '@salesforce/messageChannel/SampleMessageChannel__c';
import insertContact from '@salesforce/apex/gitComponentContriller.insertContact';
const QUERY_USER_ENDPOINT_URL='https://api.github.com/search/users?q=';

export default class GitListViewComponent extends LightningElement {

    @api personName;
    selecteduser ='';
    selecteduserArray=[];
    retrivedusers=[];
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                searchMessage,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    async handleMessage(message) {
       console.log('handleMessage:', message);
       this.personName=message.searchTerm;
       let queryEndPoint=QUERY_USER_ENDPOINT_URL+this.personName;
       try{
        const RESPONSE=await fetch(queryEndPoint);
        const USER_LIST=await RESPONSE.json();
        console.log(USER_LIST.items);
        this.retrivedusers=USER_LIST.items;
       }catch(error){
          console.log(error); 
      }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleonuserclicked(event){
       
        console.log(event.detail); 
        
    this.selecteduser=event.detail;
    this.selecteduserArray.push(event.detail);
      //alert(this.selecteduser);
    }
    get showuser(){
        return this.selecteduser.length != 0 ? true: false;
    }

//    async handleSaveUserClick(){
// try{
// const issuccess=await insertContact({contactName:this.selecteduser});
// console.log('created creation'+issuccess);
// }catch(error){
// console.log(error);
// }
//     }

    async handleSaveUserClick(){
        try{
        const issuccess=await insertContact1({contactNameList:this.selecteduserArray});
        console.log('created creation'+issuccess);
        }catch(error){
        console.log(error);
        }
            }
}