const discord  =  require("discord.js")
module.exports = {
  name: "invite",
  aliases: ["inv"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("FF0000")
 .setAuthor("INVITE LARK BOT",client.user.displayAvatarURL())
      
.setDescription(`

[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=850110969240748043&permissions=133548353&scope=bot)

[SUPPORT SERVER](https://discord.gg/dQnAnaPbfh)
`)
message.channel.send(embed)


}}
