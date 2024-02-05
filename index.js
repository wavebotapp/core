

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


