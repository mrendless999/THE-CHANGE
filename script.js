function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "admin" && p === "admin@123") {
        const code = "WlNGTEFHe0cwMGRfSjBiX0szM3BfRzAxbmd9";
        const encoded = btoa(code);

        document.cookie = "auth=" + encoded + "; path=/;";
        window.location = "admin.html";
    } else {
        alert("Invalid credentials!");
    }
}

