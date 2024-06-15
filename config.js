const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Sylivanu/s-ilva";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/751eef74109e0e5c8916c.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_16_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtZSE9xR2hJMzRwTzF6bzlQM3Vtd29DcnE5YllqTHV5aDI0dXZYTU5XbjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFOOTVKREJVVHl5dnFaaVBZQ0tWVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjNiNDg0MDUtN2YwNC00ZTVmLTliYzItMDE4MDA5M2E2NzM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTcxLFxuICAgICAgMjA0LFxuICAgICAgMTIzLFxuICAgICAgMzIsXG4gICAgICAxMzgsXG4gICAgICAxMzgsXG4gICAgICAxMDUsXG4gICAgICA2MixcbiAgICAgIDEzMixcbiAgICAgIDgwLFxuICAgICAgMTQ0LFxuICAgICAgMjEyLFxuICAgICAgNjIsXG4gICAgICA5NyxcbiAgICAgIDE5MixcbiAgICAgIDE1NyxcbiAgICAgIDIwNixcbiAgICAgIDE4NSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgOTQsXG4gICAgICA1NSxcbiAgICAgIDI4LFxuICAgICAgMTU4LFxuICAgICAgMjMzLFxuICAgICAgMTg3LFxuICAgICAgNDQsXG4gICAgICAxMTEsXG4gICAgICAyMDgsXG4gICAgICAzLFxuICAgICAgMTM3LFxuICAgICAgMTg0LFxuICAgICAgNjcsXG4gICAgICA4NixcbiAgICAgIDExNixcbiAgICAgIDM2LFxuICAgICAgMTk2LFxuICAgICAgODQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkVMOFFQMzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMzUzNDMwNTo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1pY2hhZWwgT2J3b2dlXCIsXG4gICAgXCJsaWRcIjogXCI5MTAxMDg0MzU2MTk5MDo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWDkzK1lDRU5EZ3RyTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ4RStyamExbmNFTUJ4UWx4b0t0bnBtckZxY2c5M3c5OUkyUkdHQ0dCQ3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEZJWDF1R1FXRlM5c0piUmNhbVlqYmJwVXpieU81WW1PNEM0Nm5BbW5VRlVKR2ZyZGlsVlFjcFovblNXTmhHdDFkTkpCRXNaRC9XbkIxY2FwbkJKQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2pVUWsxWEFMRkNKU2pTbFVjd3VqWFAzQ3VvYlY5UHlqOFh3bjJlSGhQczEzVXMwWk5RRE13eFRIcmZvaDQrVzVZS2VQZWlla0h3TkZBMFlnaEpJQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAzNTM0MzA1OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ2NDU5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU56OVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTno5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibzF4Zk14WEVvejMzbFEyVThubnRaeUlvMEJ6QkJwS215dnRiKzJLU3RXdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTIzNTI5OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU5NTA4NDU3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's silva",


  errorChat : process.env.ERROR_CHAT || "254700143167",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZEROTWO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
