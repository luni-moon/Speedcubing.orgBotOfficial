const { Command } = require("discord.js-commando");
const botData = require("../../botData.js");
const discord = require("discord.js");
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);


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
        message.channel.send(RandProductHelp);
    } else if (reason == "nxn 3x3" || reason == "NxN 3x3" || reason == "NXN 3x3") {
      var randomNumber = Math.floor(Math.random() * 53) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-rs3m-2020";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-warrior-s";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-ms-3x3x3";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356m";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-11m-pro";
      } else if (randomNumber == 6) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-11m-pro-stickerless-black";
      } else if (randomNumber == 7) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356m-with-ges";
      } else if (randomNumber == 8) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/thunderclap-v3-m";
      } else if (randomNumber == 9) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-330-keychain-cube";
      } else if (randomNumber == 10) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-valk-3-elite-m";
      } else if (randomNumber == 11) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/dayan-tengyun-v2m";
      } else if (randomNumber == 12) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356-xs";
      } else if (randomNumber == 13) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/dayan-guhong-v4m";
      } else if (randomNumber == 14) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-mofang-jiaoshi-meilong-3x3x3";
      } else if (randomNumber == 15) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-weilong-gts3m"
      } else if (randomNumber == 16) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/mgc-elite-3x3";
      } else if (randomNumber == 17) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/yj-zhilong-3x3x3";
      } else if (randomNumber == 18) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-qimeng-plus-9cm-3x3x3";
      } else if (randomNumber == 19) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356-air-m";
      } else if (randomNumber == 20) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/muon-moyu-rs3m-2020";
      } else if (randomNumber == 21) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/dayan-guhong-v3m";
      } else if (randomNumber == 22) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/x-man-tornado-v2m";
      } else if (randomNumber == 23) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-valk-3m";
      } else if (randomNumber == 24) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-11-m-pro-soft-stickerless";
      } else if (randomNumber == 25) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-11m-duo";
      } else if (randomNumber == 26) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/dayan-zhanchi-pro-m";
      } else if (randomNumber == 27) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/cubelab-1cm-3x3x3";
      } else if (randomNumber == 28) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-cubing-classroom-35mm-keychain-cube";
      } else if (randomNumber == 29) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/yuxin-little-magic-3x3x3-m";
      } else if (randomNumber == 30) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/shengshou-mrm-v2-3x3x3";
      } else if (randomNumber == 31) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356-x-2-0"
      } else if (randomNumber == 32) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/yuxin-little-magic-3x3x3";
      } else if (randomNumber == 33) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/copy-of-monstergo-pyraminx";
      } else if (randomNumber == 34) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-mofang-jiaoshi-meilong-3x3x3-macaron-edition";
      } else if (randomNumber == 35) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-weilong-wrm";
      } else if (randomNumber == 36) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-meilong-30mm-keychain-cube";
      } else if (randomNumber == 37) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/copy-of-moyu-cubing-classroom-35mm-keychain-cube";
      } else if (randomNumber == 38) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/mscube-ms3v1-standard";
      } else if (randomNumber == 39) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/diansheng-3x3x3-m";
      } else if (randomNumber == 40) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-3cm-3x3x3";
      } else if (randomNumber == 41) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/monstergo-3x3x3";
      } else if (randomNumber == 42) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-sail-w";
      } else if (randomNumber == 43) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/mscube-ms3v1-enhanced";
      } else if (randomNumber == 44) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356x";
      } else if (randomNumber == 45) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-meilong-3x3x3-m";
      } else if (randomNumber == 46) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/moyu-weilong-wrm-2020";
      } else if (randomNumber == 47) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/qiyi-wuwei-m";
      } else if (randomNumber == 48) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/dayan-tengyun-3x3x3-m";
      } else if (randomNumber == 49) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-11-m-pro-uv-coated";
      } else if (randomNumber == 50) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356-i-carry";
      } else if (randomNumber == 51) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/yj-yulong-v2m";
      } else if (randomNumber == 52) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-356-i-v2-bluetooth-3x3x3";
      } else if (randomNumber == 53) {
        randomProductLink = "https://speedcubing.org/collections/3x3x3/products/gan-i-play-v2";
      }


      const Random3X3ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 3x3 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
        message.channel.send(Random3X3ProductLink);
    } else if (reason == "nxn 2x2" || reason == "NxN 2x2" || reason == "NXN 2x2") {
      var randomNumber = Math.floor(Math.random() * 18) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/gan-251-m-leap-pre-order";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/monster-go-2x2x2";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/diansheng-2x2x2-m";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/qiyi-qidi-s2";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/shengshou-mrm-2x2x2";
      } else if (randomNumber == 6) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/yj-yupo-v2m";
      } else if (randomNumber == 7) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/qiyi-x-man-flare-2x2x2";
      } else if (randomNumber == 8) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/moyu-rs2m";
      } else if (randomNumber == 9) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/moyu-guoguan-xinghen-tsm-2x2x2";
      } else if (randomNumber == 10) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/moyu-meilong-2x2x2-m";
      } else if (randomNumber == 11) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/yj-mgc-2x2x2-elite";
      } else if (randomNumber == 12) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/yuxin-little-magic-2x2x2-m";
      } else if (randomNumber == 13) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/qiyi-ms-2x2x2";
      } else if (randomNumber == 14) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/dayan-tengyun-2x2x2-m";
      } else if (randomNumber == 15) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/weipo-wrm";
      } else if (randomNumber == 16) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/moyu-mofang-jiaoshi-meilong-2x2x2";
      } else if (randomNumber == 17) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/qiyi-valk-2m";
      } else if (randomNumber == 18) {
        randomProductLink = "https://speedcubing.org/collections/2x2x2/products/moyu-mofang-jiaoshi-meilong-2x2x2-macaron-edition";
      }

      const Random2X2ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 2x2 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
      message.channel.send(Random2X2ProductLink);
    } else if (reason == "nxn 4x4" || reason == "NxN 4x4" || reason == "NXN 4x4") {
      var randomNumber = Math.floor(Math.random() * 14) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/yj-mgc-4x4x4";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/qiyi-ms-4x4x4";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-mofang-jiaoshi-meilong-4x4x4";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-meilong-4x4x4-m";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-aosu-wrm";
      } else if (randomNumber == 6) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/yj-zhilong-m-mini-4x4x4";
      } else if (randomNumber == 7) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/yj-yusu-v2m";
      } else if (randomNumber == 8) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-rs4m";
      } else if (randomNumber == 9) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-mofang-jiaoshi-meilong-4x4x4-macaron-edition";
      } else if (randomNumber == 10) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/shengshou-mrm-4x4x4";
      } else if (randomNumber == 11) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/qiyi-qiyuan-s2";
      } else if (randomNumber == 12) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/qiyi-x-man-ambition-4x4x4";
      } else if (randomNumber == 13) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/diansheng-4x4x4-m";
      } else if (randomNumber == 14) {
        randomProductLink = "https://speedcubing.org/collections/4x4x4/products/moyu-aosu-gts2m";
      }

      const Random4X4ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 4x4 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
      message.channel.send(Random4X4ProductLink);
    } else if (reason == "nxn 5x5" || reason == "NxN 5x5" || reason == "NXN 5x5") {
      var randomNumber = Math.floor(Math.random() * 11) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/yj-mgc-5x5x5";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/qiyi-ms-5x5x5";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/moyu-mofang-jiaoshi-meilong-5x5x5";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/qiyi-valk-5m";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/yj-zhilong-m-mini-5x5x5";
      } else if (randomNumber == 6) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/aochuang-wrm";
      } else if (randomNumber == 7) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/moyu-meilong-5x5x5-m";
      } else if (randomNumber == 8) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/moyu-mofang-jiaoshi-meilong-5x5x5-macaron-edition";
      } else if (randomNumber == 9) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/yuxin-huanglong-5x5x5m";
      } else if (randomNumber == 10) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/diansheng-5x5x5-m";
      } else if (randomNumber == 11) {
        randomProductLink = "https://speedcubing.org/collections/5x5x5/products/shengshou-mrm-5x5x5";
      }

      const Random5X5ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 5x5 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
      message.channel.send(Random5X5ProductLink);
    } else if (reason == "nxn 6x6" || reason == "NxN 6x6" || reason == "NXN 6x6") {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/mgc-6x6";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/yuxin-little-magic-6x6x6";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/yj-yushi-v2m";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/moyu-aoshi-gtsm-6x6";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/qiyi-qifan-s2";
      } else if (randomNumber == 6) {
        randomProductLink = "https://speedcubing.org/collections/6x6x6/products/qiyi-x-man-shadow-v2m";
      }

      const Random6X6ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 6x6 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
      message.channel.send(Random6X6ProductLink);
    } else if (reason == "nxn 7x7" || reason == "NxN 7x7" || reason == "NXN 7x7") {
      var randomNumber = Math.floor(Math.random() * 5) + 1;
      var randomProductLink = "";

      if (randomNumber == 1) {
        randomProductLink = "https://speedcubing.org/collections/7x7x7/products/yj-mgc-7x7x7";
      } else if (randomNumber == 2) {
        randomProductLink = "https://speedcubing.org/collections/7x7x7/products/yj-yufu-v2-m-7x7";
      } else if (randomNumber == 3) {
        randomProductLink = "https://speedcubing.org/collections/7x7x7/products/qiyi-xman-spark-7x7x7m";
      } else if (randomNumber == 4) {
        randomProductLink = "https://speedcubing.org/collections/7x7x7/products/yuxin-little-magic-7x7x7m";
      } else if (randomNumber == 5) {
        randomProductLink = "https://speedcubing.org/collections/7x7x7/products/qiyi-qixing-s2-7x7x7";
      }

      const Random7X7ProductLink = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Random 7x7 Product:")
        .setDescription(`
          ${randomProductLink}
        `)
      message.channel.send(Random7X7ProductLink);
    } else if (reason == "sidewca pyraminx" || reason == "sidewca Pyraminx" || reason == "sidewca pyra" || reason == "sidewca Pyra") {

    } else if (reason == "sidewca skewb" || reason == "sidewca Skewb" || reason == "sidewca sk" || reason == "sidewca Sk") {

    } else if (reason == "sidewca megaminx" || reason == "sidewca Megaminx" || reason == "sidewca mega" || reason == "sidewca Mega") {

    } else if (reason == "sidewca square-1" || reason == "sidewca Square-1" || reason == "sidewca sq-1" || reason == "sidewca Sq-1") {

    } else if (reason == "sidewca clock" || reason == "sidewca Clock" || reason == "sidewca cloncc" || reason == "sidewca Cloncc") {

    } else if (reason == "nonwca") {
      
    }
  }
}