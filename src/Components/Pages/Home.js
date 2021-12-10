import React, { Component } from 'react'
import ClientTable from '../ClientTable';
import { updateClients } from '../../Redux/reducers/clientReducer';
import { connect } from 'react-redux';
import AddClientForm from '../AddClientForm';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
    }

    componentDidMount() {
        this.props.updateClients()
    };

    toggleForm = () => {
        if (this.state.display === 'flex') {
            this.setState({display: 'none'});
        } else this.setState({display: 'flex'})
    }

    render() {
        return (
            <div className="home-container">
                <AddClientForm className='add-client-form' ref={this.ChildElement} display={this.state.display} toggleForm={this.toggleForm}/>
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
                    <button className="add-client-btn" onClick={this.toggleForm}>
                    <i className="fas fa-plus-circle"/>
                    &nbsp;Add client</button>
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