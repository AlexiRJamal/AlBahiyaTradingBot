/**
 * @author Alexi Jamal
 *  
 */
'use strict'

const TOKEN = require('./TOKEN').GetToken();
const Telegram = require('telegram-node-bot');

const bot = new Telegram.Telegram(TOKEN, {
    workers: 2
});

const startController = require('./controllers/start')
const servicesController = require('./controllers/services')
const helpController = require('./controllers/help')
const bookController = require('./controllers/book')
const otherwiseController = require('./controllers/otherwise')

const startCtrl = new startController();
const servicesCtrl = new servicesController()
const helpCtrl = new helpController()
const bookCtrl = new bookController()

bot.router.when(new Telegram.TextCommand('/start', 'startCommand'), startCtrl)
.when(new Telegram.TextCommand('/services', 'servicesCommand'), servicesCtrl)
.when(new Telegram.TextCommand('/help', 'helpCommand'), helpCtrl)
.when(new Telegram.TextCommand('/book', 'bookCommand'), bookCtrl)
.otherwise(new otherwiseController())
