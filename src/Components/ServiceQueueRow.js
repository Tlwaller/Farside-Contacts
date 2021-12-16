import React from 'react'

export default function ServiceQueueRow(props) {
    return (
        <tr>
            <td>{props.service.title}</td>
            <td>{props.service.priority}</td>
            <td>{props.service.dueDate}</td>
            <td>{props.service.client}</td>
            <td>{props.service.submitter}</td>
            <td>{props.service.submitDate}</td>
        </tr>
    )
}
