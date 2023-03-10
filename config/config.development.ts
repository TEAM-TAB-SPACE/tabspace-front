import getConfigs from './config.common';

const baseUrl = 'http://localhost:3000/api';
const mode = 'development';

const configDevelopment = getConfigs({
  baseUrl,
  mode,
});

export default configDevelopment;
