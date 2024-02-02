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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// bot.on('message', (message) => {
//     let chat_id = message.chat.id;
//     let user_message = message.text.toLowerCase();
//     let sendPhotoPath = 'abcd.jpg';
//     let sendVideoPath = 'videoplayback.3gpp';
//     let responseMsg;

//     if (user_message.includes('hello')) {
//         responseMsg = 'Hello! How can I help you today?';
//     } else if (user_message.includes('help')) {
//         responseMsg = 'Sure, I can assist you. What do you need help with?';
//     } else if (user_message.includes('photo')) {
//         bot.sendPhoto(chat_id, sendPhotoPath, { caption: 'Here is a photo for you!' });
//         return;
//     } else if (user_message.includes('video')) {
//         bot.sendVideo(chat_id, sendVideoPath, { caption: 'Here is a video for you!' });
//         return;
//     } else if (user_message.includes('website')) {
//         bot.sendChatAction(chat_id, 'typing');
//         responseMsg = 'Sure, check out our website: [https://unibot.app/x?pair=0x8dbee21e8586ee356130074aaa789c33159921ca]';
//         bot.sendMessage(chat_id, responseMsg, {
//             parse_mode: 'Markdown',
//             disable_web_page_preview: false, // Enable link preview
//         });
//         return;
//     } else if (user_message.includes('movie')) {
//         // Simulate typing action
//         bot.sendChatAction(chat_id, 'typing');

//         // Array of random movie links
//         const movieLinks = [
//             'https://vegamovies.dad/',
//             'https://www.b4umovies.in/',
//             'https://www.filmyzilla.cz/',
//             'https://www.youtube.com/watch?v=LKNHVDPKy7g',
//         ];

//         // Select a random movie link
//         const randomMovieLink = movieLinks[Math.floor(Math.random() * movieLinks.length)];

//         // Provide the random movie link in the response
//         responseMsg = `Here's a random movie link for you: [Random Movie](${randomMovieLink})`;

//         // Send the dynamic response with the link
//         bot.sendMessage(chat_id, responseMsg, {
//             parse_mode: 'Markdown',
//             disable_web_page_preview: false, // Enable link preview
//         });
//         return; // Stop further execution to avoid sending the general response
//     } else {
//         responseMsg = 'I can help you with general inquiries.';
//     }

//     // Send the dynamic response
//     bot.sendMessage(chat_id, responseMsg);
// });

//------------------------------ ******************************************************** ----------------------------------------------------

// const TelegramBot = require('node-telegram-bot-api');
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

// const buttons = [
//   { text: '✅ Easy Mode', callback_data: 'easyModeButton' },
//   { text: 'Expert Mode', callback_data: 'expertModeButton' },
// ];

// bot.on('callback_query', (callbackQuery) => {
//   const chatId = callbackQuery.message.chat.id;
//   const messageId = callbackQuery.message.message_id;
//   const selectedButton = callbackQuery.data;

//   // Toggle the presence of the symbol for the selected button
//   buttons.forEach((button) => {
//     if (button.callback_data === selectedButton) {
//       button.text = button.text.includes('✅') ? button.text.replace('✅', '') : `✅ ${button.text}`;
//     }
//   });

//   // Edit the message to reflect the updated buttons
//   bot.editMessageReplyMarkup({
//     inline_keyboard: [buttons.map(({ text, callback_data }) => ({ text, callback_data }))],
//   }, {
//     chat_id: chatId,
//     message_id: messageId,
//   });
// });

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Choose an option:', {
//     reply_markup: {
//       inline_keyboard: [buttons.map(({ text, callback_data }) => ({ text, callback_data }))],
//     },
//   });
// });

// bot.startPolling();



// -------------------------- Buttons --------------------------

// const TelegramBot = require('node-telegram-bot-api');
// require('dotenv').config();
// const TOKEN = process.env.TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;

