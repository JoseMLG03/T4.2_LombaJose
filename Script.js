export async function obtenerImagenDeGato() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      
      if (!response.ok) {
        throw new Error('La solicitud a la API de TheCatAPI falló. Estado: ' + response.status);
      }
      
      const data = await response.json();
      
      const imageUrl = data[0].url;
      
      return imageUrl;
    } catch (error) {
      throw new Error('Error al hacer la solicitud a la API de TheCatAPI: ' + error.message);
    }
  }
  
export async function mostrarImagenDeGato() {
try {
    const imageUrl = await obtenerImagenDeGato();
      
    const img = document.createElement('img');
      
    img.src = imageUrl;
      
    document.body.appendChild(img);
} catch (error) {
    console.error(error.message);
    }
}