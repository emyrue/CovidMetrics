import reducer, { saveData } from '../redux/stats';

test('Action creator functions properly', () => {
  const data = {
    regions: [
      {
        id: 'madrid',
        name: 'Madrid',
        today_confirmed: 3,
        today_deaths: 1,
      },
    ],
    today_confirmed: 8,
    today_deaths: 5,
    today_intensive_care: 2,
  };
  const expected = {
    regions: [
      {
        today_confirmed: 3,
        today_deaths: 1,
        id: '/madrid',
        name: 'Madrid',
        confirmed: 3,
        deaths: 1,
      }
    ],
    confirmed: 8,
    deaths: 5,
    intensive: 2,
  };
  const action = saveData(data);
  expect(reducer(data, action)).toStrictEqual(expected);
});