//   const keyboard = {
//     inline_keyboard: [
//       [
//         { text: '↰ Menu', callback_data: 'menuButton' },
//         { text: '✖ Close', callback_data: 'closeButton' },
//       ],
//       [
//         { text: '✅ Easy Mode', callback_data: 'easyModeButton' },
//         { text: 'Expert Mode', callback_data: 'expertModeButton' },
//       ],
//       [
//         { text: '🔴 PrivateTX', callback_data: 'privateTXButton' },
//         { text: '🟢 Failgurd', callback_data: 'failgurdButton' },
//         { text: '🔴 Frontrun', callback_data: 'frontrunButton' },
//       ],
//       [
//         { text: '≡  SELECT WALLETS ≡ ', callback_data: 'selectWalletsButton' },
//       ],
//       [
//         { text: 'w1', callback_data: 'w1Button' },
//         { text: '✅ w2', callback_data: 'w2Button' },
//         { text: 'w3', callback_data: 'w3Button' },
//       ],
//       [
//         { text: '≡ BUY WITH  ≡', callback_data: 'buyWithButton' },
//       ],
//       [
//         { text: '✅⇌ 0.1 ETH', callback_data: 'ethAmountButton' },
//         { text: '✏️ 0.1 ETH', callback_data: 'ethValueButton' },
//       ],
//       [
//         { text: '≡ SLIPPAGE ≡', callback_data: 'slippageButton' },
//       ],
//       [
//         { text: '✅ Auto', callback_data: 'autoSlippageButton' },
//         { text: '⇌ 3%', callback_data: 'slippage3Button' },
//         { text: '✏️ 10%', callback_data: 'slippage10Button' },
//       ],
//       [
//         { text: '≡ RECEIVE TOKEN ≡', callback_data: 'receiveTokenButton' },
//       ],
//       [
//         { text: 'USDC', callback_data: 'usdcButton' }, 
//         { text: '✅✏️0xf8..c3C9', callback_data: 'tokenAddressButton' },
//       ],
//       [
//         { text: ' SEND TX', callback_data: 'sendTXButton' },
//       ],
//     ],
//   };

//   const options = {
//     reply_markup: JSON.stringify(keyboard),
//   };

//   bot.sendMessage(chatId, 'Choose an option:', options);
// });

// // Listen for callback_data when a button is clicked
// bot.on('callback_query', (callbackQuery) => {
//   const chatId = callbackQuery.message.chat.id;
//   const messageId = callbackQuery.message.message_id;
//   const data = callbackQuery.data;

//   // Handle button click based on callback_data
//   handleButtonClick(chatId, messageId ,  data);
// });

// // Function to handle button clicks
// function handleButtonClick(chatId , messageId , callbackData) {
//   switch (callbackData) {
//     case 'menuButton':
//       bot.sendMessage(chatId, 'Menu button clicked');
//       break;

//     case 'closeButton':
//       //bot.sendMessage(chatId, 'Close button clicked');
//       bot.editMessageText('Menu closed.', { chat_id: chatId, message_id: messageId });
//       break;

//     case 'easyModeButton':
//       bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:'); 
//       break;

//     case 'expertModeButton':
//       bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:'); 
//       break;

//     case 'privateTXButton':
//       bot.sendMessage(chatId, 'Private button clicked'); 
//       break;

//     case 'failgurdButton':
//       bot.sendMessage(chatId, 'Failgurd button clicked'); 
//       break;

//     case 'w1Button':
//       bot.sendMessage(chatId, 'Click W1'); 
//       break;

//     case 'w2Button':
//       bot.sendMessage(chatId, 'Click W2');
//        break;

//     case 'w3Button':
//       bot.sendMessage(chatId, 'Click W3'); 
//       break;

//     case 'ethAmountButton':
//       bot.sendMessage(chatId, 'EthAmount button clicked'); 
//       break;

//     case 'ethValueButton':
//       bot.sendMessage(chatId, 'EthValue button clicked');
//        break;

//     case 'usdcButton':
//       bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:'); 
//       break;

//     case 'tokenAddressButton':
//       bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:'); 
//       break;

//     case 'sendTXButton':
//       bot.sendMessage(chatId, 'Enter Token Address'); 
//       break;

