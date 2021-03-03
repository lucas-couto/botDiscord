const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '-'
let escolherValores
let resultadoFinal = 0
let todasCasasJogadas = []
let amigos = []
const help = `FALA AE SEU PUTO
O BOT DO LUCAO TEM OS SEGUINTES COMANDOS:
-------------------------------------------
-roll
-ricas
-codei
-tu eh man? @nomedapessoa
-nudes
-how big is my dick?
-lucao ama rafa
-bunge
-------------------------------------------`

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content
    if (commandBody.includes('-roll')) {
        console.log(commandBody)
        escolherValores = null
        escolherValores = message.content.replace('-roll', '')
        escolherValores = escolherValores.split('d')
        message.channel.send(dado(escolherValores[0], escolherValores[1]))
    }
    if (commandBody == '-ricas'){
        console.log(message.author)
        message.channel.send('-<@!208770122389782528>: Entao ta bao, tchauuuu!')
    }
    if (commandBody == '-codei')
        message.reply('Vc foi codado!')
    if (commandBody.includes('tu') && commandBody.includes('eh') && commandBody.includes('man?')) {
        let tuEh = message.content.replace('-tu eh man?', '')
        message.channel.send('Analisando')
        for (let i = 0; i < 3; i++)
            message.channel.send('.')
        if (tuEh == '<@!309037561375096832>' && message.content.includes('Lucas') && message.content.includes('Couto') && message.content.includes('Lucao') && message.content.includes('lucao')) 
            message.channel.send(`Nao, ${tuEh} não é yag!`)
        else
            message.channel.send(`HMMMMMMMM... ${tuEh} TU EH rsrs!`)
    }
    if (commandBody == '-nudes'){
        console.log(commandBody)
        message.channel.send(`FOTO: 8===================D`)
    }

    if (commandBody.includes('how') && commandBody.includes('big') && commandBody.includes('dick'))
        message.channel.send(howBigIsMyDick())
    if (commandBody == '-lucao ama rafa')
        message.channel.send('-<@!309037561375096832>: Vou negar alguem que eu tanto amei?')
    if (commandBody == '-bunge')
        message.channel.send('-@Rafao: Pq na Bunge a gente trabalha pesado, intensamente... E tem umas mina de 16 daora HEHE')
    if (commandBody == '-help') 
        message.channel.send(help)
    if(commandBody.includes('eu') && commandBody.includes('manjo') && commandBody.includes('carro'))
        message.channel.send('HUR DUR, EU SEI DE TUDO HAHAHA, SOU SABIXÃO')
    if(commandBody == '-chacara')
        message.channel.send(`-<@!309037561375096832>: Bora chacara?`)
})

function howBigIsMyDick() {
    let tamanho = 1 + Math.floor((40 - 1) * Math.random())
    let corpo = ''
    let tamanhoIndex
    for (let i = 0; i < parseInt(tamanho); i++) {
        corpo += '='
    }
    if (tamanho > 30)
        tamanhoIndex = 'UAU, QUE PIROCONA MONSTRUOSA'
    if (tamanho > 10 && tamanho <= 30)
        tamanhoIndex = 'Nhe, Pinto Mediano'
    if (tamanho <= 10)
        tamanhoIndex = 'HAHA, PINTO PEQUENO'
    return `
    ${tamanhoIndex}
    8${corpo}D
    `
}

function dado(numVezesJogados, numCasas) {
    if (!numVezesJogados)
        numVezesJogados = 1
    resultadoFinal = 0
    todasCasasJogadas = []
    let [min, max] = [1, parseInt(numCasas)]
    if (!parseInt(numCasas) || !parseInt(numVezesJogados)) {
        return 'Dado invalido!'
    } else {
        for (let i = 0; i < parseInt(numVezesJogados); i++) {
            resultado = min + Math.floor((max - min) * Math.random())
            todasCasasJogadas.push(resultado)
            resultadoFinal += resultado
        }
        return `${resultadoFinal} ⟵ [${todasCasasJogadas}] ${numVezesJogados}d${numCasas}`
    }
}

client.login('NzMzNzM1NDgwNzA0NzYxOTA3.XxHeag.z8YVbsFoQk1yMYuMZ84ISvj1fGI')