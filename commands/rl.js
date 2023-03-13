const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

let role = new SlashCommandBuilder()
.setName('rl')
.setDescription('Participant selection')
.addNumberOption(option => option.setName('num').setDescription('Number').setRequired(true))
.addUserOption(option => option.setName('1').setDescription('The member #1').setRequired(true))
.addUserOption(option => option.setName('2').setDescription('The member #2'))
.addUserOption(option => option.setName('3').setDescription('The member #3'))
.addUserOption(option => option.setName('4').setDescription('The member #4'))
.addUserOption(option => option.setName('5').setDescription('The member #5'))
.addUserOption(option => option.setName('6').setDescription('The member #6'))
.addUserOption(option => option.setName('7').setDescription('The member #7'))
.addUserOption(option => option.setName('8').setDescription('The member #8'))
.addUserOption(option => option.setName('9').setDescription('The member #9'))
.addUserOption(option => option.setName('10').setDescription('The member #10'))
.addUserOption(option => option.setName('11').setDescription('The member #11'))
.addUserOption(option => option.setName('12').setDescription('The member #12'))
.addUserOption(option => option.setName('13').setDescription('The member #13'))
.addUserOption(option => option.setName('14').setDescription('The member #14'))
.addUserOption(option => option.setName('15').setDescription('The member #15'))
.addUserOption(option => option.setName('16').setDescription('The member #16'))
.addUserOption(option => option.setName('17').setDescription('The member #17'))
.addUserOption(option => option.setName('18').setDescription('The member #18'));

module.exports = {
	data: role,

	async execute(interaction) {

		let roles = [
			"Мафия",
			"Мафия",
			"Шериф",
			"Гражданин",
			"Гражданин",
			"Гражданин",
			"Гражданин"
		]

		let objRole = {};
		let memberArr = [];

		const mafiaEmbed = new EmbedBuilder()
			.setColor(0x12100f)
			.setTitle('Твоя роль:')
			.setImage('https://cdn.discordapp.com/attachments/1073622516070891560/1078711063803076699/image.png')
			.setTimestamp()

		const donEmbed = new EmbedBuilder()
			.setColor(0x12100f)
			.setTitle('Твоя роль: Дон мафии')
			.setImage('https://cdn.discordapp.com/attachments/1073622516070891560/1078711063803076699/image.png')
			.setTimestamp()

		const civilianEmbed = new EmbedBuilder()
			.setColor(0xfd3434)
			.setTitle('Твоя роль:')
			.setImage('https://cdn.discordapp.com/attachments/1073622516070891560/1078733444743434310/image.png')
			.setTimestamp()

		const sheriffEmbed = new EmbedBuilder()
			.setColor(0xfd3434)
			.setTitle('Твоя роль:')
			.setImage('https://cdn.discordapp.com/attachments/1073622516070891560/1078733365139755138/image.png')
			.setTimestamp()

		const doctorEmbed = new EmbedBuilder()
			.setColor(0xfd3434)
			.setTitle('Твоя роль:')
			.setImage('https://cdn.discordapp.com/attachments/1073622516070891560/1078733657411436684/image.png')
			.setTimestamp()

		const witnessEmbed = new EmbedBuilder()
			.setColor(0xfd3434)
			.setTitle('Твоя роль: Свидетель')
			.setTimestamp()

		const numberOfMembers = interaction.options.getNumber('num');

		if (numberOfMembers >= 10){
			roles.push('Свидетель')
		} else if (numberOfMembers >= 9) {
			roles.push('Доктор')
			roles.push('Дон')
		} else {
			while (roles.length < numberOfMembers){
				roles.push("Гражданин")
			}
		}

		roles.sort(() => Math.random() - 0.5)

		for (let iI=1; iI <= numberOfMembers; iI++) {

			let member = interaction.options.getMember(`${iI}`);

			if ( member.nickname != null || undefined) {
			 await member.setNickname(`${iI.toString().padStart(2, "0")}.${member.nickname}`)
			} else {
			 await member.setNickname(`${iI.toString().padStart(2, "0")}.${member.user.username}`)
			}

			memberArr.push(member.user.id);

			let i = iI - 1;

			objRole[member] = roles[i]

			if (roles[i] === 'Мафия') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [mafiaEmbed]});
					});
			} else if (roles[i] === 'Шериф') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [sheriffEmbed]});
				});
			} else if (roles[i] === 'Гражданин') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [civilianEmbed]});
				});
			} else if (roles[i] === 'Доктор') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [doctorEmbed]});
				});
			}  else if (roles[i] === 'Дон') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [donEmbed]});
				});
			} else if (roles[i] === 'Свидетель') {
				interaction.client.users.fetch(`${member.user.id}`).then((user) => {
					user.send({embeds: [witnessEmbed]});
				});
			}

			interaction.client.users.fetch(`${interaction.user.id}`).then((user) => {
					user.send(`${iI.toString().padStart(2, "0")}.${member.user.username}: ${roles[i]}`);
			});
		}

		console.log(objRole)

		await interaction.reply({ content: 'Номера и роли расставленны', ephemeral: true });
	},
};



