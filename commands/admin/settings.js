const { Command } = require('discord.js-commando');
const botData = require("../../botData.js");
const discord = require("discord.js");

const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb", {
  async: true
});
const db = new StormDB(engine);

module.exports = class SettingsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'settings',
      group: 'admin',
      memberName: 'settings',
      description: 'Configure the Bot\'s Settings!',
    });
  }

  run(message, args) {
    if (message.guild === null) {
      message.reply(DMMessage);
      return;
    } else if (!message.member.hasPermission("ADMINISTRATOR")) {
      const PermissionErrorMessage = new discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`${PermissionError}`)
      message.channel.send(PermissionErrorMessage).then(message => {
        message.delete({timeout: 60000})
      });
      return;
    }
  
    let words = args.split(' ');
    let reason = words.slice(0).join(' ');

    if (reason == "help" || !reason) {
      const BotSettingsHelp = new discord.MessageEmbed()
        .setColor("0xFFA500")
        .setTimestamp()
        .setTitle("**BOT SETTINGS HELP**")
        .addField("Features Available: ", 
          `
            These are the toggleable features! The names in parentheses are nicknames:
            1. Auto Moderation (am)
            2. Dead Chat Pings (dcp)
            3. Ranking System (rs)
            4. Dead Chat Ping Timing (dcpt)
          `
        )
        .addField("Toggle Settings On: ", 
          `
            To toggle a setting on, do £settings (Settings Name Above) on
            Example: £settings dcp on
          `
        )
        .addField("Toggle Settings Off: ", 
          `
            To toggle a setting on, do £settings (Settings Name Above) off
            Example: £settings dcp off
          `
        )
        .addField("Change Time Interval For Dead Chat Pings: ",
          `
            The command for changing the time interval between Dead Chat Pings, is different then most other settings for this bot. It cycles through numbers 1 to 6, which those numbers represent the hours between pings, after using this command. After reaching the 6 hour setting, it loops all the way back to 1. 
            Example: £settings dcpt
          `
        )
      message.channel.send(BotSettingsHelp);
    }  else if (reason == "am on") {
      if (db.get("Settings").get([0]).get("AutoModerationSetting").value() == 1) {
        return message.reply("Sorry, this setting is already toggled on.");
      } else {
        db.get("Settings").get([0]).get("AutoModerationSetting").set(1);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("AM Setting was enabled.");
        });

        const AMOnMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#008000")
          .setTitle("Toggled On: Auto Moderation")
        message.channel.send(AMOnMSG);
        return;
      }
    } else if (reason == "am off") {
      if (db.get("Settings").get([0]).get("AutoModerationSetting").value() == 0) {
        return message.reply("Sorry, this setting is already toggled off.");
      } else {
        db.get("Settings").get([0]).get("AutoModerationSetting").set(0);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("AM Setting was disabled.");
        });

        const AMOffMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#FF0000")
          .setTitle("Toggled Off: Auto Moderation")
        message.channel.send(AMOffMSG);
        return;
      }
    } else if (reason == "dcp on") {
      if (db.get("Settings").get([0]).get("DCPSetting").value() == 1) {
        return message.reply("Sorry, this setting is already toggled on.");
      } else {
        db.get("Settings").get([0]).get("DCPSetting").set(1);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("DCP Setting was enabled.");
        });

        const DCPOnMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#008000")
          .setTitle("Toggled On: Dead Chat Pings")
        message.channel.send(DCPOnMSG);
        return;
      }
    } else if (reason == "dcp off") {
      if (db.get("Settings").get([0]).get("DCPSetting").value() == 0) {
        return message.reply("Sorry, this setting is already toggled off.");
      } else {
        db.get("Settings").get([0]).get("DCPSetting").set(0);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("DCP Setting was disabled.");
        });

        const DCPOffMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#FF0000")
          .setTitle("Toggled Off: Dead Chat Pings")
        message.channel.send(DCPOffMSG);
        return;
      }
    } else if (reason == "rs on") {
      if (db.get("Settings").get([0]).get("RankUpSetting").value() == 1) {
        return message.reply("Sorry, this setting is already toggled on.");
      } else {
        db.get("Settings").get([0]).get("RankUpSetting").set(1);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("RS Setting was enabled.");
        });

        const RSOnMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#008000")
          .setTitle("Toggled On: Ranking System")
        message.channel.send(RSOnMSG);
        return;
      }
    } else if (reason == "rs off") {
      if (db.get("Settings").get([0]).get("RankUpSetting").value() == 0) {
        return message.reply("Sorry, this setting is already toggled off.");
      } else {
        db.get("Settings").get([0]).get("RankUpSetting").set(0);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("RS Setting was disabled.");
        });

        const RSOffMSG = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("#008000")
          .setTitle("Toggled On: Ranking System")
        message.channel.send(RSOffMSG);
        return;
      }
    } else if (reason == "dcpt") {
      if (db.get("Settings").get([0]).get("DCPTimeSetting").value() > 6) {
        db.get("Settings").get([0]).get("DCPTimeSetting").set(1);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("DCPT Setting Updated to 1 Hour.");
        });
      } else {
        var NewDCPTime = db.get("Settings").get([0]).get("DCPTimeSetting").value() + 1;
        db.get("Settings").get([0]).get("DCPTimeSetting").set(NewDCPTime);
        db.save().then(function() {
          console.log("Finished Saving Database!");
          console.log("DCPT Setting Updated to " + String(NewDCPTime) + " Hours.");
        });
      }


      const DCPTimeChangeMSG = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("#008000")
        .setTitle("Dead Chat Time: 1 Hour Added")
      message.channel.send(DCPTimeChangeMSG);
      return;
    }

    if (db.get("Settings").get([0]).get("AutoModerationSetting") == 1) {
      var AModeration = ":white_check_mark: ON";
    } else {
      AModeration = ":x: OFF";
    }

    if (db.get("Settings").get([0]).get("DCPSetting") == 1) {
      var DCPings = ":white_check_mark: ON";
    } else {
      DCPings = ":x: OFF";
    }

    if (db.get("Settings").get([0]).get("RankUpSetting") == 1) {
      var RSystem = ":white_check_mark: ON";
    } else {
      RSystem = ":x: OFF";
    }

    if (db.get("Settings").get([0]).get("DCPTimeSetting") < 7) {
      var DCPTime = String(Number(db.get("Settings").get([0]).get("DCPTimeSetting").value())) + " Hour(s) Between Dead Chat Pings";
    }

    const BotSettingsOverview = new discord.MessageEmbed()
      .setColor("0xFFA500")
      .setTimestamp()
      .setTitle("Bot Settings Overview")
      .addField("Auto Moderation: ", AModeration)
      .addField("Dead Chat Pings: ", DCPings)
      .addField("Ranking System: ", RSystem)
      .addField("Dead Chat Ping Time: ", DCPTime)
    message.channel.send(BotSettingsOverview);
  }
}