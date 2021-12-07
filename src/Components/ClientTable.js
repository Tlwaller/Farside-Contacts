import React, { Component } from 'react';

export default class ClientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.client,
            contacts: this.props.contacts
        };
    };

    render() {
        const { client } = this.state;
        return (
            <tr>
                <td>{client.name}</td> 
                <td>{client.address1}</td>
                <td><a href={`${client.website}`} rel="noreferrer" target="_blank">{client.website}</a></td>
                <td><a href={`tel:${client.phone}`}>{client.phone}</a></td>
                <td>
                    {
                        client.contacts.map((contact, i) => {
                            if(contact.id === client.primaryContact){
                                return `${contact.fName} ${contact.lName}`
                            } else return null;
                        })
                    }
                </td>
                    
                <td>
                    <select>
                        {
                            client.contacts.map((contact, i) => {
                                return <option key={i}>{contact.fName + ' ' + contact.lName}</option>
                            })
                        }
                    </select>
                </td>
            </tr>
        )
    }
}
