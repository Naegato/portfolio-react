import axios from 'axios';

export class Authentificate {

    constructor(url) {
        this.data = axios.get(url).then((response) => {
            this.code = response.status;
            return this.code === 200 ? response.data : null;
        })
    }

    fetchData() {
        return this.data;
    }
}