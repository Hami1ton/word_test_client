
const API_URL = 'http://127.0.0.1:5000/';

class ApiRequestUtil {

    static login(param = {}) {
        // this.sendGetRequest('login');
        console.log(param);
        this.sendPostRequest('login', param);
        return "logined";
    }


    private static sendGetRequest(path: string) {

        fetch(API_URL + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.status); // => 200
            return response.json();
        });
    }

    private static sendPostRequest(path: string, param = {}) {

        fetch(API_URL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(response => {
            console.log(response.status); // => 200
            return response.json();
        });
    }

}

export default ApiRequestUtil;