
const API_URL = 'http://127.0.0.1:5000';

class ApiRequestUtil {

    static login(param = {}) {
        const res = this.sendPostRequest('/login', param);
        return res;
    }

    static startTest(param = {}) {
        const res = this.sendGetRequest('/takeExam');
        return res;
    }

    static submitAnswer(answers: Map<String, String>) {
        // objectに変換してサーバに送信
        console.log(answers);
        const res = this.sendPostRequest('/scoreExam', {
            answers : Object.fromEntries(answers),
        });
        return res;
    }

    private static async sendGetRequest(path: string) {

        const res = await fetch(API_URL + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
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
    }

}

export default ApiRequestUtil;