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
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "L";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 11) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "L'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 12) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2" && previousNotation != "L" && previousNotation != "L'" && previousNotation != "L2") {
            notation = "L2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 13) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "D";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 14) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "D'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 15) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2" && previousNotation != "D" && previousNotation != "D'" && previousNotation != "D2") {
            notation = "D2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 16) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "B";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 17) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "B'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 18) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2" && previousNotation != "B" && previousNotation != "B'" && previousNotation != "B2") {
            notation = "B2";
          } else {
            timesLooped--;
          }
        }

        var previousNotation = notation;

        if (timesLooped == 1) {
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
    } else if (reason == "4") {
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
      var moveTwentyFour;
      var moveTwentyFive;
      var moveTwentySix;
      var moveTwentySeven;
      var moveTwentyEight;
      var moveTwentyNine;
      var moveThirty;
      var moveThirtyOne;
      var moveThirtyTwo;
      var moveThirtyThree;
      var moveThirtyFour;
      var moveThirtyFive;
      var moveThirtySix;

      while (timesLooped != 37) {
        var notation;
        var cubeScramble = Math.floor(Math.random() * 36) + 1;

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
        } else if (cubeScramble == 19) {
          if (previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2" && previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2") {
            notation = "Rw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 20) {
          if (previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2" && previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2") {
            notation = "Rw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 21) {
          if (previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2" && previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2") {
            notation = "Rw2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 22) {
          if (previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2" && previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2") {
            notation = "Uw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 23) {
          if (previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2" && previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2") {
            notation = "Uw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 24) {
          if (previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2" && previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2") {
            notation = "Uw2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 25) {
          if (previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2" && previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "Bw2") {
            notation = "Fw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 26) {
          if (previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2" && previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "B2w") {
            notation = "Fw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 27) {
          if (previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2" && previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "Bw2") {
            notation = "Fw2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 28) {
          if (previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2" && previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2") {
            notation = "Lw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 29) {
          if (previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2" && previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2") {
            notation = "Lw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 30) {
          if (previousNotation != "Lw" && previousNotation != "Lw'" && previousNotation != "Lw2" && previousNotation != "Rw" && previousNotation != "Rw'" && previousNotation != "Rw2") {
            notation = "Lw2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 31) {
          if (previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2" && previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2") {
            notation = "Dw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 32) {
          if (previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2" && previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2") {
            notation = "Dw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 33) {
          if (previousNotation != "Dw" && previousNotation != "Dw'" && previousNotation != "Dw2" && previousNotation != "Uw" && previousNotation != "Uw'" && previousNotation != "Uw2") {
            notation = "Dw2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 34) {
          if (previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "Bw2" && previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2") {
            notation = "Bw";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 35) {
          if (previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "Bw2" && previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2") {
            notation = "Bw'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 36) {
          if (previousNotation != "Bw" && previousNotation != "Bw'" && previousNotation != "Bw2" && previousNotation != "Fw" && previousNotation != "Fw'" && previousNotation != "Fw2") {
            notation = "Bw2";
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
        } else if (timesLooped == 24) {
          moveTwentyFour = notation;
        } else if (timesLooped == 25) {
          moveTwentyFive = notation;
        } else if (timesLooped == 26) {
          moveTwentySix = notation;
        } else if (timesLooped == 27) {
          moveTwentySeven = notation;
        } else if (timesLooped == 28) {
          moveTwentyEight = notation;
        } else if (timesLooped == 29) {
          moveTwentyNine = notation;
        } else if (timesLooped == 30) {
          moveThirty = notation;
        } else if (timesLooped == 31) {
          moveThirtyOne = notation;
        } else if (timesLooped == 32) {
          moveThirtyTwo = notation;
        } else if (timesLooped == 33) {
          moveThirtyThree = notation;
        } else if (timesLooped == 34) {
          moveThirtyFour = notation;
        } else if (timesLooped == 35) {
          moveThirtyFive = notation;
        } else if (timesLooped == 36) {
          moveThirtySix = notation;
        }

        timesLooped++;
      }

      const Scramble4 = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Scramble")
        .setDescription(
          moveOne + ` ` + moveTwo + ` ` + moveThree + ` ` + moveFour + ` ` + moveFive + ` ` + moveSix + ` ` + moveSeven + ` ` + moveEight + ` ` + moveNine + ` ` + moveTen + ` ` + moveEleven + ` ` + moveTwelve + ` ` + moveThirteen + ` ` + moveFourteen + ` ` + moveFifteen + ` ` + moveSixteen + ` ` + moveSeventeen + ` ` + moveEighteen + ` ` + moveNineteen + ` ` + moveTwenty + ` ` + moveTwentyOne + ` ` + moveTwentyTwo + ` ` + moveTwentyThree + ` ` + moveTwentyFour + ` ` + moveTwentyFive + ` ` + moveTwentySix + ` ` + moveTwentySeven + ` ` + moveTwentyEight + ` ` + moveTwentyNine + ` ` + moveThirty + ` ` + moveThirtyOne + ` ` + moveThirtyTwo + ` ` + moveThirtyThree + ` ` + moveThirtyFour + ` ` + moveThirtyFive + ` ` + moveThirtySix
        )
      message.channel.send(Scramble4);
    } else if (reason == "2") {
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

      while (timesLooped != 13) {
        var notation;
        var cubeScramble = Math.floor(Math.random() * 9) + 1;

        if (cubeScramble == 1) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {
            notation = "R";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 2) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {

            notation = "R'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 3) {
          if (previousNotation != "R" && previousNotation != "R'" && previousNotation != "R2") {
            notation = "R2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 4) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "U";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 5) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "U'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 6) {
          if (previousNotation != "U" && previousNotation != "U'" && previousNotation != "U2") {
            notation = "U2";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 7) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "F";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 8) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "F'";
          } else {
            timesLooped--;
          }
        } else if (cubeScramble == 9) {
          if (previousNotation != "F" && previousNotation != "F'" && previousNotation != "F2") {
            notation = "F2";
          } else {
            timesLooped--;
          }
        }

        var previousNotation = notation;

        if (timesLooped == 1) {
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
        }

        timesLooped++;
      }

      const Scramble2 = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Scramble")
        .setDescription(
          moveOne + ` ` + moveTwo + ` ` + moveThree + ` ` + moveFour + ` ` + moveFive + ` ` + moveSix + ` ` + moveSeven + ` ` + moveEight + ` ` + moveNine + ` ` + moveTen + ` ` + moveEleven + ` ` + moveTwelve
        )
      message.channel.send(Scramble2);
    }
  }
}