const { SlashCommandBuilder } = require('discord.js');
const { guildId } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear member names')
        .setDMPermission(false),
    async execute(interaction) {
        const guildServerMembers = interaction.client.guilds.cache.get(`${guildId}`).members.cache.map(member => member);

        for (let guildServerMember of guildServerMembers){
            if (guildServerMember.nickname !== null) {
                for (let i = 1; i <= 20; i++){
                    if (guildServerMember.nickname.indexOf(`${i.toString().padStart(2, "0")}.`) !== -1) {
                       await guildServerMember.setNickname(guildServerMember.nickname.slice(4))
                    }
                }
                if (guildServerMember.nickname.indexOf(' φ') !== -1){
                    let guildServerMemberNickname = guildServerMember.nickname
                    await guildServerMember.setNickname(guildServerMemberNickname.replaceAll(' φ', ''))
                }
            }
        }

        await interaction.reply({ content: `Номера и фолы очищены `, ephemeral: true })
    }
}