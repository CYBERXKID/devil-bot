const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "๐ *To check update .update* โ\n๐ *To update Bot .update nowโ *\n\n๐๏ธ *๐๐ข๐ญ๐ก๐ฎ๐ ๐๐ข๐ง๐ค : https://github.com/Luciferking1/Miss-Helenaaโ *\n\n๐๏ธ *๐๐ฎ๐๐ข๐จ ๐๐จ๐ฆ๐ฆ๐๐ง๐ : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads* โ\n\n* ๐๏ธ๐๐ญ๐ข๐๐ค๐๐ซ ๐๐จ๐ฆ๐ฆ๐๐ง๐ : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser* โ"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "๐ *To check update .update* โ\n\n๐ *To update Bot .update now* โ\n\n\n๐๏ธ *๐๐ข๐ญ๐ก๐ฎ๐ ๐๐ข๐ง๐ค : https://github.com/Luciferking1/Miss-Helenaa* โ\n\n๐๏ธ *๐๐ฎ๐๐ข๐จ ๐๐จ๐ฆ๐ฆ๐๐ง๐ : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads* โ\n\n* ๐๏ธ๐๐ญ๐ข๐๐ค๐๐ซ ๐๐จ๐ฆ๐ฆ๐๐ง๐ : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser* โ"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
