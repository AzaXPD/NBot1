var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "nsfw",
    description: "nsfw help",
    usage: "1) m/nsfw [module name]\n2) m/nf [command (name or alias)]",
    example: "1) m/NSFW \n2) m/nsfw \n3) m/nsfw",
    aliases: ['nsfw']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

     var errMessage = `!I caught a pervert!,  >:3 The channel ain't nsfw, pervert u-u`;
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 30000 })
      })
      
  }

///////////////////////////////////////

if(message.content.toLowerCase() === `${prefix}nsfw`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("🔞 - COMMANDS NSFW ")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/860915047102414868.png?v=1")

    .setDescription (`My Prefix In This Server is  \`${prefix}\``)
    
   .addField(`<a:2d:866400149970354206> **NSFW 2D**`, "`2dpussy` | `2dboobs` | `2dfeet` | `2dholo` | `2dholoero` | `tits` | `blowjobs` | `cumart`  | `ero` | `erokitsune` | `eroyuri` | `femdom` | `futanari` | `gasm` | `girlsolo` | `hentai`| `neko` | `keta` | `kitsune` | `lesbian` | `lewneko` | `nekogif` | `pussyart` | `trap` | `yuri`")

  .addField (`<a:2drp:866400166591070238> **NSFW 2D SEARCH`, "`danbooru` | `gelbooru` | `r34` ")

   .addField(`<a:2drp:866400166591070238> **NSFW Role-Play**`, "`fuck` | `kuni` | `2danal` |  `cum` | `suck` | `masturbation` | `spank`")

   .addField(`<a:hot:860926031471837214>**Porn**`, "`4k` | `anal` | `ass` | `porn` | `pussy` | `boobs`")

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}