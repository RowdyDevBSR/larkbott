const {MessageEmbed} = require("discord.js")
module.exports = {
 name : "guildCreate",
 async execute (client, guild)  { 

let embed = new MessageEmbed()

.setTitle(`Thanks for adding me in your server ! Have fun`)
 .setColor("FF0000")
 .setDescription(`To get started , type $play <song> and also you can provide any type of links or playlists to listen songs from me
 
 If you have any questions or need help withLark music [CLICK HERE](https://discord.gg/dQnAnaPbfh) to talk with the developers
 
 `)

    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(embed).catch(err => {})


  const ID = "854652474833371137";
  //const sowner = `${guild.owner.user}`;
  const embed1 = new MessageEmbed()
    .setTitle("New Server Joined!")
    .setImage(`${guild.iconURL({ dynamic: true, size: 2048 })}`)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Members:`, `${guild.memberCount}`)
    //.addField(`Server Owner Tag:`, `${sowner.tag}`)
    //.addField(`ServerOwner ID:`, `${sowner.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`My new Server Count - ${client.guilds.cache.size}`);

client.channels.cache.get(client.config.log).send(embed1)
}
}