import getStats from '../redux/getFromAPI';
import instance from '../axios/axios';
import axios from 'axios';

jest.mock('../axios/axios');

test('Returns name of country', async () => {
  instance.get.mockResolvedValue({
    data: {
      dates: {
        '2020-08-31': {
          countries: {
            Spain: {
              name: 'Spain',
            },
          },
        },
      },
    },
  });
  const dispatch = () => 0;
  const name = await getStats('', dispatch);
  expect(name.name).toEqual('Spain');
});