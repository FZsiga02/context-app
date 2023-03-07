import { Component, createContext, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

class ApiContextState {
    apiToken = '';
    login = () => {};
}

export const ApiContext = createContext(new ApiContextState());

export class ApiProvider extends Component<Props, ApiContextState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            apiToken: '',
            login: () => {
                console.log('Tried to login');
            }
        }
    }

    render() {
        return <ApiContext.Provider value={this.state}>

        { this.props.children }

        </ApiContext.Provider>
        
        
    }
}

