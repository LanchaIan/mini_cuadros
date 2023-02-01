function cambiar(){
    let url = document.location.href;
    let params = url.split('?')[1].split('&');
    let data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    foto = data.name;
    foto = "imagenes/" + foto + ".jpg";
    document.getElementById("imagen").src=foto;
}

function mod_url(foto){
    url = 'img_completa.html?name=' + encodeURIComponent(foto);
    document.location.href = url;
}
