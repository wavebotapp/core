async function TelegramBot() {
    const TelegramBot = require('node-telegram-bot-api');
    const axios = require('axios');
    const TOKEN = "7007643106:AAGzE_xdclVp07EfzJ6nl_OgTtP8EE9QWDc";
    console.log("🚀 ~ TelegramBot ~ TOKEN:", TOKEN);
    const BASE_URL = 'http://localhost:3332';
    console.log("🚀 ~ TelegramBot ~ BASE_URL:", BASE_URL);

    const bot = new TelegramBot(TOKEN, { polling: true });

    // Sign up command handler
    bot.onText(/\/signup (.+) (.+) (.+) (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const [, name, email, password, confirmPassword] = match;

        try {
            const response = await axios.post(`${BASE_URL}/signup`, {
                name,
                email,
                password,
                confirmPassword
            });
            bot.sendMessage(chatId, response.data.msg);
        } catch (error) {
            console.error('Error during sign up:', error);
            bot.sendMessage(chatId, 'An error occurred during sign up. Please try again later.');
        }
    });

    // Login command handler
    bot.onText(/\/login (.+) (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const [, email, password] = match;

        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            });
            bot.sendMessage(chatId, response.data.msg);
        } catch (error) {
            console.error('Error during login:', error);
            bot.sendMessage(chatId, 'An error occurred during login. Please try again later.');
        }
    });

    // Verify command handler
    bot.onText(/\/verify (.+) (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const [, email, otp] = match;

        try {
            const response = await axios.post(`${BASE_URL}/verify`, {
                email,
                otp
            });
            bot.sendMessage(chatId, response.data.msg);
        } catch (error) {
            console.error('Error during verification:', error);
            bot.sendMessage(chatId, 'An error occurred during verification. Please try again later.');
        }
    });

    console.log('Bot started!');
}

module.exports = {
    TelegramBot
}
