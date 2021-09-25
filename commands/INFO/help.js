const discord  =  require("discord.js")

module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("FF0000")
 .setAuthor("LARK MUSIC - HELP MENU",client.user.displayAvatarURL())
 .setURL(`https://github.com/parasop`)
.setDescription("Hello , I am Lark music and my aim is to provide rich quality music to everyone \n\n • **FILTERS** \n `bassboost deepbass earrape nightcore pitch pop reset soft speed television vaporwave bass` \n\n **• MUSIC** \n `play join clear leave loop move nowplaying pause previous queue remove resume search skip seek stop volume` \n\n **• INFO** \n `stats ping invite uptime` \n\n **• FUNCTIONS** \n `24/7 prefix`")
 
.setFooter("- Enjoy high quality music and enjoy")
message.channel.send(embed)
  }
}