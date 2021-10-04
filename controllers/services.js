/**
 * @author Alexi Jamal
 * 
 */
"use strict";

 const Telegram = require("telegram-node-bot");
 
 class ServicesController extends Telegram.TelegramBaseController {
   servicesHandler($) {
       $.sendMessage(`We have the following:
1. Home cleaning
2. Pest control

Many more exist, but we offer booking via Telegram for these two, for now...`);
   }
 
   get routes() {
     return {
       servicesCommand: "servicesHandler"
     };
   }
 }
 
 module.exports = ServicesController;
 