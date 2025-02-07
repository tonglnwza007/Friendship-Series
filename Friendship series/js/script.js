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

// Select profile and show password page
function selectProfile(profile) {
    document.getElementById('profileSelection').style.display = 'none';
    document.getElementById('passwordPage').style.display = 'block';
    localStorage.setItem('selectedProfile', profile);
}

// Validate password
function validatePassword() {
    const profile = localStorage.getItem('selectedProfile');
    const inputPassword = document.getElementById('password').value;
    
    if (inputPassword.length === 6) {
        if (passwords[profile] === inputPassword) {
            alert('Password correct! Redirecting...');
            window.location.href = `${profile}.html`;
        } else {
            document.getElementById('error-message').innerText = 'Incorrect password, please try again!';
        }
    }
}