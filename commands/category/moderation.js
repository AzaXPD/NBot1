var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "moderation",
    description: "Moderation Help",
    usage: "1) m/moderation \n2) m/moderation [module name]\n3) m/moderation [command (name or alias)]",
    example: "1) m/mt\n2) m/mode\n3) m/md",
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

if(message.content.toLowerCase() === `${prefix}moderation`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("🔧- Help Moderation")
    
    .setThumbnail("https://images-ext-1.discordapp.net/external/KqFp7UUIzTjNzHExkTkQ4ZBcXXpI7JDlWGXNZqhrMGc/https/cdn.discordapp.com/emojis/853790985481879563.gif")
    


 .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)

    .addField(`ㅤ`, "`Ban`|`Kick`|`vcmove`|`smove`|`voicekick`|`lock`|`unlock`|`Unban`|`Mute`|`Purge`|`Hackban`")              

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
    .setFooter("control Z","https://media.discordapp.net/attachments/853673164114493452/856623436377096232/Z.png")
    

message.channel.send(log);
}
}
}