var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "manage",
    description: "manage Help",
    usage: "1) m/manage  [module name]\n2) m/manage [command (name or alias)]",
    example: "1) m/m\n2) m/mode\n3) m/mn",
    aliases: ['m']
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

if(message.content.toLowerCase() === `${prefix}manage`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("🛠️ - Manage commands panel")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/776117172363722756.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    

    .addField(`ㅤ`, "`role`|`roleadd`|`roledel`|`rolecreate`|`deleterole` |`createvc`|`createchat`|`delchannel`|`disablexp`|`setxp`|`setprefix`")             

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}