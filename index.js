// require('dotenv').config({ path: './config/.env' })
// const express = require('express')
// const app = express();
// const passport = require('passport')
// const bodyParser = require('body-parser');
// const { telegram } = require("./public/telegram/bot")
// //const {TelegramBott} = require('./telegram')
// const PORT = process.env.PORT || 3333
// const cors = require('cors');
// const { default: axios } = require('axios');


// const { TELEGRAM_TOKEN , API_URL } = process.env
// const TELGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
// const URI = `/webhook/${TELEGRAM_TOKEN}`
// const WEBHOOK_URL =  API_URL+URI


// const  init = async () => {
//     const res = await axios.get(`${TELGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
//     console.log(res.data)
//     telegram()
// }

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(cors())
// app.use("/uploads", express.static("uploads"))
// app.use("/img", express.static("img"))
// require('./config/Connect')
// require("./config/passport")
// app.use(passport.initialize());
// app.use(express.json());
// //TelegramBott()
// app.use(express.static("emailtemplets"))
// app.use('/', require('./app/routers/userRouter'));

// app.all("*", (req, res) => {
//     res.send("URL not found")
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//     init()
// })


require('dotenv').config({ path: './config/.env' })
const express = require('express')
const app = express();
const passport = require('passport')
const bodyParser = require('body-parser');
//const { telegram } = require("./public/telegram/bot")
const PORT = process.env.PORT || 3333
const cors = require('cors');
const { default: axios } = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const { TELEGRAM_TOKEN, API_URL } = process.env; // Define TELEGRAM_TOKEN here

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true }); // Use TELEGRAM_TOKEN here

const TELGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
const URI = `/webhook/${TELEGRAM_TOKEN}`
const WEBHOOK_URL =  API_URL + URI

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log("Received /start command");
    bot.sendMessage(chatId, 'Welcome to the bot! Type something in the textbox:');
});

const init = async () => {
    const res = await axios.get(`${TELGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
    //telegram()
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use("/uploads", express.static("uploads"))
app.use("/img", express.static("img"))
require('./config/Connect')
require("./config/passport")
app.use(passport.initialize());
app.use(express.json());
app.use(express.static("emailtemplets"))
app.use('/', require('./app/routers/userRouter'));

app.all("*", (req, res) => {
    res.send("URL not found")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    init()
})