//     default:
//       // Handle unknown button click
//       console.log(`Unknown button clicked: ${callbackData}`);
//   }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const TelegramBot = require('node-telegram-bot-api');
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

// // Handle incoming messages
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   if (msg.text === '/start') {
//     // Send a welcome message with a textbox and a menu button
//     bot.sendMessage(chatId, 'Welcome to the bot! Type something in the textbox:', {
//       reply_markup: {
//         keyboard: [
//           [{ text: 'menu', request_contact: false, request_location: false }],
//           [{ text: 'buy', request_contact: false, request_location: false }],
//           [{ text: 'sell', request_contact: false, request_location: false }],
//           [{ text: 'watchlist', request_contact: false, request_location: false }],
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true,
//       },
//     });
//   } else if (msg.text === 'menu') {
//     // Handle the MENU button click
//     bot.sendMessage(chatId, 'You clicked the menu button.');
//   } else if (msg.text === 'buy') {
//     // Handle the MENU button click
//     bot.sendMessage(chatId, 'You clicked the buy button.');
//   } else if (msg.text === 'sell') {
//     // Handle the MENU button click
//     bot.sendMessage(chatId, 'You clicked the sell button.');
//   } else if (msg.text === 'watchlist') {
//     // Handle the MENU button click
//     bot.sendMessage(chatId, 'You clicked the watchlist button.');
//   } else {
//     // Handle other text input
//     bot.sendMessage(chatId, `You typed: ${msg.text}`);
//   }
// });

// console.log('Bot started!');


// const TelegramBot = require('node-telegram-bot-api');
// require('dotenv').config();
// const TOKEN = process.env.TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   const menuKeyboard = {
//     inline_keyboard: [
//       [
//         { text: 'Buy Tokens', callback_data: 'buyTokensButton' },
//         { text: 'Sell Tokens', callback_data: 'sellTokensButton' },
//       ],
//       [
//         { text: 'Buy Limit', callback_data: 'buyLimitButton' },
//         { text: 'Sell Limit', callback_data: 'sellLimitButton' },
//       ],
//       [
//         { text: 'Snipers(ERC-20)', callback_data: 'snipersButton' },
//       ],
//       [
//         { text: 'Token Balances', callback_data: 'tokenBalancesButton' },
//         { text: 'Wallet Analysis', callback_data: 'walletAnaiysisButton' },
//         { text: '🌐 Flex PnL', callback_data: 'FlexButton' },
//       ],
//       [
//         { text: '💻 Uni-X', callback_data: 'uniButton' },
//         { text: 'Bridge ⟠Eth', callback_data: 'bridgeButton' },
//         { text: '⚙️Settings', callback_data: 'settingButton' },
//       ],
//     ],
//   };

//   if (msg.text === '/start') {
//     bot.sendMessage(chatId, 'Welcome to the bot! Type something in the textbox:', {
//       reply_markup: {
//         keyboard: [
//           [{ text: 'menu', request_contact: false, request_location: false }],
//           [{ text: 'buy', request_contact: false, request_location: false }],
//           [{ text: 'sell', request_contact: false, request_location: false }],
//           [{ text: 'watchlist', request_contact: false, request_location: false }],
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true,
//       },
//     });
//   } else if (msg.text === 'menu') {
//     bot.sendMessage(chatId, 'Choose an option:', {
//       reply_markup: JSON.stringify(menuKeyboard),
//     });

//     bot.on('callback_query', (callbackQuery) => {
//       const chatId = callbackQuery.message.chat.id;
//       const messageId = callbackQuery.message.message_id;
//       const data = callbackQuery.data;

//       handleButtonClick(chatId, messageId, data);
//     });

//     function handleButtonClick(chatId, messageId, callbackData) {
//       switch (callbackData) {
//         case 'buyTokensButton':
//           bot.sendMessage(chatId, 'Buy Token button clicked');
//           break;

//         case 'sellTokensButton':
//           //bot.editMessageText('Menu closed.', { chat_id: chatId, message_id: messageId });
//           bot.sendMessage(chatId, 'Sell Token button clicked');
//           break;

//         case 'buyLimitButton':
//           bot.sendMessage(chatId, 'Buy Limit button clicked');
//           break;

//         case 'sellLimitButton':
//           bot.sendMessage(chatId, 'Sell Limit button clicked');
//           break;

//         case 'snipersButton':
//           bot.sendMessage(chatId, 'Sniper  button clicked');
//           break;

//         case 'tokenBalancesButton':
//           bot.sendMessage(chatId, 'Token Balance button clicked');
//           break;

//         case 'walletAnaiysisButton':
//           bot.sendMessage(chatId, 'Wallet Anaiysis button clicked');
//           break;

//         case 'FlexButton':
//           bot.sendMessage(chatId, 'Flex button clicked');
//           break;

//         case 'uniButton':
//           bot.sendMessage(chatId, 'Uni button clicked');
//           break;

//         case 'bridgeButton':
//           bot.sendMessage(chatId, 'bridge button clicked');
//           break;

//         case 'settingButton':
//           bot.sendMessage(chatId, 'setting button clicked');
//           break;

//         default:
//           console.log(`Unknown button clicked: ${callbackData}`);
//       }
//     }

//   } else if (msg.text === 'buy') {
//     const buyKeyboard = {
//       inline_keyboard: [
//         [
//           { text: '↰ Menu', callback_data: 'menuButton' },
//           { text: '✖ Close', callback_data: 'closeButton' },
//         ],
//         [
//           { text: '✅ Easy Mode', callback_data: 'easyModeButton' },
//           { text: 'Expert Mode', callback_data: 'expertModeButton' },
//         ],
//         [
//           { text: '🔴 PrivateTX', callback_data: 'privateTXButton' },
//           { text: '🟢 Failgurd', callback_data: 'failgurdButton' },
//           { text: '🔴 Frontrun', callback_data: 'frontrunButton' },
//         ],
//         [
//           { text: '≡  SELECT WALLETS ≡ ', callback_data: 'selectWalletsButton' },
//         ],
//         [
//           { text: 'w1', callback_data: 'w1Button' },
//           { text: '✅ w2', callback_data: 'w2Button' },
//           { text: 'w3', callback_data: 'w3Button' },
//         ],
//         [
//           { text: '≡ BUY WITH  ≡', callback_data: 'buyWithButton' },
//         ],
//         [
//           { text: '✅⇌ 0.1 ETH', callback_data: 'ethAmountButton' },
//           { text: '✏️ 0.1 ETH', callback_data: 'ethValueButton' },
//         ],
//         [
//           { text: '≡ SLIPPAGE ≡', callback_data: 'slippageButton' },
//         ],
//         [
//           { text: '✅ Auto', callback_data: 'autoSlippageButton' },
//           { text: '⇌ 3%', callback_data: 'slippage3Button' },
//           { text: '✏️ 10%', callback_data: 'slippage10Button' },
//         ],
//         [
//           { text: '≡ RECEIVE TOKEN ≡', callback_data: 'receiveTokenButton' },
//         ],
//         [
//           { text: 'USDC', callback_data: 'usdcButton' },
//           { text: '✅✏️0xf8..c3C9', callback_data: 'tokenAddressButton' },
//         ],
//         [
//           { text: ' SEND TX', callback_data: 'sendTXButton' },
//         ],
//       ],
//     };

//     bot.sendMessage(chatId, 'Choose an option:', {
//       reply_markup: JSON.stringify(buyKeyboard),
//     });

//     bot.on('callback_query', (callbackQuery) => {
//       const chatId = callbackQuery.message.chat.id;
//       const messageId = callbackQuery.message.message_id;
//       const data = callbackQuery.data;

//       handleButtonClick(chatId, messageId, data);
//     });

//     function handleButtonClick(chatId, messageId, callbackData) {
//       console.log("🚀 ~ handleButtonClick ~ chatId:", chatId)
//       console.log("🚀 ~ handleButtonClick ~ messageId:", messageId)
//       switch (callbackData) {
//         case 'menuButton':
//           //bot.sendMessage(chatId, 'Manu click');
//           bot.sendMessage(chatId, 'Menu Click', {
//             reply_markup: JSON.stringify(menuKeyboard),
//           });
//           break;

//         case 'closeButton':
//           bot.editMessageText('Menu closed.', { chat_id: chatId, message_id: messageId });
//           break;

//         case 'easyModeButton':
//           bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:');
//           break;

//         case 'expertModeButton':
//           bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:');
//           break;

//         case 'privateTXButton':
//           bot.sendMessage(chatId, 'Private button clicked');
//           break;

//         case 'failgurdButton':
//           bot.sendMessage(chatId, 'Failgurd button clicked');
//           break;

//         case 'w1Button':
//           bot.sendMessage(chatId, 'Click W1');
//           break;

//         case 'w2Button':
//           bot.sendMessage(chatId, 'Click W2');
//           break;

//         case 'w3Button':
//           bot.sendMessage(chatId, 'Click W3');
//           break;

//         case 'ethAmountButton':
//           bot.sendMessage(chatId, 'EthAmount button clicked');
//           break;

//         case 'ethValueButton':
//           bot.sendMessage(chatId, 'EthValue button clicked');
//           break;

//         case 'usdcButton':
//           bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:');
//           break;

//         case 'tokenAddressButton':
//           bot.sendMessage(chatId, '📝 Enter the token address you wish to buy and send transaction immediately:');
//           break;

//         case 'sendTXButton':
//           bot.sendMessage(chatId, 'Enter Token Address');
//           break;

//         default:
//           console.log(`Unknown button clicked: ${callbackData}`);
//       }
//     }
//   } else if (msg.text === 'sell') {
//     bot.sendMessage(chatId, 'You clicked the sell button.');
//   } else if (msg.text === 'watchlist') {
//     bot.sendMessage(chatId, 'You clicked the watchlist button.');
//   } else {
//     bot.sendMessage(chatId, `You typed: ${msg.text}`);
//   }
// });

// console.log('Bot started!');

// console.log(`Server running`);


const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

const menuKeyboard = {
  inline_keyboard: [
    [
      { text: 'Buy Tokens', callback_data: 'buyTokensButton' },
      { text: 'Sell Tokens', callback_data: 'sellTokensButton' },
    ],
    [
      { text: 'Buy Limit', callback_data: 'buyLimitButton' },
      { text: 'Sell Limit', callback_data: 'sellLimitButton' },
    ],
    [
      { text: 'Snipers(ERC-20)', callback_data: 'snipersButton' },
    ],
    [
      { text: 'Token Balances', callback_data: 'tokenBalancesButton' },
      { text: 'Wallet Analysis', callback_data: 'walletAnaiysisButton' },
      { text: '🌐 Flex PnL', callback_data: 'FlexButton' },
    ],
    [
      { text: '💻 WaveBot', callback_data: 'waveBotButton' },
      { text: 'Bridge ⟠Eth', callback_data: 'bridgeButton' },
      { text: '⚙️Settings', callback_data: 'settingButton' },
    ],
  ],
};


const buyKeyboard = { 
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
    [
      { text: '✅ Easy Mode', callback_data: 'easyModeButton' },
      { text: 'Expert Mode', callback_data: 'expertModeButton' },
    ],
    [
      { text: '🔴 PrivateTX', callback_data: 'privateTXButton' },
      { text: '🟢 Failgurd', callback_data: 'failgurdButton' },
      { text: '🔴 Frontrun', callback_data: 'frontrunButton' },
    ],
    [
      { text: '≡  SELECT WALLETS ≡ ', callback_data: 'selectWalletsButton' },
    ],
    [
      { text: 'w1', callback_data: 'w1Button' },
      { text: '✅ w2', callback_data: 'w2Button' },
      { text: 'w3', callback_data: 'w3Button' },
    ],
    [
      { text: '≡ BUY WITH  ≡', callback_data: 'buyWithButton' },
    ],
    [
      { text: '✅⇌ 0.1 ETH', callback_data: 'ethAmountButton' },
      { text: '✏️ 0.1 ETH', callback_data: 'ethValueButton' },
    ],
    [
      { text: '≡ SLIPPAGE ≡', callback_data: 'slippageButton' },
    ],
    [
      { text: '✅ Auto', callback_data: 'autoSlippageButton' },
      { text: '⇌ 3%', callback_data: 'slippage3Button' },
      { text: '✏️ 10%', callback_data: 'slippage10Button' },
    ],
    [
      { text: '≡ RECEIVE TOKEN ≡', callback_data: 'receiveTokenButton' },
    ],
    [
      { text: 'USDC', callback_data: 'usdcButton' },
      { text: '✅✏️0xf8..c3C9', callback_data: 'tokenAddressButton' },
    ],
    [
      { text: ' SEND TX', callback_data: 'sendTXButton' },
    ],
  ],
};


