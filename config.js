const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴᴏᴊ-xᴅ²²¹-ᴍᴅ" 


global.devs = "917005439105" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917005439105";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpNcStRT1d4QUJFM0RyaThZZnlDTWZWUlVlNi9wejIybU9iVTlSMHNEQ1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDA1NDM5MTA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDk5QkZFQUI2MDJFRkEyMkM1NTQ1NDVDNTgzMDU3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNzE5MTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSS05dnhsbldUTWVFVE9yemtIWnFXUVwiLFxuICBcInBob25lSWRcIjogXCJhYWNjZWRmZC02NWQ1LTQzNzMtODg5My05MjAzOTIwOGM3NjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTQ3LFxuICAgICAgMjAyLFxuICAgICAgMjMzLFxuICAgICAgMjE3LFxuICAgICAgODQsXG4gICAgICAxMTYsXG4gICAgICA3MyxcbiAgICAgIDExNSxcbiAgICAgIDAsXG4gICAgICAxMTAsXG4gICAgICAzOCxcbiAgICAgIDI1NCxcbiAgICAgIDAsXG4gICAgICAyMzAsXG4gICAgICAxMDgsXG4gICAgICAxNTQsXG4gICAgICAxNjEsXG4gICAgICAxMzUsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxMjMsXG4gICAgICAxNTEsXG4gICAgICA0MSxcbiAgICAgIDIxNCxcbiAgICAgIDE0MixcbiAgICAgIDExOSxcbiAgICAgIDExNixcbiAgICAgIDQ4LFxuICAgICAgNTksXG4gICAgICAyMjUsXG4gICAgICAyNTEsXG4gICAgICAyNTIsXG4gICAgICAxODksXG4gICAgICAyNCxcbiAgICAgIDI0NSxcbiAgICAgIDIyMSxcbiAgICAgIDE5MixcbiAgICAgIDE1NCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUU42NjQyRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3MDA1NDM5MTA1OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQ0MTQ2NjI1MTI3OTY6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSi9Wb0tJQkVNZVZxN1FHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiL0pENCtWVFFHQ2ViZUE2NkRKU1JScW5mTUs1c0o3TC9tTTJITlZPVmpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks4dXFnYUQrMDZLdFprNk9mcVdjWGhxSjQ5VGtoRElLYW5kMnNNbkVaRndwbHFkdWpldTdLcXo5U2lZUE5FdDhmMHRjZ2doV1FEVWJXSnpxVWwza0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJhay9TZDJqTGIvbFgydkFEcWNoVGpwWkZQZDUxeEN4QUNZaE1NTllTRXhEUkFja2tjNUxPT3ExRnhCV25uZTAxcGpUR3VKajRGbjlpd1pzeUdrTGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAwNTQzOTEwNToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM3MTkxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxaR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFpHLmpzb24iOiAie1wia2V5RGF0YVwiOlwic2IrWFVkZHpSZERZd3ozM0xyNENVaEpsNWY4aDVGNElCVzFNRHF6SmRNOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDAyNzM4MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴᴏᴊ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴀɴᴏᴊ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ᴍᴀɴᴏᴊ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
