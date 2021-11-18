import React, { Component } from 'react'
import axios from 'axios';
import ClientTable from '../ClientTable';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            contacts: []
        };
    };

    componentDidMount() {
        axios.get(`http://localhost:4808/api/clients`).then(
            (res) => this.setState({clients: res.data}));
        
        axios.get(`http://localhost:4808/api/contacts`).then(
            (res) => this.setState({contacts: res.data}));
    };
    render() {
        return (
            <div className="home-container">
                <table className="co">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>Website</th>
                            <th>Phone</th>
                            <th>Primary contact</th>
                            <th>Additional contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients.map((client, i) => {
                            return <ClientTable key={i} client={client} contacts={this.state.contacts}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
