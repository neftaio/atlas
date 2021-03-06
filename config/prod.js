// Base configuration
import config from './dev';

// Override configurations for Production environment
config.app.routePrefix = '/api';
// config.logs.folder = '/var/log';
// config.logs.streams = [
//     {
//         level: 'info',
//         path: config.logs.folder + 'atlas.log'
//     }
// ];
config.uploads.folder = '/uploads';
config.uploads.baseUrl = 'elparaisorojo.com/files';
config.storefront.baseUrl = 'https://elparaisorojo.com';
config.switchPayments.baseUrl = 'https://api.switchpayments.com/v2';

// Export
export default config;
