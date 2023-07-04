const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "ISI APIKEY LU AMBIL DI OPENAI.COM" // ISI APIKEY LU

global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU

global.namabot = "GengBotzzXBugxx" // UBAH JADI NAMA LU
global.namaowner = "GengzzStore💤" // NAMA OWNER
global.footer_text = "©GengBotzzxBugzz" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283846677065'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '©Geng-BOTZXBugzz' //sticker wm ubah
global.author = 'Di Buat Oleh GengStore' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.script = ("Kamu Nanyak? 🗿") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/CO4USbDLEte2GzCN2GH7aJ" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/CO4USbDLEte2GzCN2GH7aJ`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})