const settingKeyboard = {
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
    [
      { text: 'Replace Wallet', callback_data: 'replaceWalletButton' },
      { text: 'Import Wallet', callback_data: 'importWalletButton' },
      { text: 'Private Keys', callback_data: 'privateKeysButton' },
    ],
    [
      { text: 'Transfer ⟠Eth ', callback_data: 'transferButton' },
      { text: 'Transfer Token', callback_data: 'transferTokenButton' },
      { text: 'Bridge ⟠Eth', callback_data: 'frontrunButton' },
    ],
    [
      { text: 'Remove/Change Password', callback_data: 'changePassButton' },
    ],
    [
      { text: 'Link Wallet', callback_data: 'linkWalletButton' },
      { text: 'Set Referral Code', callback_data: 'referralButton' },
    ],
    [
      { text: '🔴 Hide Tooltips', callback_data: 'ethAmountButton' },
      { text: '🔴 Mute Value Monitor', callback_data: 'ethValueButton' },
    ],
    [
      { text: 'English ✅ ', callback_data: 'usdcButton' },
      { text: 'Chinese x', callback_data: 'tokenAddressButton' },
    ],
  ],
};


const walletAnalysisKeyboard = {
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '🌐 Flex PnL', callback_data: 'FlexButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
    [
      { text: 'w1', callback_data: 'w1Button' },
      { text: 'w2', callback_data: 'w2Button' },
      { text: 'w3', callback_data: 'w3Button' },
    ],
  ],
};


