module.exports.config = {
	name: "cus",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thông tin Cus Clan",
	commandCategory: "custom",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin Cus Clan:
🔊 Custom ra mắt clan BORN TO DIE 🎉
Vào ngày:9/1
Người tài trợ : Co-leader Tiến Sói và người dưng ʚBéBòSữaɞ thiểu năng :3
🐣Với sự tham gia của : BORN TO DIE +  team khách mời +các team đăng kí

🔊 Caster : Sói bé tí
Tính điểm theo hệ thống PMPL mới nhất( Top1-15 điểm)
------------------------------
Thể thức  SQUAD -TPP (1round )
⏰  20H có id - 20H10 bay

+2 ROUND : Map E + M

🎁  Giải thưởng:
ROUND 1 : 20H có id -20H10 ✈️ 
🥇Top 1: 150.000 VNĐ+ full gà / round
🥈 Top 2: 100.000 VNĐ +full gà  / round 
ROUND 2 : có id sau 5p hết R2
🥇Top 1: 150.000 VNĐ+ full gà / round
🥈 Top 2: 100.000 VNĐ +full gà  / round 
---------------------------------
🆘Các yêu cầu giải đấu:
👉Only mobile, ipad ( nói không với PC ) 
👉 Thành viên thi đấu sử dụng acc từ lv 40 trở lên , 4/4,3/3nametag 
❌ Không ngồi STT team khác
 ❌Không huỷ slot , bỏ round sau 18H. Không thi đấu 2/4,1/4 tv ( = bỏ round )
❌Không bắn thính vàng
❌Không teamup, bypass, sử dụng pmt3, phụ kiện… 
❌Không mic tổng, không gây war
❌ Không được sử dụng m249
✅ Được loot full thính đỏ 
💢 Phạt 50.000VNĐ/round nếu vi phạm các lỗi trên`, event.threadID, event.messageID);