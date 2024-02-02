const express = require('express');
const { Telegraf } = require('telegraf');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const TELEGRAM_BOT_TOKEN = '6870303806:AAHnxt-JsIOajomAut5Y-VSUdcFLMC-OI9g';
const TELEGRAM_BOT_USERNAME = 'https://t.me/TredingDemo_bot';
const JWT_SECRET = 'abc';
const WEB_APP_URL = 'https://unibot.app/x?pair=0x4585fe77225b41b697c938b018e2ac67ac5a20c0';

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Middleware for protecting routes that require authentication
const authenticateUser = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(authToken, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the website. Please <a href="/login">login with Telegram</a>.');
});

// Login route
app.get('/login', (req, res) => {
  // Generate an authentication link with Telegram button
  const authUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}?start=auth`;
  const loginButton = `<a href="${authUrl}">Authenticate with Telegram</a>`;
  
  res.send(`Click the following link to login: ${loginButton}`);
});

// Telegram callback route
bot.on('text', (ctx) => {
  const user = ctx.message.from;

  // Authenticate the user and generate a JWT token
  const authToken = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });

  // Redirect the user back to the website with the JWT token
  ctx.reply(`Authentication successful! Redirecting to the website...`);
  ctx.replyWithHTML(`<a href="${WEB_APP_URL}/complete_login?token=${authToken}">Continue</a>`);
});

// Protected route example
app.get('/protected', authenticateUser, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}! This is a protected route.` });
});

// Start the bot
bot.launch();

// Start the web server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
