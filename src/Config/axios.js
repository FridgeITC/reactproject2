import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization: localStorage.getItem('jwt-token')
  }
});
