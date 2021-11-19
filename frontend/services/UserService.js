class UserService {

    constructor() {
        this.URI = `/api/v2/user`;
    }

    async getUsers() {
        const response = await fetch(this.URI);    
        const users = await response.json();
        return users;
    }

    async postUser(user) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: user
        });
        const data = await res.json();
    }

    async deleteUser(userId) {
        const res = await fetch(`${this.URI}/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default UserService;