async function TelegramBott() {
    const telegramBot = require('node-telegram-bot-api');
    const axios = require('axios');
    const userModel = require('./app/Models/userModel');
    require('dotenv').config();

    const TOKEN = process.env.TELEGRAM_TOKEN;
    const API_URL = 'http://localhost:3332'; // Replace with your actual API endpoint
    const WEBSITE_URL = 'https://marketing-dashboard-beta.vercel.app/';

    const bot = new telegramBot(TOKEN, { polling: true });

    // Simulate typing status when the bot is running
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, 'Bot is running. How can I assist you?', { parse_mode: 'Markdown' });
    });

    bot.onText(/\/register/, (msg) => {
        const chatId = msg.chat.id;
        // Ask the user for name
        bot.sendMessage(chatId, 'Please provide your name:');
        bot.once('message', async (nameMsg) => {
            const name = nameMsg.text;
            console.log("🚀 ~ bot.once ~ name:", name);

            // Ask the user for email
            bot.sendMessage(chatId, 'Please provide your email:');
            bot.once('message', async (emailMsg) => {
                const email = emailMsg.text;
                console.log("🚀 ~ bot.once ~ email:", email);

                // Ask the user for password
                bot.sendMessage(chatId, 'Please provide your password:');
                bot.once('message', async (passwordMsg) => {
                    const password = passwordMsg.text;
                    console.log("🚀 ~ bot.once ~ password:", password);

                    // Ask the user to confirm password
                    bot.sendMessage(chatId, 'Please confirm your password:');
                    bot.once('message', async (confirmPasswordMsg) => {
                        const confirmPassword = confirmPasswordMsg.text;

                        if (password !== confirmPassword) {
                            bot.sendMessage(chatId, 'Passwords do not match. Please try again.');
                            return;
                        }

                        try {
                            // Check if the user already exists
                            const userExists = await userModel.findOne({ email });
                            console.log("🚀 ~ bot.once ~ userExists:", userExists)
                            if (userExists) {
                                bot.sendMessage(chatId, 'User with this email already exists.');
                                return;
                            }

                            // Register a new user
                            const response = await axios.post(`${API_URL}/signup`, {
                                name,
                                email,
                                password,
                                confirmPassword,
                            });
                            console.log("🚀 ~ bot.once ~ response:", response)
                            const { message, data } = response.data;
                            console.log('Success:', message, data);
                            await bot.sendMessage(chatId, `User registered successfully. Email: ${data.email}`);
                        } catch (error) {
                            console.error('Error:', error.message);
                            bot.sendMessage(chatId, `An error occurred while registering the user: ${error.message}`);
                        }
                        // Ask the user for email
                        bot.sendMessage(chatId, 'Please provide your email:');
                        bot.once('message', async (emailMsg) => {
                            const email = emailMsg.text;

                            // Ask the user for OTP
                            bot.sendMessage(chatId, 'Please Check Your Email & Enter your OTP:');
                            bot.once('message', async (otpMsg) => {
                                const otp = otpMsg.text;
                                console.log("🚀 ~ bot.once ~ email:", email);

                                try {
                                    // Verify the user with OTP
                                    const response = await axios.post(`${API_URL}/verify`, {
                                        email,
                                        otp,
                                    });

                                    console.log("---------------------------", response.data);

                                    if (response.data.status == true) {
                                        // User verified successfully
                                        const { message, data } = response.data;
                                        console.log('Success:', message, data);
                                        await bot.sendMessage(chatId, `User verified successfully`);
                                    } else if (response.data.status == false) {
                                        // Handle case where OTP is invalid
                                        bot.sendMessage(chatId, `Invalid OTP. Please enter a valid OTP.`);
                                    }
                                } catch (error) {
                                    console.error('Error:', error.message);
                                    bot.sendMessage(chatId, `An error occurred while verifying the user: ${error.message}`);
                                }
                            });
                        });

                    });
                });
            });
        });
    });


    bot.onText(/\/login/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Please provide your email:');
        bot.once('message', async (emailMsg) => {
            const email = emailMsg.text;
            bot.sendMessage(chatId, 'Please provide your password:');
            bot.once('message', async (passwordMsg) => {
                const password = passwordMsg.text;
                try {
                    // Login the user
                    const response = await axios.post(`${API_URL}/login`, {
                        email,
                        password,
                    });
                    if (response.data.status === true) {
                        // Send a message with a link to the website
                        bot.sendMessage(chatId, `Login successful! Click [here](${WEBSITE_URL}) to go to the website.`, { parse_mode: 'Markdown' });
                    } else {
                        bot.sendMessage(chatId, 'Invalid email or password. Please try again.');
                    }
                } catch (error) {
                    console.error('Error:', error.message);
                    bot.sendMessage(chatId, `An error occurred while logging in: ${error.message}`);
                }
            });
        });
    });


    // Command to initiate the password reset process
    bot.onText(/\/resetpassword/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Please provide your email to reset the password:');
        bot.once('message', async (emailMsg) => {
            const email = emailMsg.text;
            try {
                // Send a request to reset the password
                const response = await axios.post(`${API_URL}/forgetpassword`, { email });
                bot.sendMessage(chatId, response.data.msg);
            } catch (error) {
                console.error('Error:', error.message);
                bot.sendMessage(chatId, `An error occurred while resetting the password: ${error.message}`);
            }
        });
    });

    // Command to reset the password using the OTP
    bot.onText(/\/resetotp/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Please provide your email and the OTP separated by space:');
        bot.once('message', async (msg) => {
            const [email, otp] = msg.text.split(' ');
            try {
                // Send a request to reset the password with OTP
                const response = await axios.post(`${API_URL}/resetpassword`, { email, otp });
                bot.sendMessage(chatId, response.data.msg);
            } catch (error) {
                console.error('Error:', error.message);
                bot.sendMessage(chatId, `An error occurred while resetting the password: ${error.message}`);
            }
        });
    });


    // Handle /watchlist command
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    // Check if the message starts with /watchlist
    if (text.startsWith('/watchlist')) {
        // Extract the coin ID from the message
        const coinId = text.split(' ')[1];

        try {
            // Call your watchList API endpoint
            const response = await axios.post(`${API_URL}/watchList`, { coinId }, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`, // Assuming you have a token for authorization
                },
            });

            if (response.data.status) {
                bot.sendMessage(chatId, 'Coin added to watchlist successfully');
            } else {
                bot.sendMessage(chatId, 'Failed to add coin to watchlist. ' + response.data.msg);
            }
        } catch (error) {
            console.error('Error in watchList:', error);
            bot.sendMessage(chatId, 'Failed to add coin to watchlist. Something went wrong.');
        }
    }
});
}

module.exports = {
    TelegramBott
}
