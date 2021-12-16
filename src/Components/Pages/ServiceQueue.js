import React, { Component } from 'react';
import ServiceQueueRow from '../ServiceQueueRow';

export default class ServiceQueue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    title: 'Create services api',
                    priority: 'High',
                    dueDate: '12/20/2021',
                    client: 'FarsideDev',
                    submitter: 'Trey Waller',
                    submitDate: '12/16/2021'
                },
                {
                    title: 'Create service info page',
                    priority: 'Medium',
                    dueDate: '12/27/2021',
                    client: 'FarsideDev',
                    submitter: 'Trey Waller',
                    submitDate: '12/16/2021'
                },
                {
                    title: 'Create service queue page',
                    priority: 'High',
                    dueDate: '12/20/2021',
                    client: 'FarsideDev',
                    submitter: 'Trey Waller',
                    submitDate: '12/16/2021'
                }
            ]
        }
    }
    render() {
        return (
            <div className='service-queue-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Due date</th>
                            <th>Client</th>
                            <th>Submitter</th>
                            <th>Submition date</th>
                        </tr>
                    </thead>
                    

                    <tbody>
                        {
                            this.state.services.map((service ,i) => {
                                return <ServiceQueueRow key={i} service={service}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
