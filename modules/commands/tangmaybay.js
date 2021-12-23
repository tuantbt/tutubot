const fs = require("fs");
module.exports.config = {
	name: "tặng máy bay",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "maybay",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chill",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tặng máy bay")==0 || (event.body.indexOf("Tặng máy bay")==0)) {
		var msg = {
				body: "Tặng cho bạn chiếc máy bayy nèe :vv",
				attachment: fs.createReadStream(__dirname + `/noprefix/maybay.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}