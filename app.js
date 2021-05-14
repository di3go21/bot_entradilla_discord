const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN).then(()=>{
  console.log(`Preparado y listo para el combate`);
})

var audios = ["trolaso3.mp3", "trolaso2.mp3", "sincomer.mpeg", "steve.mpeg", "harry.mpeg", "trolaso.mp3", "franco.mp3", "sisisi.mp3", "escuelaHogwars.mp3", "mataoBien.mp3", "aitor1.ogg", "luegocuento.ogg"];

const rutaFicheros=__dirname+"/audios/"

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/hola') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(rutaFicheros + "franco.mp3");
    } else {
      message.reply('tienes q estar en el grupo de voz MATAO!');
    }
  }

 if (message.content === '/paranda') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      var audioR = audios[Math.floor(Math.random() * audios.length)]
      connection.play(`${rutaFicheros}paranda.mp3` );
    } else {
      message.reply('tienes q estar en el grupo de voz MATAO!');
    }
  }
 if (message.content === '/estoqes') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      var audioR = audios[Math.floor(Math.random() * audios.length)]
      connection.play(`${rutaFicheros}estoqes.mp3`);
    } else {
      message.reply('tienes q estar en el grupo de voz MATAO!');
    }
  }
});

client.on('voiceStateUpdate', async (oldState, newState) => {
  // check for bot
  if (oldState.member.user.bot) return;

  var elMatao = oldState.member.user.username;
  // the rest of your code

  var conex, audio;
  if (oldState.channelID && newState.channelID) {
    console.log(elMatao + " ha realizado una accion q no es entrar ni salir");
  }
  else if (oldState.channelID) {
    console.log(elMatao + " ha salido");
    conex = await oldState.channel.join();
    audio = "adiosMatao.mp3";
  }
  else {
    console.log(elMatao + " ha entrado");
    conex = await newState.member.voice.channel.join();
    audio = dameAudioDelMatao(elMatao);
  }
  if (conex) {
    conex.play(rutaFicheros + audio);
  }


})



function dameAudioDelMatao(elMatao) {
  var audio = "";
  if (elMatao == "Javitro")
    audio = "javi2.mp3";
  else if (elMatao == "RedvolutioN") {
    var ochoa = ['ochoa.mp3', 'ochoa2.mpeg'];
    audio = ochoa[Math.floor(Math.random() * ochoa.length)];
  }
  else if (elMatao == "BlazquesitoNomas")
    audio = "blaz2.mp3";
  else if (elMatao == "MINITROZO")
    audio = "belen.mp3";
  else if (elMatao == "Juanjo")
    audio = "jony.mp3";
  else if (elMatao == "chrispichi")
    audio = "cris2.mp3";
  else if (elMatao == "di3go21") {
    var peru = ["nomentil.mp3", "nomentil.mp3"];
    audio = peru[Math.floor(Math.random() * peru.length)]

  }
  else if (elMatao == "frankik")
    audio = "kiko.mp3";
  else if (elMatao == "Barrich")
    audio = "barri.mp3";

  else if (elMatao == "rubiBJ") {
    var rub = ['rustico.mp3', 'rustico.mp3'];
    audio = rub[Math.floor(Math.random() * rub.length)]
    audio = "rustico.mp3";
  }
  else if (elMatao == "iTroll") {
    var ait = ['aitor1.mp3', 'aitor4.mp3', "harry.mpeg", "harry.mpeg", "harry.mpeg", "harry.mpeg"];
    audio = ait[Math.floor(Math.random() * ait.length)]
  }
  else
    audio = audios[Math.floor(Math.random() * audios.length)];

  return audio;
}
