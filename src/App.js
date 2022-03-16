import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            user: {},
        };
    }
    componentDidMount() {
        const messages = [
            {
                "text":"Lorem",
                "id": "1",
                "sender": {
                    "name": "Aadu",
                    "uid": "user1",
                },
            },

        ];
        const user = {
            "uid": "user1"
        };
        this.setState({messages: messages, user: user});
    }

render () {
    return (
        <div className="App">
            <header className="App-header">VOCO</header>

            <Container className="Text-area">
                <App messages={this.state.messsages}/>
            </Container>
        </div>
        )
    }
}

export default App;
