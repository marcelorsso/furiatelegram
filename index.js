const TelegramBot = require('node-telegram-bot-api');

// Substitua pelo seu token real
const token = '7205686158:AAGlgpOp3FxWgQzaGSqjfysSQQ9DJaahoPk'; 
const bot = new TelegramBot(token, { polling: true });

// Comando /start - Boas-vindas
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `Olá ${msg.chat.first_name}! Bem-vindo ao bot da FURIA! Como posso te ajudar hoje?`;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Última Partida', callback_data: 'last_match' }],
        [{ text: 'Loja Oficial', callback_data: 'merch' }],
        [{ text: 'Informações sobre o Time', callback_data: 'team' }],
        [{ text: 'Últimas Notícias', callback_data: 'news' }],
        [{ text: 'Lineup Counter Strike', callback_data: 'lineup' }]
      ]
    }
  };
  bot.sendMessage(chatId, welcomeMessage, options);
});

// Comando /team - Informações sobre o time
bot.onText(/\/team/, (msg) => {
  const chatId = msg.chat.id;
  const message = "A FURIA é uma das equipes mais fortes do Brasil no CS:GO, formada por jogadores de altíssimo nível. Saiba mais sobre os jogadores e torneios no nosso site!";
  bot.sendMessage(chatId, message);
});

// Comando /lastmatch - Última partida
bot.onText(/\/lastmatch/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Última partida da FURIA: Derrota contra o time The Mongolz por 2-0! Confira todos os detalhes em nosso site.";
  bot.sendMessage(chatId, message);
});

// Comando /merch - Loja de mercadorias
bot.onText(/\/merch/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Visite nossa loja oficial para produtos exclusivos da FURIA: https://www.furia.gg";
  bot.sendMessage(chatId, message);
});

// Comando /news - Últimas notícias
bot.onText(/\/news/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Confira as últimas notícias sobre a FURIA! Confira as últimas notícias sobre a FURIA! Fúria vence G3X na Kings League!";
  bot.sendMessage(chatId, message);
});

bot.onText(/\/lineup/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Gabriel 'FalleN' Toledo, Kaike 'KSCERATO' Cerato, Yuri 'yuurih' Boian, Felipe 'skullz' Medeiros, Danil 'molodoy' Golubenko.";
  bot.sendMessage(chatId, message);
});

// Respostas aos botões (interações)
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  if (query.data === 'last_match') {
    bot.sendMessage(chatId, "Última partida da FURIA: Derrota contra o time The Mongolz por 2-0! Confira todos os detalhes em nosso site.");
  } else if (query.data === 'merch') {
    bot.sendMessage(chatId, "Visite nossa loja oficial para produtos exclusivos da FURIA: https://www.furia.gg");
  } else if (query.data === 'team') {
    bot.sendMessage(chatId, "A FURIA é uma das equipes mais fortes do Brasil no CS:GO, com jogadores incríveis!");
  } else if (query.data === 'news') {
    bot.sendMessage(chatId, "Últimas notícias sobre a FURIA: Fúria vence G3X na Kings League!");
  }else if (query.data === 'lineup') {
    bot.sendMessage(chatId, "Gabriel 'FalleN' Toledo,    Kaike 'KSCERATO' Cerato,     Yuri 'yuurih' Boian,    Felipe 'skullz' Medeiros,    Danil 'molodoy' Golubenko.");
  }
});
