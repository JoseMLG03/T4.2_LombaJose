export function obtenerImagenDeGato() {
    return new Promise(async (resolve, reject) => {
        try {
            const select = document.getElementById('razaGato').value;
            let response = null;

        if (select === "siames") {
            response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=siam');
        }
        if (select === "bambino") {
            response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=bamb');
        }
        if (select === "bengal") {
            response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng');
        
        }
        if (select === "aleatorio") {
            response = await fetch('https://api.thecatapi.com/v1/images/search');
        }

        const data = await response.json();
        const imageUrl = data[0].url;


        resolve(imageUrl);

        } catch (error) {
            reject(new Error("No se ha podido obtener la imagen: " + error.message));
        }
    });
}

export async function mostrarImagenDeGato() {
    
    const boton = document.getElementById("botonGato");
    let ErrorMensaje = document.getElementById("errorMensaje");
        

    boton.addEventListener('click', async () => {
        try {
            const imageUrl = await obtenerImagenDeGato();
            const img = document.getElementById("GatoImagen");
            img.src = imageUrl;
            document.body.appendChild(img);

            ErrorMensaje.textContent = "";
        } catch (error) {
                
            let ErrorMensaje = document.getElementById("errorMensaje");
            ErrorMensaje.textContent = error.message;

            const img = document.getElementById("GatoImagen");
            img.src = "Assets/error.png";
            document.body.appendChild(img);
        }
    });
}
