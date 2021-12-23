const fs = require("fs");
module.exports.config = {
	name: "logo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "TuTu", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "BTD",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("logo")==0 || (event.body.indexOf("Logo")==0)) {
		var msg = {
				body: "Clan BDT Chất Lừ :33",
				attachment: fs.createReadStream(__dirname + `/noprefix/logogg.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}