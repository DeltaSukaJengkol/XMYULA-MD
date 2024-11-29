let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Berapa Bank?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].bank += 1000
    conn.reply(m.chat, 'Sukses', m)
}
handler.help = ['addbank']
handler.tags = ['owner']
handler.command = /^addbank(user)?$/i
handler.rowner = true

export default handler