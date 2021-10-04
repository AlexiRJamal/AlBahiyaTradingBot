/**
 * @author Alexi Jamal
 * 
 */

'use strict'

const Telegram = require("telegram-node-bot");

class HelpController extends Telegram.TelegramBaseController {
    helpHandler($) {
        $.sendMessage(`Hi there ${$.message.from.firstName}
The commands are:
/services: view our services
/book: book a service
/help: displays this
/contact: contact information about Al Bahiya`);
    }

    get routes() {
        return {
            helpCommand: "helpHandler"
        };
    }
}

module.exports = HelpController;