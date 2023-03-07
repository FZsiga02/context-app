import { Component, ContextType, FormEvent } from "react";
import { ApiContext } from "../api/api";


export default class LoginBox extends Component{

    static contextType = ApiContext;
    context!: ContextType<typeof ApiContext>

    // TODO: state-be az email, jelszó

    handleLogin = (event: FormEvent) => {
        event.preventDefault();

        // TODO: login()-nek state paraméter
        this.context.login('testuser', 'testpass');

        // Valahogy hívjuk meg a login függvényt
    }

    handleLogout = () => {
        this.context.logout();
    }

    render() {
        if (this.context.currentUser) {
            return <p>
                Welcome, {this.context.currentUser}!<br />
                <button onClick={this.handleLogout}>Logout</button>
            </p>
        }
        return <form onSubmit={this.handleLogin}>
            <input type ='email' /><br />
            <input type = 'password' /><br />
            <input type = 'submit' value = 'Login' />
        </form>
    }
}
