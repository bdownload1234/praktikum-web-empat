function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user == "hoeruuu" && pass == "spitfire") {
        window.alert("login sukses");
        window.location.href ="dashboard.html";
    } else {
        window.alert("login gagal");
    }
}