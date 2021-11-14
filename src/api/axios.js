import axios from 'axios';

//creating the baseURL to not copy paste the url of the website over and over while fetching data
const instance = axios.create({
    baseURL: 'http://api.genshin.dev',
})

export default instance;