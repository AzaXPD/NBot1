var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "misc",
    description: "help misc",
    usage: "1) m/misc  [module name]\n2) m/misc [command (name or alias)]",
    example: "1) m/mc\n2) m/mc\n3) m/mc",
    aliases: ['mc']
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

if(message.content.toLowerCase() === `${prefix}misc`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("♨ -  misc commands panel")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/776117172363722756.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    
   .addField(`ㅤ`, "`help`|`uptime`|`avatar`")

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log); 
}
}
}