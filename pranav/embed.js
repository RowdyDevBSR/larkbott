const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("FF0000")
  .setDescription("<a:Jupiter_succes:875798995123974154> " +""+ text);

    await channel.send(embed)
}