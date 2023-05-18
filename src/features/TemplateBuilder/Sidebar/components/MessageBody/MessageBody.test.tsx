import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MessageBody from './MessageBody';
import { setBodyMessage } from '../../../../../store/template-builder.slice';
import '@testing-library/jest-dom';
const mockStore = configureStore([]);

describe('MessageBody component', () => {
  test('renders MessageBody component correctly and dispatches setBodyMessage action with the updated message', () => {
    // Create a mock store
    const store = mockStore({
      templateBuilder: {
        specific_template: {
          bodyMessage: 'Initial message',
        },
      },
    });

    // Render the MessageBody component wrapped in the Provider with the mock store
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <MessageBody />
      </Provider>,
    );

    // Assert the presence of the body message header
    const bodyMessageHeader = getByText('Body Message');
    expect(bodyMessageHeader).toBeInTheDocument();

    // Assert the presence of the required notice
    const requiredNotice = getByText('REQUIRED');
    expect(requiredNotice).toBeInTheDocument();

    // Simulate typing in the textarea
    const textarea = getByTestId('text-editor');
    fireEvent.change(textarea, { target: { value: 'New message' } });

    // Dispatch the action and get the dispatched actions from the store
    const actions = store.getActions();

    // Assert that the setBodyMessage action was dispatched with the correct payload
    expect(actions).toContainEqual(setBodyMessage('New message'));
  });
});
