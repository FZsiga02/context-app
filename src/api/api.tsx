import { Component, createContext, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

class ApiContextState {
    apiToken = '';
    currentUser? : string;
    login = () => {};
    logout = () => {};
}

export const ApiContext = createContext(new ApiContextState());

export class ApiProvider extends Component<Props, ApiContextState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            apiToken: '',
            login: () => {
                console.log('Tried to login');
                this.setState({
                    currentUser: 'Test User',
                })
            },
            logout: () => {
                this.setState({
                    currentUser: undefined,
                })
            }
        }
    }

    render() {
        return <ApiContext.Provider value={this.state}>

        { this.props.children }

        </ApiContext.Provider>
        
        
    }
}

