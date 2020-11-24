function kurshitung(){
    let valas = document.getElementById("valas").value;
    let kurs = [9.915, 13.472, 874, 120, 15.888, 3.592];
    let nilai = document.getElementById("nilai").value;
    let hasil = 0;
    for(let i in kurs){
        if(i == valas){
            hasil =  kurs[i] * nilai;
            document.getElementById("hasil").value=hasil;
            let textValas = document.getElementById("valas").options[i].text;
            document.getElementById("textOutput").innerHTML=nilai +" "+ textValas +" ---- "+ hasil +" rupiah";
            console.log(kurs[i]);
        }
    }
}