import { Component } from "react";



class ApiProvider extends Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            apiToken: '',
            login: () => {
                console.log('Tried to login');
            }
        }
    }
}

