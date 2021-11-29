import axios from 'axios';
import React, { Component } from 'react';
import dots from '../Images/dots.png';

export default class ClientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.client,
            contacts: this.props.contacts
        };
    };

    removeClient = () => {
        axios({
            method: 'delete',
            url: 'http://localhost:4808/api/clients',
            data: {
                client_id: this.state.client.client_id
            }
        });
    };

    render() {
        const { client } = this.state;
        return (
            <tr>
                <td>
                    <img src={dots} alt='client options' height='25px'/>
                </td>
                <td>{client.client_name}</td> 
                <td>{client.address_1}</td>
                <td>{client.address_2}</td>
                <td><a href={`${client.website}`} rel="noreferrer" target="_blank">{client.website}</a></td>
                <td><a href={`tel:${client.phone}`}>{client.phone}</a></td>
                <td>
                    {
                        this.state.contacts.map((contact, i) => {
                            if(contact.primary_contact === true && contact.client_id === this.state.client.client_id) {
                                return <span>{contact.contact_name}</span>
                            } else return null;
                        })
                    }
                    </td>
                <td>
                    <select>
                        {
                            this.props.contacts.map((contact, i) => {
                                if(contact.client_id === this.state.client.client_id) {
                                    return <option key={i}>{contact.contact_name}</option>
                                } else return null;
                            })
                        }
                    </select>
                </td>
            </tr>
        )
    }
}
