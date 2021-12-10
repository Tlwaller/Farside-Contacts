import React, { Component } from 'react'

export default class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acofDisplay: 'acof-closed',
            acofBtnDisplay: 'acof-btn-closed',
        }
    }

    toggleAcof = e => {
        e.preventDefault();
        if(this.state.acofDisplay === "acof-closed") {
            this.setState({acofDisplay: 'acof-open'})
        } else this.setState({acofDisplay: 'acof-closed'})

        if(this.state.acofBtnDisplay === "acof-btn-open") {
            this.setState({acofBtnDisplay: 'acof-btn-closed'})
        } else this.setState({acofBtnDisplay: 'acof-btn-open'})
    }

    render() {
        return (
            <div className="aclf-add-contact-form-container">
                <button className={`acof-btn ${this.state.acofBtnDisplay}`} onClick={e => this.toggleAcof(e)}>
                    Primary contact
                    <i className="fas fa-chevron-down acof-btn-arrow"/>
                    </button>
                <form className={`add-contact-form ${this.state.acofDisplay}`}>
                    <input className="acof-input" type='text' placeholder="First Name" onChange={e => this.setState({address2: e.target.value})}/>
                    <input className="acof-input" type='text' placeholder="" onChange={e => this.setState({address2: e.target.value})}/>
                    <input className="acof-input" type='text' placeholder="" onChange={e => this.setState({address2: e.target.value})}/>
                    <input className="acof-input" type='text' placeholder="" onChange={e => this.setState({address2: e.target.value})}/>
                    <input className="acof-input" type='text' placeholder="" onChange={e => this.setState({address2: e.target.value})}/>
                    <input className="acof-input" type='text' placeholder="" onChange={e => this.setState({address2: e.target.value})}/>
                </form>
            </div>
        )
    }
}