const sniperMenuKeyboard = {
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
    [
      { text: 'Token Sniper Menu', callback_data: 'tokenSniperMenuButton' },
    ],
    [
      { text: 'Auto Sniper Menu', callback_data: 'autoSniperMenuButton' },
    ],
    [
      { text: 'CopytradeSniperMenu', callback_data: 'copySniperMenuButton' },
    ],
  ],
};


const totalbalanceKeyboard = {
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '↻ Refresh', callback_data: 'snipermenuButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
   
  ],
};


const autosniperMenuKeyboard = {
  inline_keyboard: [
    [
      { text: '↰ Menu', callback_data: 'menuButton' },
      { text: '↰ Sniper Menu', callback_data: 'snipermenuButton' },
      { text: '✖ Close', callback_data: 'closeButton' },
    ],
    [
      { text: '≡ SNIPER ON/OFF ≡ ', callback_data: 'sniperonofButton' },
    ],
    [
      { text: 'w1:🔴', callback_data: 'w1Button' },
      { text: 'w2:🔴', callback_data: 'w2Button' },
      { text: 'w3:🟢', callback_data: 'w3Button' },
    ],
    [
      { text: '≡ SNIPER SETUP ≡ ', callback_data: 'sniperSetupButton' },
    ],
    [
      { text: 'Max Spend Amt:✏️⟠0.08: ', callback_data: 'maxAmtButton' },
    ],
    [
      { text: '❌ Autosell:✏️OFF', callback_data: 'autoSellButton' },
    ],
    [
      { text: '❌ Anti-Rug', callback_data: 'anti-rugButton' },
    ],
    [
      { text: '🎯 Trigger:✏️≥ Sniper🎯', callback_data: 'triggerButton' },
    ],
  ],
};




bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '/start') {
    bot.sendMessage(chatId, 'Welcome to the bot! Type something in the textbox:', {
      reply_markup: {
        keyboard: [
          [{ text: 'menu', request_contact: false, request_location: false }],
          [{ text: 'buy', request_contact: false, request_location: false }],
          [{ text: 'sell', request_contact: false, request_location: false }],
          [{ text: 'watchlist', request_contact: false, request_location: false }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (msg.text === 'menu') {
    bot.sendMessage(chatId, 'Choose an option:', { reply_markup: JSON.stringify(menuKeyboard) });
  } else if (msg.text === 'buy') {
    bot.sendMessage(chatId, 'Choose an option:', { reply_markup: JSON.stringify(buyKeyboard) });
  } else if (msg.text === 'sell') {
    bot.sendMessage(chatId, 'You clicked the sell button.');
  } else if (msg.text === 'watchlist') {
    bot.sendMessage(chatId, 'You clicked the watchlist button.');
  } else {
    bot.sendMessage(chatId, `You typed: ${msg.text}`);
  }
});



bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;
  let sendVideoPath = 'DemoVideo.mp4';

  switch (data) {
    case 'buyTokensButton':
      bot.sendMessage(chatId, 'Buy Token button clicked');
      break;
    case 'sellTokensButton':
      bot.sendMessage(chatId, 'Sell Token button clicked');
      break;
    case 'menuButton':
      bot.sendMessage(chatId, 'Menu Click', { reply_markup: JSON.stringify(menuKeyboard) });
      break;
    case 'closeButton':
      bot.editMessageText('Menu closed.', { chat_id: chatId, message_id: messageId });
      break;
    case 'settingButton':
      bot.sendMessage(chatId, 'Setting Open.', { reply_markup: JSON.stringify(settingKeyboard) });
      break;
    case 'FlexButton':
      bot.sendMessage(chatId, '🌐 Enter CA and referral code (if applicable) to generate flex:');
      break;
    case 'walletAnaiysisButton':
      bot.sendMessage(chatId, '📈 Wallet Analysis: Which wallet would you like to view analysis for?', { reply_markup: JSON.stringify(walletAnalysisKeyboard) });
      break;
    case 'snipersButton':
      bot.sendMessage(chatId, `═🎯  Sniper Menu (ERC-20)  🎯═`, {reply_markup: JSON.stringify(sniperMenuKeyboard)} )
      break;
    case 'snipermenuButton':
      bot.sendMessage(chatId, '═🎯  Sniper Menu (ERC-20)  🎯═ ',{reply_markup: JSON.stringify(sniperMenuKeyboard)} )
      break;
    case 'tokenBalancesButton':
      bot.sendMessage(chatId, `Gas: 20   ═   Block: 19140289   ═   ETH: $2302
      🌑  Token Balances  🌑
      
      ═ Ethereum ═
      None`,{reply_markup: JSON.stringify(totalbalanceKeyboard)})
      break;
    case 'autoSniperMenuButton':
      bot.sendMessage(chatId, `Gas: 16   ═   Block: 19138867   ═   ETH: $2293
      ══🎯  Auto Sniper | Tutorial (https://learn.unibot.app/product-guides/method-sniper)  🎯══
      Auto Sniper: Automatically snipe tokens when the amount of users sniping the token hits your threshold number. Autosnipes use First or Fail settings which means you only hit when you are bottom of the block which significantly reduces risk.`, {reply_markup: JSON.stringify(autosniperMenuKeyboard)} )
      break;
    case 'waveBotButton':
      bot.sendVideo(chatId, sendVideoPath, {
        caption: `WaveBot: Trade smarter and faster through our webapp. Tutorials
      
Click the link below to login directly to Unibot X. The link is single use and lasts for 5 minutes.` });
      break;
    default:
      console.log(`Unknown button clicked: ${data}`);
  }
});

console.log('Bot started!');
console.log('Server running');


