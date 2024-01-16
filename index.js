// const telegramBot = require('node-telegram-bot-api');
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;

// const bot = new telegramBot(TOKEN, { polling: true });

// bot.on('message', (message) => {
//     let chat_id = message.from.id;
//     //Middleware
//     //Dialogflow

//     bot.sendMessage(chat_id, 'I can help you')
// });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const telegramBot = require('node-telegram-bot-api');
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;

// const bot = new telegramBot(TOKEN, { polling: true });

// bot.on('message', (message) => {
//     let chat_id = message.chat.id;
//     let user_message = message.text.toLowerCase(); // Convert the message to lowercase for case-insensitive comparisons

//     // Check the user's message and provide a dynamic response
//     let responseMsg;
//     let sendPhotoPath = 'abcd.jpg'; // Replace with the actual path to your photo
//     let sendVideoPath = 'videoplayback.3gpp'; // Replace with the actual path to your video

//     if (user_message.includes('hello')) {
//         responseMsg = 'Hello! How can I help you today?';
//     } else if (user_message.includes('help')) {
//         responseMsg = 'Sure, I can assist you. What do you need help with?';
//     } else if (user_message.includes('photo')) {
//         bot.sendPhoto(chat_id, sendPhotoPath, { caption: 'Here is a photo for you!' });
//         return; // Stop further execution to avoid sending the general response
//     } else if (user_message.includes('video')) {
//         bot.sendVideo(chat_id, sendVideoPath, { caption: 'Here is a video for you!' });
//         return; // Stop further execution to avoid sending the general response
//     } else if (user_message.includes('website')) {
//         // Simulate typing action
//         bot.sendChatAction(chat_id, 'typing');
//         // Provide a link to the website in the response
//         responseMsg = 'Sure, check out our website: [https://unibot.app/x?pair=0x8dbee21e8586ee356130074aaa789c33159921ca]';
//         // Send the dynamic response with the link
//         bot.sendMessage(chat_id, responseMsg, { parse_mode: 'Markdown' });
//         return; // Stop further execution to avoid sending the general response
//     } else {
//         responseMsg = 'I can help you with general inquiries.';
//     }

//     // Send the dynamic response
//     bot.sendMessage(chat_id, responseMsg);
// });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const telegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

// Simulate typing status when the bot is running
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendChatAction(chatId, 'typing');
    // You can also include a welcome message here
    bot.sendMessage(chatId, 'Bot is running. How can I assist you?', { parse_mode: 'Markdown' });
});

bot.on('message', (message) => {
    let chat_id = message.chat.id;
    let user_message = message.text.toLowerCase();
    let sendPhotoPath = 'abcd.jpg';
    let sendVideoPath = 'videoplayback.3gpp';
    let responseMsg;

    if (user_message.includes('hello')) {
        responseMsg = 'Hello! How can I help you today?';
    } else if (user_message.includes('help')) {
        responseMsg = 'Sure, I can assist you. What do you need help with?';
    } else if (user_message.includes('photo')) {
        bot.sendPhoto(chat_id, sendPhotoPath, { caption: 'Here is a photo for you!' });
        return;
    } else if (user_message.includes('video')) {
        bot.sendVideo(chat_id, sendVideoPath, { caption: 'Here is a video for you!' });
        return;
    } else if (user_message.includes('website')) {
        bot.sendChatAction(chat_id, 'typing');
        responseMsg = 'Sure, check out our website: [https://unibot.app/x?pair=0x8dbee21e8586ee356130074aaa789c33159921ca]';
        bot.sendMessage(chat_id, responseMsg, {
            parse_mode: 'Markdown',
            disable_web_page_preview: false, // Enable link preview
        });
        return;
     } else if (user_message.includes('movie')) {
            // Simulate typing action
            bot.sendChatAction(chat_id, 'typing');
    
            // Array of random movie links
            const movieLinks = [
                'https://vegamovies.dad/',
                'https://www.b4umovies.in/',
                'https://www.filmyzilla.cz/',
                'https://www.youtube.com/watch?v=LKNHVDPKy7g',
            ];
    
            // Select a random movie link
            const randomMovieLink = movieLinks[Math.floor(Math.random() * movieLinks.length)];
    
            // Provide the random movie link in the response
            responseMsg = `Here's a random movie link for you: [Random Movie](${randomMovieLink})`;
    
            // Send the dynamic response with the link
            bot.sendMessage(chat_id, responseMsg, {
                parse_mode: 'Markdown',
                disable_web_page_preview: false, // Enable link preview
            });
            return; // Stop further execution to avoid sending the general response
    } else {
        responseMsg = 'I can help you with general inquiries.';
    }

    // Send the dynamic response
    bot.sendMessage(chat_id, responseMsg);
});




// ====================================================================================================================================

// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;

// const bot = new TelegramBot(TOKEN, { polling: true });

// // Replace with your "unibot" API endpoint
// const unibotApiEndpoint = 'UNIBOT_API_ENDPOINT';

// // Listen for incoming messages
// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//   const messageText = msg.text;

//   // Forward the message to "unibot" using axios
//   try {
//     const response = await axios.post(unibotApiEndpoint, { message: messageText });
//     const unibotResponse = response.data;

//     // Send the response from "unibot" back to the Telegram user
//     bot.sendMessage(chatId, unibotResponse);
//   } catch (error) {
//     console.error('Error communicating with unibot:', error.message);
//     bot.sendMessage(chatId, 'Error communicating with unibot');
//   }
// });


