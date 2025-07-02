const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const imageURL = 'https://images.tokyo99.ink/banner/tokyo99/Banner%20Depan%20Event%20Space%20x1000.webp';
  const caption = `🎰 *Selamat Datang di TOKYO99*\n\nKlik tombol di bawah untuk mengakses link resmi & anti nawala!`;

  bot.sendPhoto(chatId, imageURL, {
    caption,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🎯 Mulai Sekarang',
          web_app: {
            url: 'https://short-it.pro/tokyo99' // Ganti ini dengan link kamu
          }
        }
      ]]
    }
  });
  // Kirim keyboard mini app di bawah kolom input (seperti Hoki99)
  bot.sendMessage(chatId, `Klik tombol di bawah untuk masuk langsung:`, {
    reply_markup: {
      keyboard: [[
        {
          text: '🔗 Mulai Sekarang',
          web_app: { url: 'https://short-it.pro/tokyo99' }
        }
      ]],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});
