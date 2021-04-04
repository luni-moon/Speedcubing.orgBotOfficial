const { Command } = require('discord.js-commando');
const botData = require("../../botData.js");
const discord = require("discord.js");
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);


module.exports = class cubeScrambleCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'scramble',
      group: 'cubing',
      memberName: 'scramble',
      description: 'Scrambles a Rubik\'s Cube!',
    });
  }

  run(message, args) {
    let words = args.split(' ');
    let reason = words.slice(0).join(' ');
    if (reason == "" || reason == "help" || reason == "?") {
      const CubeScrambleHelp = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Cube Scramble Help")
        .setDescription(`
        **Usage:**
          a. $scramble <2|3|4|help>
          aa. 2: Scrambles a 2x2!
          ab. 3: Scrambles a 3x3!
          ac. 4: Scrambles a 4x4!
          ad. help: Shows this menu!
      `)
      message.channel.send(CubeScrambleHelp);
    } else if (reason == "3") {
      var timesLooped = 0;

      var moveOne;
      var moveTwo;
      var moveThree;
      var moveFour;
      var moveFive;
      var moveSix;
      var moveSeven;
      var moveEight;
      var moveNine;
      var moveTen;
      var moveEleven;
      var moveTwelve;
      var moveThirteen;
      var moveFourteen;
      var moveFifteen;
      var moveSixteen;
      var moveSeventeen;
      var moveEighteen;
      var moveNineteen;
      var moveTwenty;
      var moveTwentyOne;
      var moveTwentyTwo;
      var moveTwentyThree;

      while (timesLooped != 24) {
        var notation;
        var cubeScramble = Math.floor(Math.random() * 18) + 1;

        if (cubeScramble == 1) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "R";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 2) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "R'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 3) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "R2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 4) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "U";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 5) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "U'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 6) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "U2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 7) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "F";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 8) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "F'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 9) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "F2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 10) {
          if (previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2" && previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {
            notation = "L";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 11) {
          if (previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2" && previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {
            notation = "L'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 12) {
          if (previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2" && previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {
            notation = "L2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 13) {
          if (previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2" && previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "D";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 14) {
          if (previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2" && previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "D'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 15) {
          if (previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2" && previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "D2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 16) {
          if (previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2" && previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "B";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 17) {
          if (previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2" && previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "B'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 18) {
          if (previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2" && previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "B2";
          } else {
            timesLooped--;
          }
        }

        var previousNotation = notation;

        if (timesLooped === 1) {
          moveOne = notation;
        } else if (timesLooped == 2) {
          moveTwo = notation;
        } else if (timesLooped == 3) {
          moveThree = notation;
        } else if (timesLooped == 4) {
          moveFour = notation;
        } else if (timesLooped == 5) {
          moveFive = notation;
        } else if (timesLooped == 6) {
          moveSix = notation;
        } else if (timesLooped == 7) {
          moveSeven = notation;
        } else if (timesLooped == 8) {
          moveEight = notation;
        } else if (timesLooped == 9) {
          moveNine = notation;
        } else if (timesLooped == 10) {
          moveTen = notation;
        } else if (timesLooped == 11) {
          moveEleven = notation;
        } else if (timesLooped == 12) {
          moveTwelve = notation;
        } else if (timesLooped == 13) {
          moveThirteen = notation;
        } else if (timesLooped == 14) {
          moveFourteen = notation;
        } else if (timesLooped == 15) {
          moveFifteen = notation;
        } else if (timesLooped == 16) {
          moveSixteen = notation;
        } else if (timesLooped == 17) {
          moveSeventeen = notation;
        } else if (timesLooped == 18) {
          moveEighteen = notation;
        } else if (timesLooped == 19) {
          moveNineteen = notation;
        } else if (timesLooped == 20) {
          moveTwenty = notation;
        } else if (timesLooped == 21) {
          moveTwentyOne = notation;
        } else if (timesLooped == 22) {
          moveTwentyTwo = notation;
        } else if (timesLooped == 23) {
          moveTwentyThree = notation;
        }

        timesLooped++;
      }
      const Scramble3 = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Scramble")
        .setDescription(
          moveOne + ` ` + moveTwo + ` ` + moveThree + ` ` + moveFour + ` ` + moveFive + ` ` + moveSix + ` ` + moveSeven + ` ` + moveEight + ` ` + moveNine + ` ` + moveTen + ` ` + moveEleven + ` ` + moveTwelve + ` ` + moveThirteen + ` ` + moveFourteen + ` ` + moveFifteen + ` ` + moveSixteen + ` ` + moveSeventeen + ` ` + moveEighteen + ` ` + moveNineteen + ` ` + moveTwenty + ` ` + moveTwentyOne + ` ` + moveTwentyTwo + ` ` + moveTwentyThree
        )
      message.channel.send(Scramble3);
    }
  }
}