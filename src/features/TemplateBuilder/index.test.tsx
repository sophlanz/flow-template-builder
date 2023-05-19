import { render } from '@testing-library/react';
import TemplateBuilder from '../TemplateBuilder';
import store from '../../store/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
describe('TemplateBuilder', () => {
  it('renders Sidebar and MessageNode components', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TemplateBuilder />
      </Provider>,
    );
    const sidebar = getByTestId('sidebar');
    const messageNode = getByTestId('messageNode');
    expect(sidebar).toBeInTheDocument();
    expect(messageNode).toBeInTheDocument();
  });
});
