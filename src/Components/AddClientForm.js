import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addClient } from '../Redux/reducers/clientReducer';

class AddClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acofDisplay: 'acof-closed',
            acofBtnDisplay: 'acof-btn-closed',
            iconDisplay: 'fas fa-plus-circle',
            name: '',
            address1: '',
            address2: '',
            website: '',
            phone: '',
            contact: {
                fName: '',
                lName: '',
                address1: '',
                address2: '',
                email: '',
                phone: ''
            },
            contacts: []
        };
    };

    componentDidMount(){
        console.log(this.props.userId)
    }

    toggleAcof = e => {
        e.preventDefault();
        if(this.state.acofDisplay === "acof-closed") {
            this.setState({
                acofDisplay: 'acof-open',
                acofBtnDisplay: 'acof-btn-open',
                iconDisplay: 'fas fa-chevron-up'
        })
        } else this.setState({
            acofDisplay: 'acof-closed',
            acofBtnDisplay: 'acof-btn-closed',
            iconDisplay: 'fas fa-plus-circle'
        })

        if(this.state.acofBtnDisplay === "acof-btn-open") {
            this.setState({acofBtnDisplay: 'acof-btn-closed'})
        } else this.setState({acofBtnDisplay: 'acof-btn-open'})
    }

    addContact = e => {
        e.preventDefault();
        this.setState({
            contacts: [...this.state.contacts, this.state.contact],
            contact: {
                fName: '',
                lName: '',
                address1: '',
                address2: '',
                email: '',
                phone: ''
            }
        })
    }

    handleSubmit = () => {
        const { name, address1, address2, website, phone, contacts } = this.state;
        addClient({ name, address1, address2, website, phone, contacts }).then(this.props.toggleForm);
    }

    render() {
        const { contact } = this.state;
        return (
            <div className="outside-click-div" onClick={e => this.props.toggleForm()} style={{display: this.props.display}}>
                <div className="add-client-form-container" onClick={e => e.stopPropagation()}>
                    <form>
                        <div className="aclf-head">
                            <input className="aclf-name" type='text' placeholder="New client" onChange={e => this.setState({name: e.target.value})}/>
                            <div className="aclf-close-container">
                                <i className="fas fa-times aclf-close" onClick={this.props.toggleForm}/>
                            </div>
                        </div>
                        
                        <input className="aclf-input" type='text' placeholder="Address" onChange={e => this.setState({address1: e.target.value})}/>
                        <input className="aclf-input" type='text' placeholder="Secondary address" onChange={e => this.setState({address2: e.target.value})}/>
                        <input className="aclf-input" type='text' placeholder="Website" onChange={e => this.setState({website: e.target.value})}/>
                        <input className="aclf-input" type='text' placeholder="Phone" onChange={e => this.setState({phone: e.target.value})}/>

                        <div className="aclf-add-contact-form-container">
                            <button className={`acof-btn ${this.state.acofBtnDisplay}`} onClick={e => this.toggleAcof(e)}>
                                Contacts
                                <i className={`acof-icon ${this.state.iconDisplay}`}/>
                                </button>
                            <div className={`add-contact-form ${this.state.acofDisplay}`}>
                                <input className="acof-input" type='text' value={contact.fName}placeholder="First name" onChange={e => this.setState({contact: {...contact, fName: e.target.value}})}/>
                                <input className="acof-input" type='text' value={contact.lName}placeholder="Last name" onChange={e => this.setState({contact: {...contact, lName: e.target.value} })}/>
                                <input className="acof-input" type='text' value={contact.address1}placeholder="Address" onChange={e => this.setState({contact: {...contact, address1: e.target.value} })}/>
                                <input className="acof-input" type='text' value={contact.address2}placeholder="Secondary address" onChange={e => this.setState({contact: {...contact, address2: e.target.value} })}/>
                                <input className="acof-input" type='text' value={contact.email}placeholder="Email" onChange={e => this.setState({contact: {...contact, email: e.target.value} })}/>
                                <input className="acof-input" type='text' value={contact.phone}placeholder="Phone" onChange={e => this.setState({contact: {...contact, phone: e.target.value} })}/>

                                <input className="acof-submit" type="submit" value=" + Add contact" onClick={e => this.addContact(e)}/>
                            </div>

                        </div>

                        <input className="aclf-submit" type='submit' onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        clientId: reduxState.clientReducer.id,
        userId: reduxState.userReducer.userIdc
    }
}

export default connect(mapStateToProps, {addClient})(AddClientForm);