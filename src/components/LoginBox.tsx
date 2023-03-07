import { FormEvent } from "react";


export default class LoginBox {

    handleLogin = (event: FormEvent) => {
        event.preventDefault();

        // Valahogy hívjuk meg a login függvényt
    }

    render() {
        return <form onSubmit={this.handleLogin}>
            <input type ='email' /><br />
            <input type = 'password' /><br />
            <input type = 'submit' value = 'Login' />
        </form>
    }
}
