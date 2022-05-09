//Bueno gente empezaremos el bot de Discord
const Discord = require('discord.js')//Aqui definimos el modulo discord.js que acabamos de instalar con el npm i discord.js
const client = new Discord.Client({ intents: 32509 })//Aqui definimos los eventos del bot, por asi decirlo los intents son los permisos del bot
//En la descripcion dejare la pagina de los intents //Recomiendo poner 32767 ya que son todos los permisos
const config = require('./config.json')//Es más seguro el .env 
require("dotenv").config()
//Le decimos al bot que requiere dotenv que instalamos con npm i dotenv para configurar el .env



client.on('ready', () => {
    console.log(`Sesion iniciada con node: ${process.version}`)
    console.log(`Iniciando sesion con: ${client.user.username}`)

    let estados = ['Comiendo papas', 'Comiendo perros']

    let estadosdefinit = estados[Math.floor(Math.random() * estados.length)]

    setInterval(() => {
        client.user.setPresence({
            activities: [{
                name: estadosdefinit,
                type: "PLAYING"
            }],
            status: "dnd"
        })
    }, 10000)
})//Aqui definimos el evento ready con un console.log para que nos muestre un mensaje cuando inicie con la version de node

//AVISO: para guardar cambios usa ctrl+s

client.on('messageCreate', async(message) => {
    const prefix = config.prefix //Aca pedimos el texto llamado prefix

    if(!message.content.startsWith(prefix)) return; //Aqui definimos que si el mensaje no contiene el prefix no continue con lo de abajo

    let usuario = message.mentions.members.first() || message.member; //Aqui definimos la let usuario que es igual a la primera mencion del mensaje o el miembro
    const args = message.content.slice(prefix.length).trim().split(/ + /g)//xd creo que asi era :v
    //el metodo .slice() sirve para contar los caracteres de algo en este caso los caracteres del prefix
    //el .trim() sirve para arreglar los espacios :v
    //y el .split sirve para dividir un mensaje
    //Ejemplo .split(): Mensaje: Hola / Hello //aqui mediante el / nos divide el mensaje y podemos crear opciones de hecho
    //Eso lo veremos más adelante xD
    const command = args.shift().toLowerCase()//Aca creo que el shift era pa arreglar el array no se :v
    //y el .tolowerCase() creo que era pa convertir los string en otro formato xd

    //No me hagan caso en lo de command investiguen XD

    //Bueno ahora vamos a los comandos

    if(command === "hola"){
        message.reply("Hola, soy un bot muy bueno")
    }//Aqui decimos que si el comando es igual a hola responda: Hola, soy un bot muy bueno

    if(command === "ping"){
        message.reply("Mi ping es de ** " + client.ws.ping + " ms**")

        //comando ping sencillo
        //client.ws.ping = el ping del bot
    }


})

client.login(process.env.TOKEN)
//Pedimos la variable token mediante un proceso
//y esa variable contiene el token/clave del bot

//Funciona

//El config.json sirve para definir cosas xd

//El de su bot no este, si lo intentan copiar estara regenerado

//JSON es para base de datos si no saben xd, se usa mucho para eso para guardar cosas