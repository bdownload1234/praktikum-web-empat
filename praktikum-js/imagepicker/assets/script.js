function image_picker(){
    let list_foto = ["1.png", "2.png","3.png", "4.png", "5.png", "6.png"];
    let image_list = document.getElementById("image_list").value;
    for (let i in list_foto){
        if(image_list == i){
            document.getElementById("gambar").src="assets/"+list_foto[i];
            window.alert("You Select " + list_foto[i]);
        }
    }
}