const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('clearfault')
        .setDescription('Clear fault')
        .addUserOption(option => option.setName('player').setDescription('player').setRequired(true))
        .setDMPermission(false),
    async execute(interaction) {
        let member = interaction.options.getMember('player');
        let oldName;
        if( member.nickname != null){
        oldName = member.nickname.replaceAll(' Ф', '')
        } else {
        oldName = member.user.username.replaceAll(' Ф', '')
        };
        await member.setNickname(oldName);
        await interaction.reply({ content: `Фолы очищены у игрока ${oldName}`, ephemeral: true })
    }
}