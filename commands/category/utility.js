var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "utility",
    description: "utility",
    usage: "1) m/utility  [module name]\n2) m/utility[command (name or alias)]",
    example: "1) m/ut\n2) m/ut\n3) m/ut",
    aliases: ['ut']
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

if(message.content.toLowerCase() === `${prefix}utility`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("♨ - Utility commands")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/776117172363722756.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    
   .addField(`ㅤ`, "`membercount`|`yt`|`steal`|`define`|`sourcebin`|`docs`|`weather`|`qr`|`applestore`|`anime`|`linkshorten`|`playstore`|`country`|`ascii`|`emojiid`|`vaportext`")

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}