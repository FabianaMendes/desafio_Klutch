import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export function getClients() {
    return axios.get(`${API_URL}/clients`);
}

export function saveSolicitation(values) {
    return axios.post(`${API_URL}/solicitations`, values);
}