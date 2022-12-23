var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "fun",
    description: "",
    usage: "1) m/fun [module name]\n2) m/fun[command (name or alias)]",
    example: "1) m/fn\n2) m/fn\n3) m/fn",
    aliases: ['fn']
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

if(message.content.toLowerCase() === `${prefix}fun`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("♨ - Commands Fun")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/866363351851860029.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    
   .addField(`ㅤ`, "`kiss` | `hug` | `pat`  | `zaglo` | `slap` | `smug` | `tickle` | `poke` |`binary`  | `advice` | `scroll`")

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}