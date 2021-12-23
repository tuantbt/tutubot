module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi !");
setTimeout(() => {a({body: "Alo Alo" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: " Ra đây" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh nhanh" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn để còn hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Hiện hồn lên nàoooo" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Ra đây nhanh lên không đốt nhà bây giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra không BotSieuCube gọi nữa nè" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Um ba la a la ba trapp" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Vẫn chưa chịu xuất hiện à " + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Không ra là đốt nhà nè" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Hây da cái con người này gọi quài mệt quá" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a("Chào tạm biệt 🥺")} , 35000);


  
  }