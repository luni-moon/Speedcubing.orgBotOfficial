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

/* const setting = 1;

bot.on('ready', () => {
  setInterval(() => {
    if (setting == 0) {
      return;
    } else {
    var PingChannel = bot.channels.cache.get(DCPPingChannelID);
    var randomNumber = Math.floor(Math.random * 25) + 1;

    if(randomNumber == 1){var DCPQuestion = "What is your favourite WCA event?"};
    if(randomNumber == 2){var DCPQuestion = "What is your 3x3 Main?"};
    if(randomNumber == 3){var DCPQuestion = "How did you start cubing?"};
    if(randomNumber == 4){var DCPQuestion = "How did you learn to solve the 3x3?"};
    if(randomNumber == 5){var DCPQuestion = "When did you start cubing?"};
    if(randomNumber == 6){var DCPQuestion = "Where was your first competition?"};
    if(randomNumber == 7){var DCPQuestion = "When did you go to your first competition?"};
    if(randomNumber == 8){var DCPQuestion = "What was your best Ao5 for 3x3 at your first competition?"};
    if(randomNumber == 9){var DCPQuestion = "What was your best single for 3x3 at your first competition?"};
    if(randomNumber == 10){var DCPQuestion = "What is your current Sub-X for 3x3?"};
    if(randomNumber == 11){var DCPQuestion = "What is you current best Ao5 for 3x3?"};
    if(randomNumber == 12){var DCPQuestion = "What is your current best single for 3x3?"};
    if(randomNumber == 13){var DCPQuestion = "What is the weirdest 3x3 scramble you have ever gotten?"};
    if(randomNumber == 14){var DCPQuestion = "Who is your favourite YouCuber?"};
    if(randomNumber == 15){var DCPQuestion = "What is your favourite Speedcubing store?"};
    if(randomNumber == 16){var DCPQuestion = "Do you have any suggestions for this Discord server?"};
    if(randomNumber == 17){var DCPQuestion = "Have you met any famous YouCubers? If so, who was it, and do you have a story about it?"};
    if(randomNumber == 18){var DCPQuestion = "What method do you use for 3x3?"};
    if(randomNumber == 19){var DCPQuestion = "What is your favourite famous big cube pop in a competition?"};
    if(randomNumber == 20){var DCPQuestion = "How many puzzles do you have in your collection?"};
    if(randomNumber == 21){var DCPQuestion = "What is the most complicated puzzle that you know how to solve?"};
    if(randomNumber == 22){var DCPQuestion = "How much do you practice cubing, a day?"};
    if(randomNumber == 23){var DCPQuestion = "What other hobbies do you have, besides cubing?"};
    if(randomNumber == 24){var DCPQuestion = "How did you hear of Speedcubing.org?"};
    if(randomNumber == 25){var DCPQuestion = "What is the highest order NxN puzzle you have?"};

    const DCP = new discord.MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setTitle("**DEAD CHAT PING**")
      .setDescription(DCPQuestion)
      PingChannel.send(DCP);
    }
  }, 1000, 1, 1);
});
*/