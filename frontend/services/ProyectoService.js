class ProyectoService {

    constructor() {
        this.URI = `/api/v2/proyecto`;
    }

    async getProyectos() {
        const response = await fetch(this.URI);    
        const proyectos = await response.json();
        return proyectos;
    }

    async postProyecto(proyecto) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: proyecto
        });
        const data = await res.json();
    }

    async deleteProyecto(proyectoId) {
        const res = await fetch(`${this.URI}/${proyectoId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default ProyectoService;