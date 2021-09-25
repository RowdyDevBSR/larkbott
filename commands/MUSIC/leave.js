const { MessageEmbed } = require('discord.js')
const embed = require("../../pranav/embed")
module.exports = {
  name: "leave",
  aliases: ["dc"],
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
 
 let player = client.manager.players.get(message.guild.id);
if(!player)  return
 const { channel } = message.member.voice

if (channel.id !== player.voiceChannel) {
      let embed = new MessageEmbed()
      .setColor("#FF0000")
      .setDescription("> Must be in same voice channel"
        
        
        )
   return message.channel.send(embed)
 }
 
		if(player) {
			player.destroy();
		}
		else {message.member.voice.channel.leave();}

		return embed(`Left **${message.member.voice.channel.name}** voice channel`,message.channel);
	


}}