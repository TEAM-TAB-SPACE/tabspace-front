import getConfigs from './config.common';

const baseUrl = 'http://localhost:8000/api';
const mode = 'production';

const configProduction = getConfigs({
  baseUrl,
  mode,
});

export default configProduction;
