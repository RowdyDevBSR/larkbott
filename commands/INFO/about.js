const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("FF0000")
 .setAuthor(`LARK BOT STATS`,client.user.displayAvatarURL())
 
    
.addField(`
**DEVELOPERS**`,
` Pranav ˢᵈᶠ ᴱˢᶜ#3333
 GOPU ♡#2002 `)

.addField(`**TEAM**`,` MOHIT \n RAYDU \n CYPTON \n ROWDI KING`)

.addField(`**SERVERS**`,
`${client.guilds.cache.size}`)

.addField(`**SPONSORS**`,`The bot is sponsored by Lark developers \n [JOIN HERE](https://discord.gg/dQnAnaPbfh)`)

.addField(`**PING**`,
`${client.ws.ping}`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}