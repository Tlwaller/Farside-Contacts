import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addClient } from '../Redux/reducers/clientReducer';

class AddClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'New Client',
            address1: '',
            address2: '',
            website: '',
            phone: '',
            primaryContact: '',
            additionalContacts: ''
        };
    };

    handleSubmit = () => {
        const { name, address1, address2, website, phone, primaryContact, additionalContacts } = this.state;
        addClient({ name, address1, address2, website, phone, primaryContact, additionalContacts }).then(this.props.toggleForm);
    }

    render() {
        return (
            <div className="outside-click-div" onClick={e => {e.preventDefault(); this.props.toggleForm();}} style={{display: this.props.display}}>
                <div className="add-client-form-container" onClick={e => e.stopPropagation()}>
                    <form>
                        <div className="acf-head">
                            <input className="acf-name" autoFocus type='text' value={this.state.name} onFocus={e => e.target.select()} onChange={e => this.setState({name: e.target.value})}/>
                            <i className="fas fa-times acf-close" onClick={this.props.toggleForm}/>
                        </div>
                        
                        <input className="acf-input" type='text' placeholder="primary address" onChange={e => this.setState({address1: e.target.value})}/>
                        <input className="acf-input" type='text' placeholder="secondary address" onChange={e => this.setState({address2: e.target.value})}/>
                        <input className="acf-input" type='text' placeholder="website" onChange={e => this.setState({website: e.target.value})}/>
                        <input className="acf-input" type='text' placeholder="phone" onChange={e => this.setState({phone: e.target.value})}/>
                        <input className="acf-input" type='text' placeholder="primary contact" onChange={e => this.setState({primaryContact: e.target.value})}/>
                        <input className="acf-input" type='text' placeholder="additional contacts" onChange={e => this.setState({additionalContacts: e.target.value})}/>           

                        <input className="acf-submit" type='submit' onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        id: reduxState.clientReducer.id
    }
}

export default connect(mapStateToProps, {addClient})(AddClientForm);