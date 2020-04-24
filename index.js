require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
});

bot.on('message', msg => {
  if (msg.content === '$ping') {
    msg.channel.send(
      '$pong'
    )
  }
});

bot.login(TOKEN);
