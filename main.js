/*
 * NAME: XMYULA-MD
 * AUTHOR: XM4ZE
 */

const _0x351aa1=_0x1a48;(function(_0x5e044c,_0x2a4da2){const _0x29dea4=_0x1a48,_0x22d1fe=_0x5e044c();while(!![]){try{const _0x5876c8=-parseInt(_0x29dea4(0xd9))/0x1*(parseInt(_0x29dea4(0x87))/0x2)+parseInt(_0x29dea4(0xd6))/0x3+-parseInt(_0x29dea4(0xe5))/0x4*(parseInt(_0x29dea4(0x75))/0x5)+parseInt(_0x29dea4(0xde))/0x6*(-parseInt(_0x29dea4(0xca))/0x7)+-parseInt(_0x29dea4(0xc6))/0x8+parseInt(_0x29dea4(0xfa))/0x9*(-parseInt(_0x29dea4(0xaf))/0xa)+parseInt(_0x29dea4(0xbc))/0xb;if(_0x5876c8===_0x2a4da2)break;else _0x22d1fe['push'](_0x22d1fe['shift']());}catch(_0x1b2c33){_0x22d1fe['push'](_0x22d1fe['shift']());}}}(_0x16ca,0x58c55),process[_0x351aa1(0xef)][_0x351aa1(0x7f)]='0');import'./config.js';import{createRequire}from'module';function _0x1a48(_0x2e1a26,_0x5517d3){const _0x16cacf=_0x16ca();return _0x1a48=function(_0x1a48e4,_0x56b5e2){_0x1a48e4=_0x1a48e4-0x6f;let _0x3e59a9=_0x16cacf[_0x1a48e4];return _0x3e59a9;},_0x1a48(_0x2e1a26,_0x5517d3);}import _0x5cd574,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';global[_0x351aa1(0x84)]=function filename(_0x4933c3=import.meta['url'],_0xccf901=platform!==_0x351aa1(0xce)){return _0xccf901?/file:\/\/\//['test'](_0x4933c3)?fileURLToPath(_0x4933c3):_0x4933c3:pathToFileURL(_0x4933c3)['toString']();},global[_0x351aa1(0x8e)]=function dirname(_0x53b27b){const _0x154142=_0x351aa1;return _0x5cd574[_0x154142(0x6f)](global['__filename'](_0x53b27b,!![]));},global[_0x351aa1(0xc5)]=function require(_0x3891f7=import.meta[_0x351aa1(0x10e)]){return createRequire(_0x3891f7);};import*as _0x16690d from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from'fs';import _0x342e08 from'yargs';import{spawn}from'child_process';import _0x5e59d1 from'lodash';import{clear}from'console';import _0x3dad34 from'cfonts';import _0x175a3d from'syntax-error';import{tmpdir}from'os';import _0x101cd5 from'chalk';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x2712ea from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';const {makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,PHONENUMBER_MCC}=await import(_0x351aa1(0x97)),{CONNECTING}=_0x16690d,{chain}=_0x5e59d1,PORT=process[_0x351aa1(0xef)][_0x351aa1(0x100)]||process[_0x351aa1(0xef)][_0x351aa1(0xee)]||0xbb8;protoType(),serialize(),global['API']=(_0x3d107a,_0x370610='/',_0x337aef={},_0x5eacc4)=>(_0x3d107a in global[_0x351aa1(0xe4)]?global[_0x351aa1(0xe4)][_0x3d107a]:_0x3d107a)+_0x370610+(_0x337aef||_0x5eacc4?'?'+new URLSearchParams(Object['entries']({..._0x337aef,..._0x5eacc4?{[_0x5eacc4]:global['APIKeys'][_0x3d107a in global[_0x351aa1(0xe4)]?global['APIs'][_0x3d107a]:_0x3d107a]}:{}})):''),global[_0x351aa1(0xb2)]={'start':new Date()};const __dirname=global['__dirname'](import.meta[_0x351aa1(0x10e)]);global[_0x351aa1(0xe0)]=new Object(_0x342e08(process[_0x351aa1(0x102)][_0x351aa1(0xb3)](0x2))['exitProcess'](![])['parse']()),global['prefix']=new RegExp('^['+(opts['prefix']||_0x351aa1(0xc3))[_0x351aa1(0xeb)](/[|\\{}()[\]^$+*?.\-\^]/g,'\x5c$&')+']'),global['db']=new Low(/https?:\/\//[_0x351aa1(0x92)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i['test'](opts['db'])?opts[_0x351aa1(0x9e)]?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+'database.json')),global['loadDatabase']=async function loadDatabase(){const _0x3c446c=_0x351aa1;if(global['db'][_0x3c446c(0xa8)])return new Promise(_0x25ab84=>setInterval(async function(){const _0x26a647=_0x3c446c;!global['db'][_0x26a647(0xa8)]&&(clearInterval(this),_0x25ab84(global['db'][_0x26a647(0xb9)]==null?global[_0x26a647(0x79)]():global['db']['data']));},0x1*0x3e8));if(global['db']['data']!==null)return;global['db'][_0x3c446c(0xa8)]=!![],await global['db'][_0x3c446c(0xf1)]()[_0x3c446c(0xf4)](console[_0x3c446c(0x71)]),global['db'][_0x3c446c(0xa8)]=null,global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'banned':{},'sticker':{},'settings':{},...global['db'][_0x3c446c(0xb9)]||{}},global['db'][_0x3c446c(0xff)]=chain(global['db'][_0x3c446c(0xb9)]);},loadDatabase(),global[_0x351aa1(0x9a)]=''+(opts['_'][0x0]||'sessions'),console[_0x351aa1(0x72)](_0x351aa1(0xa2)+authFile);const {state,saveCreds}=await useMultiFileAuthState(global['authFile']),{version,isLatest}=await fetchLatestBaileysVersion();console['log'](_0x351aa1(0xb7)+version['join']('.')+',\x20isLatest:\x20'+isLatest);const pairingCode=process[_0x351aa1(0x102)][_0x351aa1(0xcf)](_0x351aa1(0xdb)),connectionOptions={'version':version,'logger':_0x2712ea({'level':_0x351aa1(0xdd)}),'printQRInTerminal':!pairingCode,'browser':[_0x351aa1(0xea),_0x351aa1(0xb8),_0x351aa1(0xac)],'auth':{'creds':state[_0x351aa1(0x85)],'keys':makeCacheableSignalKeyStore(state['keys'],_0x2712ea()[_0x351aa1(0xe9)]({'level':'silent','stream':_0x351aa1(0x10d)}))}};global[_0x351aa1(0x106)]=makeWASocket(connectionOptions),conn[_0x351aa1(0xa6)]=![];!opts['test']&&setInterval(async()=>{const _0x3f4ee2=_0x351aa1;if(global['db'][_0x3f4ee2(0xb9)])await global['db'][_0x3f4ee2(0xe2)]()[_0x3f4ee2(0xf4)](console[_0x3f4ee2(0x71)]);},0x3c*0x3e8);if(opts[_0x351aa1(0x7a)])(await import(_0x351aa1(0x93)))['default'](global[_0x351aa1(0x106)],PORT);async function connectionUpdate(_0x5ab15e){const _0x241807=_0x351aa1,{receivedPendingNotifications:_0x3dbd40,connection:_0x540481,lastDisconnect:_0x409a9c,isOnline:_0x59105d,isNewLogin:_0x1e8d75}=_0x5ab15e;if(_0x1e8d75)conn[_0x241807(0xa6)]=!![];if(_0x540481==_0x241807(0x9b))console[_0x241807(0x72)](_0x101cd5['redBright'](_0x241807(0x9f)));if(_0x540481==_0x241807(0xfc))console['log'](_0x101cd5['green']('Tersambung'));if(_0x59105d==!![])console['log'](_0x101cd5[_0x241807(0x88)]('Status\x20Aktif'));if(_0x59105d==![])console[_0x241807(0x72)](_0x101cd5['red'](_0x241807(0xf0)));if(_0x3dbd40)console[_0x241807(0x72)](_0x101cd5[_0x241807(0xc7)](_0x241807(0xf9)));if(_0x540481==_0x241807(0xf2))console[_0x241807(0x72)](_0x101cd5[_0x241807(0xb1)](_0x241807(0xbd)));global[_0x241807(0xb2)][_0x241807(0xe1)]=new Date();_0x409a9c&&_0x409a9c['error']&&_0x409a9c[_0x241807(0x71)][_0x241807(0xec)]&&_0x409a9c[_0x241807(0x71)][_0x241807(0xec)][_0x241807(0x99)]!==DisconnectReason[_0x241807(0xd7)]&&(console[_0x241807(0x72)](_0x101cd5[_0x241807(0xb1)](_0x241807(0xd2))),await global[_0x241807(0xe8)](!![]));if(global['db'][_0x241807(0xb9)]==null)await global['loadDatabase']();}process['on'](_0x351aa1(0xdf),console[_0x351aa1(0x71)]);let isInit=!![],handler=await import(_0x351aa1(0xa0));global[_0x351aa1(0xe8)]=async function(_0x26de7a){const _0x4368ac=_0x351aa1;try{const _0x2bf509=await import(_0x4368ac(0xcb)+Date[_0x4368ac(0x8f)]())[_0x4368ac(0xf4)](console['error']);if(Object[_0x4368ac(0x103)](_0x2bf509||{})[_0x4368ac(0xb0)])handler=_0x2bf509;}catch(_0x1044fe){console[_0x4368ac(0x71)](_0x1044fe);}if(_0x26de7a){const _0x515549=global['conn'][_0x4368ac(0xc9)];try{global[_0x4368ac(0x106)]['ws']['close']();}catch{}conn['ev']['removeAllListeners'](),global[_0x4368ac(0x106)]=makeWASocket(connectionOptions,{'chats':_0x515549}),isInit=!![];}return!isInit&&(conn['ev'][_0x4368ac(0x7c)](_0x4368ac(0xa1),conn[_0x4368ac(0x89)]),conn['ev'][_0x4368ac(0x7c)]('group-participants.update',conn[_0x4368ac(0xab)]),conn['ev'][_0x4368ac(0x7c)](_0x4368ac(0xc1),conn['groupsUpdate']),conn['ev'][_0x4368ac(0x7c)](_0x4368ac(0xa4),conn[_0x4368ac(0xaa)]),conn['ev'][_0x4368ac(0x7c)](_0x4368ac(0xc0),conn[_0x4368ac(0xcd)]),conn['ev'][_0x4368ac(0x7c)](_0x4368ac(0x8b),conn['credsUpdate'])),conn[_0x4368ac(0xa3)]=_0x4368ac(0x81),conn[_0x4368ac(0xbe)]='*@user*\x20*𝚑𝚊𝚜\x20𝚕𝚎𝚏𝚝\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*',conn[_0x4368ac(0x77)]='@user\x20sekarang\x20admin!',conn[_0x4368ac(0x113)]=_0x4368ac(0xd1),conn[_0x4368ac(0x74)]=_0x4368ac(0x8c),conn['sSubject']=_0x4368ac(0x112),conn[_0x4368ac(0x101)]=_0x4368ac(0xfd),conn['sRevoke']=_0x4368ac(0xc8),conn[_0x4368ac(0x89)]=handler[_0x4368ac(0x89)][_0x4368ac(0xd3)](global[_0x4368ac(0x106)]),conn[_0x4368ac(0xab)]=handler[_0x4368ac(0xab)]['bind'](global[_0x4368ac(0x106)]),conn[_0x4368ac(0x78)]=handler[_0x4368ac(0x78)][_0x4368ac(0xd3)](global[_0x4368ac(0x106)]),conn[_0x4368ac(0xaa)]=handler[_0x4368ac(0xbb)][_0x4368ac(0xd3)](global[_0x4368ac(0x106)]),conn[_0x4368ac(0xcd)]=connectionUpdate[_0x4368ac(0xd3)](global[_0x4368ac(0x106)]),conn[_0x4368ac(0xd4)]=saveCreds[_0x4368ac(0xd3)](global[_0x4368ac(0x106)]),conn['ev']['on']('messages.upsert',conn[_0x4368ac(0x89)]),conn['ev']['on'](_0x4368ac(0x9c),conn[_0x4368ac(0xab)]),conn['ev']['on'](_0x4368ac(0xc1),conn[_0x4368ac(0x78)]),conn['ev']['on']('message.delete',conn[_0x4368ac(0xaa)]),conn['ev']['on']('connection.update',conn['connectionUpdate']),conn['ev']['on'](_0x4368ac(0x8b),conn[_0x4368ac(0xd4)]),isInit=![],!![];};const pluginFolder=global[_0x351aa1(0x8e)](join(__dirname,_0x351aa1(0xb5))),pluginFilter=_0x4790de=>/\.js$/[_0x351aa1(0x92)](_0x4790de);global[_0x351aa1(0xdc)]={};async function filesInit(){const _0x188924=_0x351aa1;for(let _0x515526 of readdirSync(pluginFolder)[_0x188924(0x107)](pluginFilter)){try{let _0x360c42=global[_0x188924(0x84)](join(pluginFolder,_0x515526));const _0x59e10b=await import(_0x360c42);global[_0x188924(0xdc)][_0x515526]=_0x59e10b['default']||_0x59e10b;}catch(_0x3122b6){conn[_0x188924(0x91)][_0x188924(0x71)](_0x3122b6),delete global[_0x188924(0xdc)][_0x515526];}}}filesInit()[_0x351aa1(0xb6)](_0x57d8e6=>console[_0x351aa1(0x72)](Object[_0x351aa1(0x103)](global[_0x351aa1(0xdc)])))[_0x351aa1(0xf4)](console[_0x351aa1(0x71)]),global[_0x351aa1(0xf6)]=async(_0x50f4b2,_0x8e78de)=>{const _0x3fb7e6=_0x351aa1;if(pluginFilter(_0x8e78de)){let _0x316ecf=global[_0x3fb7e6(0x84)](join(pluginFolder,_0x8e78de),!![]);if(_0x8e78de in global[_0x3fb7e6(0xdc)]){if(existsSync(_0x316ecf))conn[_0x3fb7e6(0x91)]['info'](_0x3fb7e6(0xae)+_0x8e78de+'\x27');else return conn['logger'][_0x3fb7e6(0x10f)](_0x3fb7e6(0xfb)+_0x8e78de+'\x27'),delete global[_0x3fb7e6(0xdc)][_0x8e78de];}else conn[_0x3fb7e6(0x91)]['info'](_0x3fb7e6(0x95)+_0x8e78de+'\x27');let _0x3b8b31=_0x175a3d(readFileSync(_0x316ecf),_0x8e78de,{'sourceType':_0x3fb7e6(0xa7),'allowAwaitOutsideFunction':!![]});if(_0x3b8b31)conn[_0x3fb7e6(0x91)][_0x3fb7e6(0x71)](_0x3fb7e6(0xb4)+_0x8e78de+'\x27\x0a'+format(_0x3b8b31));else try{const _0x54e5be=await import(global[_0x3fb7e6(0x84)](_0x316ecf)+'?update='+Date[_0x3fb7e6(0x8f)]());global['plugins'][_0x8e78de]=_0x54e5be[_0x3fb7e6(0x110)]||_0x54e5be;}catch(_0x6122b0){conn[_0x3fb7e6(0x91)]['error']('error\x20require\x20plugin\x20\x27'+_0x8e78de+'\x0a'+format(_0x6122b0)+'\x27');}finally{global[_0x3fb7e6(0xdc)]=Object[_0x3fb7e6(0x73)](Object['entries'](global[_0x3fb7e6(0xdc)])[_0x3fb7e6(0xfe)](([_0x1c5202],[_0x5b7d61])=>_0x1c5202[_0x3fb7e6(0x86)](_0x5b7d61)));}}},Object[_0x351aa1(0xba)](global[_0x351aa1(0xf6)]),watch(pluginFolder,global['reload']),await global['reloadHandler']();async function _quickTest(){const _0x7a8323=_0x351aa1;let _0x53591a=await Promise[_0x7a8323(0xa5)]([spawn(_0x7a8323(0x105)),spawn('ffprobe'),spawn(_0x7a8323(0x105),[_0x7a8323(0x98),_0x7a8323(0x10c),_0x7a8323(0x71),_0x7a8323(0x82),_0x7a8323(0xe3),_0x7a8323(0x10b),'1','-f',_0x7a8323(0xad),'-']),spawn(_0x7a8323(0x7b)),spawn(_0x7a8323(0x10a)),spawn('gm'),spawn(_0x7a8323(0x7e),[_0x7a8323(0x8d)])]['map'](_0x52fc8b=>{const _0x38f982=_0x7a8323;return Promise[_0x38f982(0xe7)]([new Promise(_0x4b3414=>{const _0x186171=_0x38f982;_0x52fc8b['on'](_0x186171(0xf2),_0x1eeca9=>{_0x4b3414(_0x1eeca9!==0x7f);});}),new Promise(_0x2460df=>{const _0x34871a=_0x38f982;_0x52fc8b['on'](_0x34871a(0x71),_0x48ae90=>_0x2460df(![]));})]);})),[_0x3b64d9,_0xa7c772,_0x199bad,_0x2df0f6,_0x5a6313,_0x311d30,_0x53ca1f]=_0x53591a;console[_0x7a8323(0x72)](_0x53591a);let _0x3649b1=global['support']={'ffmpeg':_0x3b64d9,'ffprobe':_0xa7c772,'ffmpegWebp':_0x199bad,'convert':_0x2df0f6,'magick':_0x5a6313,'gm':_0x311d30,'find':_0x53ca1f};Object['freeze'](global[_0x7a8323(0xd5)]);if(!_0x3649b1[_0x7a8323(0x105)])conn['logger'][_0x7a8323(0x10f)](_0x7a8323(0x111));if(_0x3649b1[_0x7a8323(0x105)]&&!_0x3649b1[_0x7a8323(0xf7)])conn[_0x7a8323(0x91)][_0x7a8323(0x10f)](_0x7a8323(0xbf));if(!_0x3649b1['convert']&&!_0x3649b1[_0x7a8323(0x10a)]&&!_0x3649b1['gm'])conn[_0x7a8323(0x91)][_0x7a8323(0x10f)](_0x7a8323(0x8a));}_quickTest()[_0x351aa1(0xb6)](()=>conn[_0x351aa1(0x91)][_0x351aa1(0xed)](_0x351aa1(0x90)))[_0x351aa1(0xf4)](console[_0x351aa1(0x71)]);import _0x24ef09 from'readline';function _0x16ca(){const _0x515be8=['all','isInit','module','READ','\x0aMasukan\x20nomor\x20:','onDelete','participantsUpdate','20.0.04','webp','re\x20-\x20require\x20plugin\x20\x27','1140560NtxZGt','length','red','timestamp','slice','syntax\x20error\x20while\x20loading\x20\x27','./plugins/index','then','using\x20WA\x20v','Chrome','data','freeze','deleteUpdate','18180613oJcThs','koneksi\x20terputus\x20&\x20mencoba\x20menyambung\x20ulang...','bye','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','connection.update','groups.update','bgBlack','â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â�?:;?&.\x5c-','clear','__require','2181656CrWNOV','yellow','Link\x20group\x20telah\x20diubah\x20ke\x20\x0a@revoke','chats','7UHEyIA','./handler.js?update=','authState','connectionUpdate','win32','includes','MASUKAN\x20NOMORMU\x20DENGAN\x20BENAR\x20AWALI\x20DENGAN\x2062\x20!!!','@user\x20sekarang\x20bukan\x20admin!','Connecting...','bind','credsUpdate','support','1519647bfsxzo','loggedOut','greenBright','1dRKNFT','join','--pairing','plugins','silent','315366RPQEYj','uncaughtException','opts','connect','write','color','APIs','4ZeLDly','━━━━━━━━━━━\x20https://github.com/XM4ZE\x20━━━━━━━━━━━','race','reloadHandler','child','Ubuntu','replace','output','info','SERVER_PORT','env','Status\x20Mati','read','close','white','catch','startsWith','reload','ffmpegWebp','bold','Menunggu\x20Pesan\x20Baru','54iiEgQU','deleted\x20plugin\x20\x27','open','Icon\x20grup\x20telah\x20diubah!','sort','chain','PORT','sIcon','argv','keys','blue','ffmpeg','conn','filter','Kode\x20tautan\x20kamu\x20:\x20','repeat','magick','-frames:v','-loglevel','store','url','warn','default','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','Judul\x20grup\x20telah\x20diubah\x20ke\x20\x0a@subject','sdemote','dirname','stdin','error','log','fromEntries','sDesc','2473355MWBPNp','question','spromote','groupsUpdate','loadDatabase','server','convert','off','\x0a\x0aMasukan\x20nomor\x20kamu\x20:','find','NODE_TLS_REJECT_UNAUTHORIZED','\x0aPAIRING\x20CODE\x0a','*@user*\x0a*𝚑𝚊𝚜\x20𝚓𝚘𝚒𝚗𝚎𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*\x0a\x0a𝙱𝚎𝚏𝚘𝚛𝚎\x20𝚝𝚑𝚊𝚝,\x20𝚍𝚘𝚗𝚝\x20𝚏𝚘𝚛𝚐𝚎𝚝\x20𝚝𝚘\x20𝚛𝚎𝚊𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙\x20𝚛𝚞𝚕𝚎𝚜','-filter_complex','tiny','__filename','creds','localeCompare','582904ObLCtC','green','handler','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','creds.update','Deskripsi\x20telah\x20diubah\x20ke\x20\x0a@desc','--version','__dirname','now','☑️\x20Quick\x20Test\x20Done','logger','test','./server.js','some','requiring\x20new\x20plugin\x20\x27','registered','@adiwajshing/baileys','-hide_banner','statusCode','authFile','connecting','group-participants.update','left','mongodbv2','Mengaktifkan\x20Bot,\x20Mohon\x20tunggu\x20sebentar...','./handler.js','messages.upsert','Load\x20AuthFile\x20from\x20','welcome','message.delete'];_0x16ca=function(){return _0x515be8;};return _0x16ca();}const more=String['fromCharCode'](0x200e),readMore=more[_0x351aa1(0x109)](0xfa1),sleep=_0x2ab231=>{return new Promise(_0x3f17fd=>setTimeout(_0x3f17fd,_0x2ab231));},rl=_0x24ef09['createInterface']({'input':process[_0x351aa1(0x70)],'output':process['stdout']}),question=_0x334448=>new Promise(_0x54de2d=>rl[_0x351aa1(0x76)](_0x334448,_0x54de2d));if(pairingCode&&!conn[_0x351aa1(0xcc)][_0x351aa1(0x85)][_0x351aa1(0x96)]){console[_0x351aa1(0xc4)](),await sleep(0x1b58),console[_0x351aa1(0xc4)](),_0x3dad34['say'](_0x351aa1(0x80),{'font':_0x351aa1(0x83),'align':_0x351aa1(0x9d),'gradient':[_0x351aa1(0xb1),_0x351aa1(0x104)]}),console[_0x351aa1(0x72)](_0x101cd5['bold'][_0x351aa1(0xf3)](_0x351aa1(0xe6))),console[_0x351aa1(0x72)](_0x101cd5[_0x351aa1(0xf8)][_0x351aa1(0x88)](_0x351aa1(0x7d)));let phoneNumber=await question(_0x101cd5['bgBlack'](_0x101cd5[_0x351aa1(0xd8)]('>\x20')));phoneNumber=phoneNumber[_0x351aa1(0xeb)](/[^0-9]/g,'');!Object[_0x351aa1(0x103)](PHONENUMBER_MCC)[_0x351aa1(0x94)](_0x70c250=>phoneNumber[_0x351aa1(0xf5)](_0x70c250))&&(console[_0x351aa1(0x72)](_0x101cd5['bold'][_0x351aa1(0xb1)](_0x351aa1(0xd0))),console[_0x351aa1(0x72)](_0x101cd5[_0x351aa1(0xf8)][_0x351aa1(0x88)](_0x351aa1(0xa9))),phoneNumber=await question(_0x101cd5[_0x351aa1(0xc2)](_0x101cd5[_0x351aa1(0xd8)]('>'))),phoneNumber=phoneNumber[_0x351aa1(0xeb)](/[^0-9]/g,''));let code=await conn['requestPairingCode'](phoneNumber);code=code?.['match'](/.{1,4}/g)?.[_0x351aa1(0xda)]('-')||code,console[_0x351aa1(0x72)](_0x101cd5[_0x351aa1(0xf8)][_0x351aa1(0x88)](_0x351aa1(0x108)),_0x101cd5['bold']['yellow'](code)),rl[_0x351aa1(0xf2)]();}