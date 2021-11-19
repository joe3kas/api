class NoticiaService {

    constructor() {
        this.URI = `/api/v2/noticia`;
    }

    async getNoticias() {
        const response = await fetch(this.URI);    
        const noticias = await response.json();
        return noticias;
    }

    async postNoticia(noticia) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: noticia
        });
        const data = await res.json();
    }

    async deleteNoticia(noticiaId) {
        const res = await fetch(`${this.URI}/${noticiaId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default NoticiaService;