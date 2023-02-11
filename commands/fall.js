const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('fault')
        .setDescription('Fault')
        .addUserOption(option => 
            option.setName('player')
            .setDescription('Player who gets a fault')
            .setRequired(true)
        ),
    async execute(interaction) {
        let member = interaction.options.getMember('player');
        let mnick = `${member.nickname} Ф`
        member.setNickname(mnick)
        await interaction.reply({ content: `Фол поставленн ${member.user.username}`, ephemeral: true })
        console.log(member.nickname)
    }
}
