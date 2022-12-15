const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `lynxaiman.my.id`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Rull`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `Hai 𝐆𝐞𝐧𝐠`
let isi =`'lynx-Botz Adalah Bot WhatsApp Bisa Membuat Stiker Dll\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Owner)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/eba2ea6a3a70e171f7da6.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Ping', '.ping', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'lynxaiman.my.id',
    mediaType: 2, 
    description: urlnya,
    title: "Lynxaiman",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'lynxaiman.my.id'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
