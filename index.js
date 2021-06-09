const { CommandoClient } = require("discord.js-commando"); // Refer to https://discord.js.org/#/docs/commando/master/general/welcome for help.
const botData = require("./botData.js"); // Imports custom botData information for the bot.
const discord = require("discord.js"); // Refer to https://discord.js.org/#/docs/main/stable/general/welcome for help.
const token = require("./token.js"); // Imports the token key for the bot to launch.
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);
const path = require("path");

const bot = new CommandoClient({
  commandPrefix: botPrefix,
});

bot.registry
  .registerDefaultTypes()
  .registerGroups([
    ['admin', 'Admin'],
    ['cubing', 'Cubing'],
    ['ranking', 'Ranking'],
    ['simple', 'Simple'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));
// End of command registration

bot.login(key);

bot.on('ready', function () {
  bot.user.setActivity(activityMessage);
  console.log(`Successfully Signed Into: ${bot.user.tag}`);
  console.log(`Bot Developer: ${Developer}`);
  console.log(`Running Version: ${Version}`);
});

bot.on('ready', function() {
  var countdownToDCP = Number(12000000);

  while (countdownToDCP >= 0) {
    countdownToDCP--;

    if (countdownToDCP == 0) {
      countdownToDCP = Number(12000000);

      var randomNumber = Math.floor(Math.random * 25) + 1;

      if (randomNumber == 1) {

      } else if (randomNumber == 2) {

      } else if (randomNumber == 3) {

      } else if (randomNumber == 4) {

      } else if (randomNumber == 5) {
        
      } else if (randomNumber == 6) {

      } else if (randomNumber == 7) {
        
      } else if (randomNumber == 8) {

      } else if (randomNumber == 9) {

      } else if (randomNumber == 10) {

      } else if (randomNumber == 11) {
        
      } else if (randomNumber == 12) {

      } else if (randomNumber == 13) {
        
      } else if (randomNumber == 14) {
        
      } else if (randomNumber == 15) {

      } else if (randomNumber == 16) {

      } else if (randomNumber == 17) {

      } else if (randomNumber == 18) {

      } else if (randomNumber == 19) {

      } else if (randomNumber == 20) {

      } else if (randomNumber == 21) {

      } else if (randomNumber == 22) {

      } else if (randomNumber == 23) {
        
      }

      DCP = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("**DEAD CHAT PING**")
        .setDescription(`
        
        `)
    }
  }
});