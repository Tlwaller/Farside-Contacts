import React, { Component } from 'react';

export default class ClientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.client,
            contacts: this.props.contacts,
            primaryContact: {}
        };
    };

    render() {
        const { client } = this.state;
        return (
            <tr>
                <td>{client.client_name}</td> 
                <td>{client.address_1}</td>
                <td>{client.address_2}</td>
                <td><a href={`${client.website}`} rel="noreferrer" target="_blank">{client.website}</a></td>
                <td><a href={`tel:${client.phone}`}>{client.phone}</a></td>
                <td>coming soon</td>
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
