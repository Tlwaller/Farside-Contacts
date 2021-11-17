import axios from 'axios';
import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        };
    };

    componentDidMount() {
        axios.get(`http://localhost:4808/api/clients`).then(
            (res) => this.setState({clients: res.data}))
            
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
                            this.state.clients.map((client, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{client.client_name}</td> 
                                        <td>{client.address_1}</td>
                                        <td>{client.address_2}</td>
                                        <td><a href={client.website}>{client.website}</a></td>
                                        <td><a href="tel:8174881445">{client.phone}</a></td>
                                        <td>coming soon</td>
                                        <td>
                                            <select>
                                                <option>coming soon</option>
                                                <option>coming soon</option>
                                                <option>coming soon</option>
                                                </select>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                    <div className="add-client-btn">
                        <img alt="add client" src="https://img.icons8.com/material-outlined/24/000000/add.png"/>
                        <span>Add client</span>
                    </div>
                </table>
            </div>
        )
    }
}
