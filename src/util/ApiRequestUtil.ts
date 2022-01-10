
const API_URL = 'http://127.0.0.1:5000';

class ApiRequestUtil {

    static async getExamResultList(userId: string) {
        const res = await this.sendGetRequestWithQueryParam('/examResult', {userId : userId});
        return res['examResultResponseDtoList'];
    }

    static login(param = {}) {
        const res = this.sendPostRequest('/login', param);
        return res;
    }

    static startTest(param = {}) {
        const res = this.sendGetRequest('/takeExam');
        return res;
    }

    static submitAnswer(userId: string, answers: Map<String, String>) {
        // objectに変換してサーバに送信
        const res = this.sendPostRequest('/scoreExam', {
            userId : userId,
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

    private static async sendGetRequestWithQueryParam(path: string, params = {}) {

        const qs = new URLSearchParams(params);
        const res = await fetch(API_URL + path + `?${qs}`, {
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