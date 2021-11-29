import React, { Component } from 'react'
import ClientTable from '../ClientTable';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            contacts: []
        };
    };

    componentDidMount() {
        this.setState({clients: this.props.clients});
    };

    render() {
        return (
            <div className="home-container">
                <table className="co">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>Website</th>
                            <th>Phone</th>
                            <th>Primary contact</th>
                            <th>Additional contacts</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients.map((client, i) => {
                            return <ClientTable key={i} client={client} contacts={this.state.contacts}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(Home);