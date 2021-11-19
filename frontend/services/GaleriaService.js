class GaleriaService {

    constructor() {
        this.URI = `/api/v2/galeria`;
    }

    async getGalerias() {
        const response = await fetch(this.URI);    
        const galerias = await response.json();
        return galerias;
    }

    async postGaleria(galeria) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: galeria
        });
        const data = await res.json();
    }

    async deleteGaleria(galeriaId) {
        const res = await fetch(`${this.URI}/${galeriaId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default GaleriaService;