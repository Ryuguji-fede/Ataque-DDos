let NroImagen = 0
let imagenes = ["Img/Img1.jpg","Img/Img2.jpg","Img/Img3.jpg"]

const carousel = () => {
    document.getElementById('imagen').style.backgroundImage = `url(${imagenes[NroImagen]})`
    NroImagen ++

    if(NroImagen === imagenes.length) {
        NroImagen = 0
    }
    setTimeout(carousel, 3000) 
}
carousel()