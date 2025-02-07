// correct password
const correctPasswords = {
    "Atom": "210107",  // เปลี่ยนรหัสที่ต้องการ
    "Matchim": "091106",  // เปลี่ยนรหัสที่ต้องการ
    "kp": "291206",
    "emmey": "300750",
    "praew": "100350",
    "chale": "230649",
    "kaofang": "260649",
    "many": "051149",
    "molekul": "240849",
    "pinpaporn":"210609",
    "ploy": "174709",
    "ploythun": "250650",
    "radaa":"110350",
    "hana":"064909",
    "moey": "161006",
    "view": "274908",
    // เพิ่มเพื่อนและรหัสผ่านตามต้องการ
};

// ฟังก์ชันตรวจสอบรหัสผ่าน
function checkPassword(friendName) {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // เมื่อกรอกรหัสครบ 6 ตัว
    if (password.length === 6) {
        // เช็ครหัสผ่านกับค่าที่เก็บไว้ใน correctPasswords
        if (password === correctPasswords[friendName]) {
            document.getElementById('password-page').style.display = 'none';
            document.getElementById('friend-detail').style.display = 'block';
            document.getElementById('friend-detail').innerHTML = `
                <button class="back-button" onclick="goBack()">&larr; ย้อนกลับ</button>
                <h2>${friendName}</h2>
                <p>คำพูดที่เป็นส่วนตัว</p>
                <img src="your-image.jpg" alt="Friend Image">
            `;
            errorMessage.style.display = 'none';  // ซ่อนข้อความผิดพลาด
        }
        // ถ้ารหัสผิด
        else {
            errorMessage.textContent = 'รหัสผ่านไม่ถูกต้อง';
            errorMessage.style.display = 'Wrong Password';
        }
    }
}