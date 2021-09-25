const {ShardingManager} = require('discord.js');
const config = require('./config.json');

const shards = new ShardingManager("./index.js", {
    token: "ODUwMTEwOTY5MjQwNzQ4MDQz.YLk9iQ.sc-PXSG41SQkayZaFAzUDpv0mtY",
    totalShards:"auto"
});
shards.on("shardCreate", shard =>{
    console.log(`[READY] ${new Date().toString().split(" ",5).join(" ")} Launched Shard #${shard.id}`);
});
shards.spawn(shards.totalShards, 10000)
