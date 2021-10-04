 /**
 * @author Alexi Jamal
 * 
 */
 "use strict";

 const Telegram = require("telegram-node-bot");
 
 class OtherwiseController extends Telegram.TelegramBaseController {
   handle($) {
       $.sendMessage("I didn't get this");
 }
}
 
 module.exports = OtherwiseController;
 