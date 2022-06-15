
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285161806141','6282322350815']
global.packname = 'Random Sticker'
global.author = 'MuliaBotz MD'
global.sessionName = 'data'
global.prefa = ['','!','.','#']
global.ownername = 'OwnerBotz'
global.sp = '>'
global.mess = {
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot-nya Bukan Admin Bnh*!',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Hanya Bisa Digunakan di Grup!*',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_*Proses, Tunggu Bentar..*_',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
