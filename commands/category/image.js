var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "image",
    description: ".",
    usage: "1) m/image [module name]\n2) m/image[command (name or alias)]",
    example: "1) m/im\n2) m/im\n3) m/im",
    aliases: ['im']
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

if(message.content.toLowerCase() === `${prefix}image`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("♨ - Image commands panel")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/829385326781923368.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    
   .addField(`ㅤ`, "`triggered`|`delete`|`rip`|`jail`|`captcha`|`wideavatar`|`toilet`|`wa`|`clyde`|`wasted`|`effect`|`tweet`|`minecraft`|`blur`|`beautiful`|`catsay`|`cowsay`|`fliptext`")

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}


