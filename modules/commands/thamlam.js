const fs = require("fs");
module.exports.config = {
	name: "tham lam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "thamlam",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chill",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tham lam")==0 || (event.body.indexOf("Tham lam")==0)) {
		var msg = {
				body: "Ngừ dì đâu mà tham lam :< ",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}