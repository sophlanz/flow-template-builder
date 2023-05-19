import { render, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import store from '../../../store/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { setCampaign } from '../../../store/template-builder.slice';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
describe('SideBar', () => {
  it('renders Sidebar component correctly and dispatches setCampaign action with the campaignName', () => {
    const store = mockStore({
      templateBuilder: {
        specific_template: {
          header: 'Initial Header',
          bodyMessage: 'Initial Body',
          footer: 'Initial Footer',
          buttons: ['Initial Button'],
          campaign: 'Initial Campaign',
          id: '1234',
        },
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>,
    );
    const sidebar = getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    //campaignNameTextField
    // Simulate typing in the textarea of campaign name
    const textarea = getByTestId('campaignNameTextField');
    fireEvent.change(textarea, { target: { value: 'New Campaign Name' } });

    // Dispatch the action and get the dispatched actions from the store
    const actions = store.getActions();

    // Assert that the setBodyMessage action was dispatched with the correct payload
    expect(actions).toContainEqual(setCampaign('New Campaign Name'));

    //startBuildingButton
    //deleteButton
    //saveButton
    //deleteIcon
  });
});
