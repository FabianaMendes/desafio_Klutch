import axios from "axios";

const API_URL = "http://localhost:8080";


export function getClients() {
    return axios.get(`${API_URL}/clients`);
}

export function saveSolicitation(values) {
    return axios.post(`${API_URL}/solicitations`, values);
}