import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MDU1NTQsImlhdCI6MTY2OTc5NTQ3NCwibmJmIjoxNjY5Nzk1NDc0LCJpZGVudGl0eSI6MX0.Gwn7q98ZLpKKNwIEdChqg0Ws_NObIS-KeMWsNlDYMEM'
  }
});
