import axios from "axios";

const initState = {
    clients: []
};

const UPDATE_CLIENTS = 'UPDATE_CLIENTS';
const ADD_CLIENT = 'ADD_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';

export function updateClients() {
    return {
        type: UPDATE_CLIENTS,
        payload:axios.get('api/clients')
    }
};

export function addClient(newClient) {
    return {
        type: ADD_CLIENT,
        payload:axios.post('/api/clients', newClient)
    }
};

export function deleteClient(clientId) {
    return {
        type: DELETE_CLIENT,
        payload:axios.delete('/api/clients', clientId)
    }
};

export function editClient(clientInfo) {
    return {
        type: EDIT_CLIENT,
        payload:axios.put('/api/clients', clientInfo)
    }
};

export default function reducer(state= initState, action) {
    const { type, payload } = action;

    switch(type) {
        case`${UPDATE_CLIENTS}_FULFILLED`:
            return {
                ...state,
                clients: payload.data
            };

        case`${ADD_CLIENT}_FULFILLED`:
        return {
            ...state,
            clients: payload.data
        };

        case`${DELETE_CLIENT}_FULFILLED`:
        return {
            ...state,
            clients: payload.data
        };

        case`${EDIT_CLIENT}_FULFILLED`:
        return {
            ...state,
            clients: payload.data
        };

        default: return state;
    }
}