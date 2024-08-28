import axios from 'axios';

export const axiosCall = async (reqConfig, optionalConfig) => {
    const config = { ...reqConfig, ...optionalConfig }
    return axios(config)
}
