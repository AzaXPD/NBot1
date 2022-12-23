var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "setupsystem",
    description: "system",
    usage: "1) m/setupsystem \n2) m/setupsystem [module name]\n3) m/setupsystem [command (name or alias)]",
    example: "1) m/ss\n2) m/system\n3) m/ss",
    aliases: ['ss']
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

if(message.content.toLowerCase() === `${prefix}setupsystem`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("🤖 - Setup System")
    
    .setThumbnail("https://images-ext-1.discordapp.net/external/WuIkyGASTHKPiBusYMTOgfsTW5C4fKNgbYzTDj3hYFs/%3Fv%3D1/https/cdn.discordapp.com/emojis/853081026971959317.gif")

    
    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)

    .addField(`ㅤ`, "`setmodlogchannel`|`setnick`|`slowmode`|`setprefix`|`setverification`|`setxd`")   

    .addField(`ㅤ`, "`disablemodlogchannel`|`disablexd`")           

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
    .setFooter("control Z","https://media.discordapp.net/attachments/853673164114493452/856623436377096232/Z.png")
    

message.channel.send(log);
}
}
}