// apiBaseService.interceptors.request.use(
//     (config) => {
// add token to request here
// if (config.url !== 'token') {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`
//     } else {
//         throw Error('Invalid request')
//     }
// }
// return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );