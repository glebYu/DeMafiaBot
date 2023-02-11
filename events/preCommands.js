// const Discord = require('discord.js');
// const { prefix } = require('../config.json')

// module.exports = {
//     name: Event.message,
//     async execute(message) {
//         if (message.author.bot) return;
//         if (!message.content.startsWith(prefix)) return;
        
//         let command = message.content.split(" ")[0];
//         command = command.slice(prefix.length)

//         console.log(command);

//         let args = message.content.split(" ").slice(1);

//         if (command === "ping") {
//             message.channel.sendMessage('pong! :D');
    
//         };
//     }
// }