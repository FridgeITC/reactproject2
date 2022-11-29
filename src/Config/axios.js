import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk3NzM3NjUsImlhdCI6MTY2OTc2MzY4NSwibmJmIjoxNjY5NzYzNjg1LCJpZGVudGl0eSI6MX0.gSisy4Qk6aSu_TMSH6P0fOg9NY3tAMXk7kZ68JmdKes'
  }
});
