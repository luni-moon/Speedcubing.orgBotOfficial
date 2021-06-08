const { Command } = require('discord.js-commando');
const botData = require("../../botData.js");
const discord = require("discord.js");
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = StormeDB(engine);


module.exports = class randProductCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'randomproduct',
      group: 'cubing',
      memberName: 'randomproduct',
      description: 'Gives you a random product link from Speedcubing.org',
    });
  }

  run(message, args) {
    let words = args.split(' ');
    let reason = words.slice(0).join(' ');
    if (reason == "" || reason == "help" || reason == "?") {
      const RandProductHelp = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random Product Help")
        .setDescription(`
        **Usage:**
          a. $randomproduct <category (eg. nxn, nonwca)> <puzzle type (**not needed for nonwca category**) (eg. 3x3, clock)>
          b. $randomproduct <help|?>
        `)
        message.channel.send(RandProductHelp)
    } else if (reason == "nxn 3x3" || reason == "NxN 3x3" || reason == "NXN 3x3") {

    } else if (reason == "nxn 2x2" || reason == "NxN 2x2" || reason == "NXN 2x2") {

    } else if (reason == "nxn 4x4" || reason == "NxN 4x4" || reason == "NXN 4x4") {

    } else if (reason == "nxn 5x5" || reason == "NxN 5x5" || reason == "NXN 5x5") {

    } else if (reason == "nxn 6x6" || reason == "NxN 6x6" || reason == "NXN 6x6") {

    } else if (reason == "nxn 7x7" || reason == "NxN 7x7" || reason == "NXN 7x7") {

    } else if (reason == "sidewca pyraminx" || reason == "sidewca Pyraminx" || reason == "sidewca pyra" || reason == "sidewca Pyra") {

    } else if (reason == "sidewca skewb" || reason == "sidewca Skewb" || reason == "sidewca sk" || reason == "sidewca Sk") {

    } else if (reason == "sidewca megaminx" || reason == "sidewca Megaminx" || reason == "sidewca mega" || reason == "sidewca Mega") {

    } else if (reason == "sidewca square-1" || reason == "sidewca Square-1" || reason == "sidewca sq-1" || reason == "sidewca Sq-1") {

    } else if (reason == "sidewca clock" || reason == "sidewca Clock" || reason == "sidewca cloncc" || reason == "sidewca Cloncc") {

    } else if (reason == "nonwca") {
      
    }
  }
}