import React, { Component } from 'react'

export default class AddClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            name: 'New Client',
            address: '',
            website: '',
            phone: '',
            primaryContact: '',
            additionalContacts: ''
        };
    };

    toggleForm = e => {
        // e.preventDefault();
        if (this.state.display === 'inline') {
            this.setState({display: 'none'});
        } else this.setState({display: 'inline'})
    }

    render() {
        return (
            <div className="add-client-form-container" style={{display: this.state.display}}>
                <form>
                    <div className="acf-head">
                        <input className="acf-name" autoFocus type='text' value={this.state.name} onFocus={e => e.target.select()} onChange={e => this.setState({name: e.target.value})}/>
                        <i className="fas fa-times acf-close" onClick={this.toggleForm}/>
                    </div>
                    
                    <input className="acf-input" type='text' placeholder="address" onChange={e => this.setState({address: e.target.value})}/>
                    <input className="acf-input" type='text' placeholder="website" onChange={e => this.setState({website: e.target.value})}/>
                    <input className="acf-input" type='text' placeholder="phone" onChange={e => this.setState({phone: e.target.value})}/>
                    <input className="acf-input" type='text' placeholder="primary contact" onChange={e => this.setState({primaryContact: e.target.value})}/>
                    <input className="acf-input" type='text' placeholder="additional contacts" onChange={e => this.setState({additionalContacts: e.target.value})}/>           
                </form>
            </div>
        )
    }
}
