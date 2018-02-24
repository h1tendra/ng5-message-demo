/**
 * Project wise config
 * @type {{API_ENDPOINT: string; POLLING_INTERVAL: number; OVERRIDE_SERVER_EXPIRE_TIME: boolean}}
 */
export const config: any = {
  API_ENDPOINT: 'http://localhost:3000/assets/api/',
  POLLING_INTERVAL: 1000 * 5, // In Milliseconds
  OVERRIDE_SERVER_EXPIRE_TIME: true, // set it to false if you want to use expire time from server
};
