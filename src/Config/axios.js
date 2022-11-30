import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MzE3MTIsImlhdCI6MTY2OTgyMTYzMiwibmJmIjoxNjY5ODIxNjMyLCJpZGVudGl0eSI6MX0.vkJ-ALGKAsz5gZn4_r3Rtp6lyyjFzFeInF_Nth7LALA'
  }
});
