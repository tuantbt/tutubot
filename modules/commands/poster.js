const fs = require("fs");
module.exports.config = {
	name: "poster",
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
	if (event.body.indexOf("poster")==0 || (event.body.indexOf("Poster")==0)) {
		var msg = {
				body: "Clan BDT mãi đỉnhhhh :33",
				attachment: fs.createReadStream(__dirname + `/noprefix/BTD.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}