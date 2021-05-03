export class LoginInfo {
    userId  = '';
    password  = '';

    get request() {
        return {
            userId: this.userId,
            password: this.password
        }
    }
}