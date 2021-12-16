import React, { Component } from 'react';

export default class ClientTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.client,
            contacts: this.props.contacts,
            display: 'closed'
        };
    };

    toggleOptions = () => {
        if(this.state.display === 'closed') {
            this.setState({display: 'open'})
        } else this.setState({display: 'closed'})
    }

    render() {
        const { client } = this.state;
        return (
            <tr className="client-table-row">
                <td>
                <div className="ct-options-btn" onClick={this.toggleOptions}>
                    <i className="fas fa-ellipsis-v"/>
                </div>
                <div onClick={e => {e.preventDefault(); this.toggleOptions()}} className={`outside-click-div-${this.state.display}`}>
                </div>

                    <ul className={`ct-options cto-${this.state.display}`}>
                        <li className='ct-option'>Add note</li>
                        <li className='ct-option'>Add contacts</li>
                        <li className='ct-option'>Edit client</li>
                        <li className='ct-option'>Delete client</li>
                    </ul>
                </td>
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