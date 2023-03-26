// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace ICommonConfig {
  export type Mode = 'development' | 'production';

  export interface Params {
    baseUrl: string;
    mode: Mode;
  }
}

export default function getConfigs(params: ICommonConfig.Params) {
  const { baseUrl, mode } = params;

  return {
    baseUrl,
    mode,

    api: {},
  };
}
