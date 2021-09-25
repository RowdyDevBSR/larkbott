const { Manager } = require("erela.js");
const Spotify  = require("erela.js-spotify");
const { MessageEmbed } = require("discord.js")
const Deezer = require("erela.js-deezer")
const delay = require("delay")

module.exports = {
  name: "ready",
  async execute(client) {
    console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `-help | @LARK MUSIC`,
        `-invite`
            ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "STREAMING" });
    }, 60000);



let nodes = client.config.nodes

  let clientID = client.config.spotifyID
  let clientSecret = client.config.spotifySecret
    
     
  
  client.manager = new Manager({
    nodes,
    plugins: [ new Spotify({ clientID, clientSecret}),
    new Deezer()],
    
    autoPlay: true,
    secure: false,
    send: (id, payload) => {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    }
  });
  
  
//initialize the manager
  client.manager.init(client.user.id);

  client.on("raw", d => client.manager.updateVoiceState(d));

  
  client.manager.on("nodeConnect",async node => {
      console.log(`[NODE] "${node.options.identifier}" connected.`);


  })
  

  client.manager.on("nodeError", (node, error) => {
      console.log(`Node "${node.options.identifier}" encountered an error: ${error.message}.`);
  
   
    
  });
  
 
  //Track start
  client.manager.on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    let min = Math.floor((track.duration/1000/60) << 0), sec = Math.floor((track.duration/1000) % 60);
    let sec2;
      if(sec < 2) {
          sec2 = `0${sec}`
      }
      else {
          sec2 = sec
      }

     let np = new MessageEmbed()
    .setColor("FF0000")
   .setAuthor("NOW PLAYING YOUR SONG","https://cdn.discordapp.com/emojis/861568906321330197.gif?v=1")
   .setThumbnail("https://images-ext-2.discordapp.net/external/uaR_cKRPdKftvAZxxt1zWReh7iRLP9c4tM2O2PYddNk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/854381864878211103/1a6169f4d6b4fb6645edf87cc2ae8330.png?width=300&height=300")
    .setDescription(` 
    [${track.title}](${track.uri})`);
setTimeout(() => {
channel.send(np).then(m => m.delete({ timeout: track.duration }));
},5000)
  
});
  
 client.manager.on("queueEnd", player => {
    if (player.twentyFourSeven) return;

    const channel = client.channels.cache.get(player.textChannel);
    channel.send({embed: {
      color: "FF0000",
      description:"Queue has ended"}});
    player.destroy();
  });
  
  
   
client.manager.on("socketClosed", (player, payload) => {
		if(payload.byRemote === true) player.destroy();
	});
	
  client.manager.on("playerMove", (player, currentChannel, newChannel) => {
	player.voiceChannel = client.channels.cache.get(newChannel);


setTimeout(() => {
 player.pause(false) 
})
	},2000);
      
   
  
  
  
  
  },
};