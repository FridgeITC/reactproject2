import axios from 'axios';

export default axios.create({
  baseURL: 'http://54.86.23.107:8080',
  headers: {
    accept: 'application/json',
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk2MjE1MTIsImlhdCI6MTY2OTYxMTQzMiwibmJmIjoxNjY5NjExNDMyLCJpZGVudGl0eSI6MX0.2JZMzbMBmZQ9rTzmDHRes-xGL4_xJxkps9z-mLy1nxc'
  }
});
