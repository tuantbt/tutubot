const fs = require("fs");
module.exports.config = {
	name: "khoc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "khoc",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("khoc")==0 || (event.body.indexOf("khóc")==0||(event.body.indexOf("khok")==0))) {
		var msg = {
				body: ">.<",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}