import axios from 'axios';
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';
import axiosRetry from 'axios-retry';

const httpAgent = new HttpAgent({
  keepAlive: false,
  keepAliveMsecs: 30000,
  maxSockets: 10,
  maxFreeSockets: 10,
  timeout: 120000
});

const httpsAgent = new HttpsAgent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 10,
  maxFreeSockets: 10,
  timeout: 120000
});

const axiosInstance = axios.create({
  httpAgent,
  httpsAgent,
  headers: { 'Accept-Encoding': 'gzip' }
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  }
});

export default axiosInstance;
