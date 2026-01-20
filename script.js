async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function login() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    
    const userHash = await sha256(username);
    const passHash = await sha256(password);

    const validUser = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
    const validPass = "7676aaafb027c825bd9abab78b234070e702752f625b752e55e55b48e607e358";

    if (userHash === validUser && passHash === validPass) {
        const finalFlag = xorDecrypt([93, 84, 65, 75, 70, 64, 124, 64, 55, 55, 99, 88, 77, 55, 101, 88, 76, 52, 52, 119, 88, 64, 55, 54, 105, 96, 122], 7);
        document.cookie = "session=" + btoa(finalFlag) + "; path=/;";
        window.location = "admin.html";
    } else {
        alert("Invalid credentials!");
    }
}

function xorDecrypt(arr, key) {
    return String.fromCharCode(...arr.map(b => b ^ key));
}
