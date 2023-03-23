import { rest } from 'msw';
import Config from '../../config/config.export';
import { API_URL_AUTH } from '../../pages/api/auth';

export const authHandler = [
  rest.post(
    `${Config().baseUrl}${API_URL_AUTH.REGISTER}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          Success: 'Login successfully',
          tokens: {
            refresh:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQ2MTg2OSwiaWF0IjoxNjc5Mzc1NDY5LCJqdGkiOiJkNTQzNzU4MzcyYzk0OGFiYjQwZGVhMTYyNTE1MDI2ZiIsInVzZXJfaWQiOjl9.NQStXpKJZCDU35euyGtvChZIAg1mmt8XKxrVub4QNDU',
            access:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5Mzc1NzY5LCJpYXQiOjE2NzkzNzU0NjksImp0aSI6Ijk2MDIwNGJjNTM3YTRmMzE4ODExYTE2ZmEyZWVlMzM2IiwidXNlcl9pZCI6OX0.KR_QgWLvbkFy49JpxAsvZ-NV1c3oQWcXc4_XqSpmEco',
          },
          user: {
            id: 9,
            realname: '박찬양',
          },
        }),
      );
    },
  ),
  rest.post(
    `${Config().baseUrl}${API_URL_AUTH.REFRESH}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          access:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3OTM1NTk1LCJpYXQiOjE2Nzc5MzIwNzIsImp0aSI6IjYxY2RkYzQ5NWM2MzRlNDU5MDRlMmY2NWI2ODY3MDJjIiwidXNlcl9pZCI6Mn0.4CIfpMcrVdw-JIPZvMDt33pi8QtHZTSWdpA6AIV47Xc',
        }),
      );
    },
  ),
];
