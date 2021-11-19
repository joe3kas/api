class CuadroService {

    constructor() {
        this.URI = `/api/v2/cuadro`;
    }

    async getCuadros() {
        const response = await fetch(this.URI);    
        const cuadros = await response.json();
        return cuadros;
    }

    async postCuadro(cuadro) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: cuadro
        });
        const data = await res.json();
    }

    async deleteCuadro(cuadroId) {
        const res = await fetch(`${this.URI}/${cuadroId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default CuadroService;