﻿module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`>> ${global.config.PREFIX} << • ${(!global.config.BOTNAME) ? "Xin chào mình là BOT. Gõ .help để xem all lệnh" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Xin chào mình là BOT . Gõ .help để xem all lệnh"`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path,`hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝕮𝖍à𝖔 𝕸ừ𝖓𝖌 𝕰𝖒 𝖄ê𝖚 {name}.\n 𝕥ớ𝕚 𝕧ớ𝕚 𝕟𝕙ó𝕞 {threadName}.\n{type} 𝕝à 𝕖𝕞 𝕚𝕦 𝕥𝕙ứ {soThanhVien} 𝕔ủ𝕒 𝔹𝕆𝕋 🥲 \n\n Giới thiệu lại sơ lược cho tvm . mình là BTDxChanhɞ co-leader của clan , tuy là Chanh nhưng mà Chanh ko chua lắm :)) , sinh năm 203 nhưng mà ở Nha Trang . Tình trạng hôn nhân đang trong thời gian tìm hiểu :3 . Rất chào mừng các bạn đã đến với clan mình 🤭 , nếu các bạn ở lâu dài các bạn sẽ đón nhận sự thiểu năng và bắn ngu của mình 🥲 . Mong tvm ko xa lánh bé Chanh này ❤️" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}