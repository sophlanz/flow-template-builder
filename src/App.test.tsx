import { render } from '@testing-library/react';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
describe('App', () => {
  it('renders Home component ', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const Home = getByTestId('home');
    expect(Home).toBeInTheDocument();
  });
});
