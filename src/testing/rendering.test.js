import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('App renders correctly', () => {
  test('App renders', () => {
    const site = render(<Provider store={store}><App /></Provider>);
    expect(site).toMatchSnapshot();
  });
});
