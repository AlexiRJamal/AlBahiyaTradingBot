/**
 * @author Alexi Jamal
 * 
 */
"use strict";

 const Telegram = require("telegram-node-bot");
 
 class StartController extends Telegram.TelegramBaseController {
   startHandler($) {
       console.log(`User ${$.message.from.username} started using the bot`)
       $.sendMessage(`Hello ${$.message.from.firstName}!`);
       $.sendMessage("Send /services to check our services, /book to book a service, or send /help to get help on all the commands");
   }
 
   get routes() {
     return {
       startCommand: "startHandler"
     };
   }
 }
 
 module.exports = StartController;
 