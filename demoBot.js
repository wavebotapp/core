
const { MongoClient } = require('mongodb');
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual MongoDB connection string
const uri = 'mongodb://127.0.0.1:27017/';

// Replace 'YOUR_DATABASE_NAME' with your actual database name
const dbName = 'WaveBot';

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('7007643106:AAGzE_xdclVp07EfzJ6nl_OgTtP8EE9QWDc', { polling: true });

async function TelegramBott()  {
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id;
            console.log("🚀 ~ bot.on ~ chatId:", chatId);
            const userTelegramId = msg.from.id;
            console.log("🚀 ~ bot.on ~ userTelegramId:", userTelegramId);
    
            // Connect to MongoDB
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            try {
                await client.connect();
                console.log("Connected to MongoDB");

                const database = client.db(dbName);
                console.log("🚀 ~ bot.on ~ database:", database)
                const collection = database.collection('users');
                console.log("🚀 ~ bot.on ~ collection:", collection)
    
                // Find the user in the database using their Telegram chat ID
                const user = await collection.findOne({ telegramChatId: userTelegramId });
                console.log("User found:", user);
    
                if (user) {
                    const walletAddress = user.wallet.address;
                    const walletPrivateKey = user.wallet.privateKey;
                    // Send wallet information back to the user
                    bot.sendMessage(chatId, `Wallet Address: ${walletAddress}`);
                    bot.sendMessage(chatId, `Wallet Private Key: ${walletPrivateKey}`);
                } else {
                    bot.sendMessage(chatId, 'User not found in the database.');
                }
            } catch (error) {
                console.error('Error occurred:', error);
            } finally {
                await client.close();
            }
        });
}
module.exports = {
    TelegramBott
}
