const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);NzIzNjgyNTA0NTE4OTI2Mzc5.Xu1RKQ.CgIu3g93s7GCC5_ypKTh-wc3eGU
