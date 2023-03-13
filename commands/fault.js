const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('fault')
        .setDescription('Fault')
        .addUserOption(option => option.setName('player')
            .setDescription('Player who gets a fault')
            .setRequired(true)),
    async execute(interaction) {
        let member = interaction.options.getMember('player');
        let mick;
        if( member.nickname != null){
            mick = `${member.nickname} φ`
            } else {
            mick = `${member.user.username} φ`
            }
        await member.setNickname(mick)
        await interaction.reply({ content: `Фол поставленн ${member.user.username}`, ephemeral: true })
    }
}

