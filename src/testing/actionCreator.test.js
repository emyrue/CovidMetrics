import reducer, { saveData } from '../redux/stats';

describe('Action creator functions properly', () => {
  test('Action creator functions properly 1', () => {
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
        },
      ],
      confirmed: 8,
      deaths: 5,
      intensive: 2,
    };
    const action = saveData(data);
    expect(reducer(data, action)).toStrictEqual(expected);
  });
  test('Action creator functions properly 2', () => {
    const data = {
      regions: [
        {
          id: 'region',
          name: 'Region',
          today_confirmed: 100,
          today_deaths: 100,
        },
      ],
      today_confirmed: 100,
      today_deaths: 100,
      today_intensive_care: 100,
    };
    const expected = {
      regions: [
        {
          today_confirmed: 100,
          today_deaths: 100,
          id: '/region',
          name: 'Region',
          confirmed: 100,
          deaths: 100,
        },
      ],
      confirmed: 100,
      deaths: 100,
      intensive: 100,
    };
    const action = saveData(data);
    expect(reducer(data, action)).toStrictEqual(expected);
  });
});
