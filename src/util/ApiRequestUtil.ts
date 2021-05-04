
const API_URL = 'http://127.0.0.1:5000/';

class ApiRequestUtil {

    static login(param = {}) {
        const res = this.sendPostRequest('login', param);
        return res;
    }


    private static sendGetRequest(path: string) {

        fetch(API_URL + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    private static async sendPostRequest(path: string, param = {}) {

        const res = await fetch(API_URL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        });
        const data = await res.json();
        return data;

        // fetch(API_URL + path, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(param)
        // }).then(response => {
        //     return response.json();
        // }).then( data => {
        //     console.log(data);
        // });
    }

}

export default ApiRequestUtil;