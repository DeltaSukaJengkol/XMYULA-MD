let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Berapa Exp?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].Exp += 1000
    conn.reply(m.chat, 'Sukses', m)
}
handler.help = ['addexp']
handler.tags = ['owner']
handler.command = /^addexp(user)?$/i
handler.rowner = true

export default handler