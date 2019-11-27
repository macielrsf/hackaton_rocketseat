import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.dataType = 'json';
instance.defaults.headers.common.responseType = 'json';
instance.defaults.headers.post['Content-Type'] = 'application/json';

// Custom
instance.defaults.baseURL = 'https://d1d09111.ngrok.io/';

export default instance;
