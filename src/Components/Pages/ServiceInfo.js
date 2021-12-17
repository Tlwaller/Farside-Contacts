import React, { Component } from 'react'

export default class ServiceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            priority: '',
            dueDate: '',
            client: '',
            submitter: '',
            submitDate: '' }
    }

    componentDidMount = () => {
        if(this.props.location.state) {
            this.setState(this.props.location.state.service);
        } else alert('No service to view.')
    }

    render() {
        const { title, priority, dueDate, client, submitter, submitDate } = this.state;
        return (
            <div className='window-container'>
                <form className='service-info-window'>
                    <div className='si-head'>
                        <input className='si-title head-input' value={title}/>
                        <div className='si-due-date'>
                            <i className="fas fa-calendar-day"/>
                            <input className='si-due-date-input' value={dueDate}/>
                        </div>
                        <button className='si-priority-btn'>{priority}</button>
                    </div>
                    <label>
                        <input className='si-input' value={client}/>
                    </label>
                    <div className='si-submission-info'>
                        <label>
                            Submitted by:
                            <input className='si-input' value={submitter}/>
                        </label>
                        <label>
                            On:&nbsp;
                            <input className='si-input' value={submitDate}/>
                        </label>
                    </div>
                    
                </form>
            </div>
        )
    }
}
