function form_validation(){
    let styleBorderPass = "2px solid #55efc4";
    let styleBorderError = "2px solid #ff7675";
    let nama = document.getElementById("nama_pelanggan");
    let np = document.getElementById("np");
    if (nama.value == "") {
        np.innerHTML = "* Nama Pelanggan tidak boleh kosong";
        nama.style.border =styleBorderError;
    }else if (nama.value.length > 30) {
        np.innerHTML = "* Nama Pelanggan maksimal 30 karakter";
        nama.style.border =styleBorderError;
    }else{
        np.innerHTML = "";
        nama.style.border =styleBorderPass;
    }


    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById("email");
    let pEmail = document.getElementById("pesanEmail");
    if (email.value == "") {
        pEmail.innerHTML = "* Email tidak boleh kosong";
        email.style.border =styleBorderError;
    } else if (!reEmail.test(String(email.value).toLowerCase())) {
        pEmail.innerHTML = "* Harus format email";
        email.style.border =styleBorderError;
    }else{
        pEmail.innerHTML = "";
        email.style.border =styleBorderPass;
    }


    const reTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    let jam = document.getElementById("jam");
    let pesanJam = document.getElementById("pesanJam")
    if (jam.value == "") {
        pesanJam.innerHTML = "* Jam tidak boleh kosong";
        jam.style.border =styleBorderError;
    }else if (!reTime.test(jam.value)){
        pesanJam.innerHTML = "* Format jam antara 00:00 - 23:59";
        jam.style.border =styleBorderError;
    }else{
        pesanJam.innerHTML = "";   
        jam.style.border =styleBorderPass;
    }


    let tujuan = document.getElementById("tujuan");
    let pesanTujuan = document.getElementById("pesanTujuan");
    if (tujuan.value == ""){
        pesanTujuan.innerHTML = "* Tujuan tidak boleh kosong";
        tujuan.style.border =styleBorderError;
    }else{
        pesanTujuan.innerHTML = "";
        tujuan.style.border =styleBorderPass;
    }

    let jml = document.getElementById("jumlah");
    let pesanJumlah = document.getElementById("pesanJumlah");
    if (jml.value == ""){
        pesanJumlah.innerHTML = "* Jumlah tiket tidak boleh kosong";
        jml.style.border =styleBorderError;
    }else if (!(jml.value >= 1 && jml.value <=10)){
        pesanJumlah.innerHTML = "* Jumlah tiket antara 1 - 10";
        jml.style.border =styleBorderError;
    }else{
        pesanJumlah.innerHTML = "";
        jml.style.border =styleBorderPass;
    }
}
