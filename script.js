function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "admin" && p === "admin@123") {
        // Base64 encode flag & set cookie
        const flag = "ZSFLAG{G00d_J0b_K33p_G01ng}";
        const encoded = btoa(flag);

        document.cookie = "auth=" + encoded + "; path=/;";
        window.location = "admin.html";
    } else {
        alert("Invalid credentials!");
    }
}

