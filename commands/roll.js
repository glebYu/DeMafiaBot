const { SlashCommandBuilder, Guild, GuildMember, Activity } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Give out the role')
		.addNumberOption(option =>
			option.setName('members')
			.setDescription('Number of members')
			.setRequired(true)
		).addNumberOption(option =>
			option.setName('active')
			.setDescription('Number of active roles')
			.setRequired(true)
		),
		async execute(interaction){
			const num = interaction.options.getNumber('members');
			const activ = interaction.options.getNumber('active');
			let roleArr = shuffleNumbers(num)
			let activArr = shuffleRole(activ, num)
			await interaction.reply({ content: `Порядок игроков: ${roleArr}. Активные роли: ${activArr}`, ephemeral: true});
		},
};

const shuffleNumbers = n => {
	let Arr = [];
	for (let i = 1; i <= n; i++) 
		Arr.push(i);
	return Arr.sort(() => Math.random() - 0.5);
};

const shuffleRole = (act, num) => {
	let activ = []
	while (activ.length < act) {
		let randomNumber = Math.floor(Math.random() * num + 1)
		if (!activ.includes(randomNumber))
			activ.push(randomNumber)
	}
	return activ
};