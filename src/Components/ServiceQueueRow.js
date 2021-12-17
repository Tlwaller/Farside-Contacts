import React from 'react';
import { Link } from 'react-router-dom'

export default function ServiceQueueRow(props) {
    return (
        <tr className='service-queue-row'>
            <td><Link to='/service' className='service-link'>{props.service.title}</Link></td>
            <td><Link to={{ pathname: '/service', state: {service: props.service} }} className='service-link' >{props.service.priority}</Link></td>
            <td><Link to='/service' className='service-link'>{props.service.dueDate}</Link></td>
            <td><Link to='/service' className='service-link'>{props.service.client}</Link></td>
            <td><Link to='/service' className='service-link'>{props.service.submitter}</Link></td>
            <td><Link to='/service' className='service-link'>{props.service.submitDate}</Link></td>
        </tr>
    )
}
