import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    'Content-type': 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk2MTc0NjcsImlhdCI6MTY2OTYwNzM4NywibmJmIjoxNjY5NjA3Mzg3LCJpZGVudGl0eSI6MX0.1jYDBYjpMlrIyAKdR27QHQxjXYlRd30zt-SR3arInf0'
  }
});
