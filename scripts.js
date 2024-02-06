export async function obtenerImagenDeGato() {
    try{
    const select = document.getElementById('razaGato').value; 
    let response = null; 

    if (select === "siames") { 
        response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=siam');
    }
    if(select === "bambino"){
        response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=bamb');
    }
    if (select === "bengal") {
        response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng');
    }
    if(select === "aleatorio"){
        response = await fetch('https://api.thecatapi.com/v1/images/search');
    }

    const data = await response.json(); 
    const imageUrl = data[0].url; 

    return imageUrl; 
    
    } catch (error) {
        return "Assets/error.png";
    }
}

export async function mostrarImagenDeGato() {
    try {

        const boton = document.getElementById('botonGato')

        boton.addEventListener('click', async () => { 
            const imageUrl = await obtenerImagenDeGato();
            const img = document.getElementById('GatoImagen');
            img.src = imageUrl;
            document.body.appendChild(img);
        });

    } catch (error) {
        document.body.appendChild(img);
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Error';
        document.body.appendChild(errorElement);
    }
}
