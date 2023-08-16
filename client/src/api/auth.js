import axios from 'axios';

const API = 'http://localhost:8080/api'

export const registerRequest = name => axios.post(`${API}/register`, name)
