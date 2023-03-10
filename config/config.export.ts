import configDevelopment from './config.development';
import configProduction from './config.production';

const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case 'development':
      return configDevelopment;
    default:
      return configProduction;
  }
};

export default Config;
