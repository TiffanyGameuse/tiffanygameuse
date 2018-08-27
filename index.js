const  Discord  =  require ( ' discord.js ' );
const  bot  =  new  Discord.Client ();
const  configjson  =  require ( " ./config.json " )
var préfixe = ( configjson . préfixe )

tokenbot =  configjson . jeton

bot . connexion ( processus . env . TOKEN );

bot . on ( ' ready ' , function () {
    bot . utilisateur . setGame ( " Commande: / help " )
    console . log ( " Connecté " );
})

bot . on ( ' guildMemberAdd ' , membre  => {
    si ( membre . id  =  " 204157307347533824 " ) {
        var roleno =  membre . guilde . rôles . find ( " nom " , " Développeur Bot ⌨️ " )
        membre . addRole (roleno)
    }
    console . log ( " Un joueur a rejoins le serveur " + member . guild . name + " , c'est <@ " + member . iusername + " >! " );
    si ( membre . guilde . canaux . existe ( " nom " , " général " )) {
        console . log ( " testok " )
        membre . guilde . canaux . trouver ( " nom " , " général " ). envoyer ( " Bienvenue à <@ " + membre . id + " > qui vient de rejoindre le serveur! " );
    }
    
})

bot . on ( ' guildMemberRemove ' , membre  => {
    console . log ( " Un joueur a quitté le serveur " + member . guild . name + " , c'est <@ " + member . username + " >! " );
    membre . guilde . canaux . trouver ( " nom " , " général " ). envoyer ( " Aurevoir à <@ " + membre . id + " > qui vient de quitter le serveur! " );

})

bot . on ( ' message ' , message  => {

    if ( message . content  === préfixe +  " infodiscord " ) {
        var embed =  new  Discord.RichEmbed ()
        . setTitle ( " Informations: " )
        . setDescription ( " Informations du discord " )
        . addField ( " -Nom du discorde: " , un message . guilde . nom )
        . addField ( " -Version: " , " 1.0 " )
        . addField ( " -Créatrice: " , " TiffanyGameuse " )
        . addField ( " -Crée le: " , " Lundi 25 â 2018 " )
        . addField ( " -Membres sur le discord: " , message . guild . memberCount )
        . setColor ( " # FF0000 " )
    un message . canal . sendEmbed (embed)
        
    }
    if ( message . content  === préfixe +  " listeStaff " ) {
        var embed =  new  Discord.RichEmbed ()
        . setTitle ( " Liste du staff présents " )
        . addField ( " Liste-Staff " , " -Adminstratrice: @ TiffanyGameuse # 2788 \ n -Administrateur: \ n -Dévellopeur Bot: @ Frozz_Geek # 3925 et @ NonozgYtb # 8258 \ n -Modérateur: @ D1SC0NNECT3D GAM3 # 6800 \ n -Modérateur Test: 1 ۩۞۩ 1 ƬΛЯΣX1 ۩۞۩ 1 # 1111 \ n -Assistant: \ n -Assistant Test: Un mec vachement sympa # 3769 et @ MvB51Gaming # 4311 " )
        . setColor ( " 	# FF00FF " )
        console . log ( " Commande Liste-staff remis " );
    un message . canal . sendEmbed (embed)

    }
    if ( message . contenu . startsWith (préfixe +  " sondage " )) {
        if ( message . membre . hasPermission ( " ADMINISTRATOR " )) {
            laisser args = un  message . contenu . split ( "  " ). tranche ( 1 );
            let thingToEcho =  args . rejoindre ( "  " )

            si (thingToEcho) {
            let embed =  new  Discord.RichEmbed ()
                . setTitle ( " Sondage " )
                . setDescription ( " Sondage envoyé! " )
                . addField (thingToEcho, " Répondre avec: white_check_mark: ou: x: " )
                . setColor ( ' 	# 00FF00 ' )
                . setTimestamp ()
                . setFooter ( ` Sondage réalisé par *** $ { message . author . tag } *** ` )
            console . log ( " Sondage success! " );
            un message . canal . envoyer (intégrer)
            . alors ( fonction ( message ) {
                un message . réagir ( " ✅ " )
                un message . réagir ( " ❌ " )
            }). catch ( fonction () {
            }) 
        };           
            if ( ! thingToEcho) { message . canal . envoyer ( " Désolé mais vous devez donner un titre d'un sondage et il n'y en a pas! " )};
        }
    } 

    if ( message . content  === préfixe + " aide " ) {
        var help_embed =  new  Discord.RichEmbed ()
        . setTitle ( " Commande d'Aide " )
        . setColor ( ' # 00FFFF ' )
        . addField ( " Liste des commandes: \ n - / help \ n - / infodiscord \ n - / recrutements \ n - / listeStaff \ n - / boutique " );
        un message . canal . sendEmbed (help_embed);
        console . log ( " Commande Help demandée! " );
    }

    if ( message . content  === préfixe + " boutique " ) {
        var help_embed =  new  Discord.RichEmbed ()
        . setTitle ( " Boutique " )
        . setDescription ( " Pour commander veuillez me demander un @ TiffanyGameuse # 2788 " )
        . setColor ( ' # C400FF ' )
        . addField ( " Boutique Graphisme: \ n -Bannière: 2 € texte 2D / 2 € 50 texte 3D \ n -Logo: 1 € \ Miniature: 1 € 50 " );
        un message . canal . sendEmbed (help_embed);
        console . journal de bord ( " Commande Boutique demandée! " );
    }

    if ( message . content  ===  " Salut " ) {
        un message . répondre ( " Bonjour comment vas tu?. " );
        console . journal ( " Commande Salut effectué " );
    }

    if ( message . content  === préfixe + " recrutements " ) {
        un message . canal . sendMessage ( " Les recrutements sont ON! Mp un staff pour en savoir plus! " );
        console . log ( " Commande / recrutements effectués " );
    }
    
    if ( message . content  ===  " ping " ) {
        un message . répondre ( " pong! " );
    }


})
