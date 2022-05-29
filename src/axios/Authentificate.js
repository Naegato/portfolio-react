import axios from 'axios';

export class Authentificate {

    constructor(url) {
        this.data = axios.get(url , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then((response) => {
            this.code = response.status;
            return this.code === 200 ? response.data : null;
        })
    }

    fetchAll() {
        return this.data;
    }
}