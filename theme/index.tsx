import React from 'react';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/ko_KR';
import { theme } from './theme';

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      locale={locale}
      theme={{
        token: theme,
      }}
    >
      {node}
    </ConfigProvider>
  </>
);

export default withTheme;
