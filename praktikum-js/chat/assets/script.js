function chat() {
    let pesan = document.getElementById("pesan").value;
    document.getElementById("box").innerHTML += "<p class='isi'>" + pesan + "</p>";
    document.getElementById("pesan").value = "";
}