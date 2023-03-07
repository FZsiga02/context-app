import { Component, createContext, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

class ApiContextState {
    apiToken = '';
    currentUser? : string;
    networkError = false;
    login = async (email: string, password: string) => {};
    logout = () => {};
}

export const ApiContext = createContext(new ApiContextState());

export class ApiProvider extends Component<Props, ApiContextState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            apiToken: '',
            networkError: false,
            login: async (email, password) => {
                console.log('Tried to login');
                // fetch ...
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

