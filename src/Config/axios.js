import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk3ODA4OTIsImlhdCI6MTY2OTc3MDgxMiwibmJmIjoxNjY5NzcwODEyLCJpZGVudGl0eSI6MX0.t6Lqfh7v9fssNLiQpMfwe8DvfrFCA6xiaRw-OK3lDsI'
  }
});
