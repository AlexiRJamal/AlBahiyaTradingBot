/**
 * @author Alexi Jamal
 * 
 * @description
 * The API key can be revoked at any time, and I, and only I, reserve that right.
 * If you want to be in charge of the key, change the username (good luck taking your unified username back).
 * Or like be nicer the next time you know?
 * It literally costs nothing to be a bit nice.
 * I fuck up sometimes, I admit, but like I know what I'm doing, and I'm capable.
 * You don't have any right to say "you don't know"
 * I do
 * I. Fucking. Do.
 * You're a civil engineer
 * Stay where you belong
 * You're late to deliver on a lot of occasions, but sure I'm the one to blame here...
 * Because what? I forgot to CC you guys once in a while?
 * IT'S MANAGEMENET
 * Fuck management and capitalism, I couldn't care less
 * But like I can't just send a reminder to managers every day
 * Why not? Because again, capitalism is fucked up
 * And MaNaGeMeNt WiLl Be MaD
 * FUCK IF I CARE
 * Also we need to have a chat about the meaning of the word "urgent".
 * You can't just put it at the end of every sentence.
 * Or like just stop treating me like an office bitch?
 * Anyway
 * You do know this app costs a lot, right?
 * And I'm doing it for free, ma3 tarbee7 meniyye
 * So yeah...
 * 
 * It took me a month, not that long
 * But I studied for 6 years for this
 * Or you know what? It actually took me 4 days
 * Here, happy?
 * 
 * @summary
 * The API key is mine, and the bot is worthless without it.
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
