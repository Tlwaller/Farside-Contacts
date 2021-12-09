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

    toggleForm = () => {
        if (this.state.display === 'flex') {
            this.setState({display: 'none'});
        } else this.setState({display: 'flex'})
    }

    render() {
        return (
            <div className="outside-click-div" onClick={e => {e.preventDefault(); this.toggleForm();}} style={{display: this.state.display}}>
                <div className="add-client-form-container" onClick={e => e.stopPropagation()}>
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
            </div>
            
        )
    }
}
