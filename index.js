const Discord = require('discord.js');
const bot = new Discord.Client();
const configjson = require("./config.json")
var prefix = (configjson.prefix)

tokenbot = configjson.token

bot.login(tokenbot)

bot.on('ready', function() {
    bot.user.setGame("Command: /help")
    console.log("Connecté");
});

bot.on('guildMemberAdd', member => {
    if(member.id = "204157307347533824") {
        var roleno = member.guild.roles.find("name", "⌨️ Développeur Bot ⌨️")
        member.addRole(roleno)
    }
    console.log("Un joueur a rejoins le serveur "+member.guild.name+", c'est <@"+member.iusername+"> !");
    if(member.guild.channels.exists("name", "bienvenue")){
        console.log("testok")
        member.guild.channels.find("name", "bienvenue").send("Bienvenue à <@"+member.id+"> qui vient de rejoindre le serveur !");
    }
    
});

bot.on('guildMemberRemove', member => {
    console.log("Un joueur a quitté le serveur "+member.guild.name+", c'est <@"+member.username+"> !");
    member.guild.channels.find("name", "bienvenue").send("Aurevoir à <@"+member.id+"> qui vient de quitter le serveur !");

});

bot.on('message', message => {
/// commande infodiscord
    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setTitle("Informations :")
        .setDescription("Informations du discord")
        .addField("-Nom du discord :", message.guild.name)
        .addField("-Version :", "1.0")
        .addField("-Créatrice :", "TiffanyGameuse")
        .addField("-Crée le :", "Lundi 25 âout 2018")
        .addField("-Membres sur le discord :", message.guild.memberCount)
        .setColor("#FF0000")
    message.channel.sendEmbed(embed)
        
    }
/// commande listestaff
    if(message.content === prefix + "listeStaff") {
        var embed = new Discord.RichEmbed()
        .setTitle("Liste du staff présents")
        .addField("Liste-Staff", "-Adminstratrice: @TiffanyGameuse#2788 \n-Administrateur: \n-Dévellopeur Bot: @Frozz_Geek#3925 et @NonozgYtb#8258 \n-Modérateur: @D1SC0NNECT3D GAM3#6800 \n-Modérateur Test: ๑۩۞۩๑ƬΛЯΣX๑۩۞۩๑#1111 \n-Assistant: \n-Assistant Test: Un mec vachement sympa#3769 et @MvB51Gaming#4311")
        .setColor("	#FF00FF")
        console.log("Commande Liste-staff demandé");
    message.channel.sendEmbed(embed)

    }
/// commande sondage
    if(message.content.startsWith(prefix + "sondage")) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")

            if(thingToEcho) {
            let embed = new Discord.RichEmbed()
                .setTitle("Sondage")
                .setDescription("Sondage envoyé !")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor('	#00FF00')
                .setTimestamp()
                .setFooter(`Sondage réalisé par ***${message.author.tag}***`)
            console.log("Sondage success !");
            message.channel.send(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            }); 
        };           
            if(!thingToEcho) {message.channel.send("Désolé mais vous devez donner un titre d'un sondage et il n'y en as pas !")};
        }
    } 
/// commande help
    if(message.content === prefix+"help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Commande d'Aide")
        .setColor('#00FFFF')
        .addField("Liste des commandes: \n -/help \n -/infodiscord \n -/recrutements \n -/listeStaff \n -/boutique");
        message.channel.sendEmbed(help_embed);
        console.log("Commande Help demandée !");
    }
/// boutique
    if(message.content === prefix+"boutique"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Boutique")
        .setDescription("Pour commandé veuillez demandé a @TiffanyGameuse#2788")
        .setColor('#C400FF')
        .addField("Boutique Graphisme: \n -Banniére: 2€ texte 2D / 2€50 texte 3D \n -Logo: 1€ \n -Miniature: 1€50");
        message.channel.sendEmbed(help_embed);
        console.log("Commande Boutique demandée !");
    }
/// commande youtube
    if (message.content === prefix+"youtube"){
        message.reply("\n Ma chaine Youtube Tiffany62 : https://www.youtube.com/channel/UCrNvVe7kV616Y0k7aXc822g?view_as=subscriber \n Ma chaine Youtube Tutoriels Gaming : https://www.youtube.com/channel/UC4TxyzXfn96UPSQJZqf-niA?view_as=subscriber");
        console.log("Commande Youtube effectué");
    }

/// commande Salut
    if (message.content === "Salut"){
        message.reply("Bonjour comment vas tu ?.");
        console.log("Commande Salut effectué");
    }
 
    if (message.content === "Bien et toi"){
        message.reply("bien merci");
        console.log("Commande effectué");
    }
/// commande recrutements
    if (message.content === prefix+"recrutements"){
        message.channel.sendMessage("Les recrutements Sont ON ! Mp un staff pour en savoir plus !");
        console.log("Commande /recrutements effectué");
    }
/// commande ping
    if (message.content === "ping"){
        message.reply("pong!");
    }


});