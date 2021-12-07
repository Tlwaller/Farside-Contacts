import React, { Component } from 'react'
import ClientTable from '../ClientTable';
import { updateClients } from '../../Redux/reducers/clientReducer';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.updateClients()
    };

    render() {
        return (
            <div className="home-container">
                    <table className="co">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Address 1</th>
                            <th>Website</th>
                            <th>Phone</th>
                            <th>Primary contact</th>
                            <th>Additional contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.clients.map((client, i) => {
                            return <ClientTable key={i} client={client}/>
                        })
                    }
                    </tbody>
                <tfoot><tr><td>
                    <button className="add-client-btn">New client</button>
                </td></tr></tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clientReducer.clients
    }
}

export default connect(mapStateToProps, {updateClients})(Home);