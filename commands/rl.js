const { SlashCommandBuilder, Guild } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

let role = new SlashCommandBuilder()
.setName('rl')
.setDescription('Participant selection')
.addUserOption(option => option.setName('1').setDescription('The member #1'))
.addUserOption(option => option.setName('2').setDescription('The member #2'))
.addUserOption(option => option.setName('3').setDescription('The member #3'))
.addUserOption(option => option.setName('4').setDescription('The member #4'))
.addUserOption(option => option.setName('5').setDescription('The member #5'))
.addUserOption(option => option.setName('6').setDescription('The member #6'))
.addUserOption(option => option.setName('7').setDescription('The member #7'))
.addUserOption(option => option.setName('8').setDescription('The member #8'))
.addUserOption(option => option.setName('9').setDescription('The member #9'))

module.exports = {
	data: role,
	async execute(interaction) {
		let idArr = []
		let count = 0 

		console.log(role.prototype.hasOwnProperty('9'))

		for(let i=1; i <= 1; i++){
			let member = interaction.options.getMember(`${i}`);
			idArr.push(member.user.username)
			member.setNickname(`0${i}.${member.user.username}`)
		}
		await interaction.reply({ content: 'Номера расставленны', ephemeral: true });
		console.log(idArr)
		
		
	},
};