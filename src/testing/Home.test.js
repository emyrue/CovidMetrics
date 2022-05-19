import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../pages/Home';

describe('Home renders correctly', () => {
  test('Home renders', () => {
    const site = render(<Provider store={store}><Home /></Provider>);
    expect(site).toMatchSnapshot();
  });
});