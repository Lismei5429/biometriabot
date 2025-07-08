const TelegramBot = require('node-telegram-bot-api');

// Token del bot
const token = '8120539310:AAE0S0xrESMcIbe9QFyLc6ZVStlKflsiYIk';

// Crear el bot
const bot = new TelegramBot(token, { polling: true });

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const bienvenida = `Hola ${msg.from.first_name}!\n\nBienvenido a la plataforma MinSpaceBot.\n\nPulsa el botón de abajo para abrir la mini aplicación.`;

  const opciones = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Abrir mini app',
            web_app: {
              url: 'https://biometriabot.onrender.com'
            }
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, bienvenida, opciones);
});
