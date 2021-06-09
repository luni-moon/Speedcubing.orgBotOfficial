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
      var DCPQuestion = "";

      if (randomNumber == 1) {
        DCPQuestion = "What is your favourite WCA event?";
      } else if (randomNumber == 2) {
        DCPQuestion = "What is your 3x3 Main?";
      } else if (randomNumber == 3) {
        DCPQuestion = "How did you start cubing?";
      } else if (randomNumber == 4) {
        DCPQuestion = "How did you learn to solve the 3x3?";
      } else if (randomNumber == 5) {
        DCPQuestion = "When did you start cubing?";
      } else if (randomNumber == 6) {
        DCPQuestion = "Where was your first competition?";
      } else if (randomNumber == 7) {
        DCPQuestion = "When did you go to your first competition?";
      } else if (randomNumber == 8) {
        DCPQuestion = "What was your best Ao5 for 3x3 at your first competition?";
      } else if (randomNumber == 9) {
        DCPQuestion = "What was your best single for 3x3 at your first competition?";
      } else if (randomNumber == 10) {
        DCPQuestion = "What is your current Sub-X for 3x3?";
      } else if (randomNumber == 11) {
        DCPQuestion = "What is you current best Ao5 for 3x3?";
      } else if (randomNumber == 12) {
        DCPQuestion = "What is your current best single for 3x3?";
      } else if (randomNumber == 13) {
        DCPQuestion = "What is the weirdest 3x3 scramble you have ever gotten?";
      } else if (randomNumber == 14) {
        DCPQuestion = "Who is your favourite YouCuber?";
      } else if (randomNumber == 15) {
        DCPQuestion = "What is your favourite Speedcubing store?";
      } else if (randomNumber == 16) {
        DCPQuestion = "Do you have any suggestions for this Discord server?";
      } else if (randomNumber == 17) {
        DCPQuestion = "Have you met any famous YouCubers? If so, who was it, and do you have a story about it?";
      } else if (randomNumber == 18) {
        DCPQuestion = "What method do you use for 3x3?";
      } else if (randomNumber == 19) {
        DCPQuestion = "What is your favourite famous big cube pop in a competition?";
      } else if (randomNumber == 20) {
        DCPQuestion = "How many puzzles do you have in your collection?";
      } else if (randomNumber == 21) {
        DCPQuestion = "What is the most complicated puzzle that you know how to solve?";
      } else if (randomNumber == 22) {
        DCPQuestion = "How much do you practice cubing, a day?";
      } else if (randomNumber == 23) {
        DCPQuestion = "What other hobbies do you have, besides cubing?";
      } else if (randomNumber == 24) {
        DCPQuestion = "How did you hear of Speedcubing.org?";
      } else if (randomNumber == 25) {
        DCPQuestion = "What is the highest order NxN puzzle you have?";
      }

      DCP = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("**DEAD CHAT PING**")
        .setDescription(`
          ${DCPQuestion}
        `)
        message.channel.send(DCP);
    }
  }
});