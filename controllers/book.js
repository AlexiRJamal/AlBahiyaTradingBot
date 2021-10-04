/**
 * @author Alexi Jamal
 * 
 */
 "use strict";

 const Telegram = require("telegram-node-bot");
 
 class BookController extends Telegram.TelegramBaseController {
   bookHandler($) {
       $.sendMessage("Available services to book:\n1. Home cleaning\n2. Pest control");
       $.sendMessage("Send the number of the service you want to book.");
       $.waitForRequest.then($ => { 
           let service = $.message.text;
           if(isNaN(service)){
               $.sendMessage("Please send a valid number");
           } else {
               if(service == 1){
                   $.sendMessage("What time?");
                   $.waitForRequest.then($ => {
                       let userTime = $.message.text;
                       $.sendMessage(`Home cleaning at ${userTime}, what date?`);
                       $.waitForRequest.then($ => {
                           let userDate = $.message.text;
                           $.sendMessage(`Home cleaning at ${userTime} on ${userDate}, got it.`);
                           $.sendMessage("Kindly provide us with your phone number");
                           $.waitForRequest.then($ => {
                               let userPhone = $.message.text;
                               $.sendMessage("Awesome! A team member will call to confirm the booking.\nThank you.")
                               let textToReturn = `${$.message.from.firstName} booked "home cleaning" on ${userDate} at ${userTime}\nCall ${userPhone} to confirm`
                               this._api.sendMessage('379633660', textToReturn)
                           })
                       })
                   })
               }
               if(service == 2){
                $.sendMessage("What time?");
                $.waitForRequest.then($ => {
                    let userTime = $.message.text;
                    $.sendMessage(`Pest control at ${userTime}, what date?`);
                    $.waitForRequest.then($ => {
                        let userDate = $.message.text;
                        $.sendMessage(`Pest control at ${userTime} on ${userDate}, got it.`);
                        $.sendMessage("Kindly provide us with your phone number");
                        $.waitForRequest.then($ => {
                            let userPhone = $.message.text;
                            $.sendMessage("Awesome! A team member will call to confirm the booking.\nThank you.");
                            let textToReturn = `${$.message.from.firstName} booked "pest control" on ${userDate} at ${userTime}\nCall ${userPhone} to confirm`
                               this._api.sendMessage('379633660', textToReturn)
                        })
                    })
                })
            }
           }
       })
   }
 
   get routes() {
     return {
       bookCommand: "bookHandler"
     };
   }
 }
 
 module.exports = BookController;
 