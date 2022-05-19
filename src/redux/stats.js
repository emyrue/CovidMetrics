// Actions
const SAVE = 'covidmetrics/countries/SAVE';

// Reducer
export default function reducer(state = {
  regions: [],
  confirmed: 0,
  deaths: 0,
  intensive: 0,
}, action) {
  switch (action.type) {
    case SAVE:
      return {
        regions: action.data.regions.map((region) => ({
          ...region,
          id: `/${region.id}`,
          name: region.name,
          confirmed: region.today_confirmed,
          deaths: region.today_deaths,
        })),
        confirmed: action.data.today_confirmed,
        deaths: action.data.today_deaths,
        intensive: action.data.today_intensive_care,
      };
    default:
      return state;
  }
}

// Action Creators
export const saveData = (data) => ({
  type: SAVE,
  data,
});
