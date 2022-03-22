import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Logup} from './Logup';

describe('Testing Login component', () => {
  test('should render and submit login form', async () => {
    const handleSubmit = jest.fn();
    render(
        <BrowserRouter>
          <Logup onSubmit={handleSubmit}/>
        </BrowserRouter>,
    );

    userEvent.type(screen.getByLabelText(/Email/i), 'user@gmail.com');
    userEvent.type(screen.getByLabelText('Password'), '22222222');
    userEvent.type(screen.getByLabelText(/Confirm password/i), '22222222');

    userEvent.click(screen.getByRole('button', {name: /Sign up/i}));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'user@gmail.com',
        password: '22222222',
        confirmPassword: '22222222',
      }),
    );
  });
  test('should render and dont submit login form', async () => {
    const handleSubmit = jest.fn();
    render(
        <BrowserRouter>
          <Logup onSubmit={handleSubmit}/>
        </BrowserRouter>,
    );

    userEvent.type(screen.getByLabelText(/Email/i), 'user@gmail.com');
    userEvent.type(screen.getByLabelText('Password'), '222222');
    userEvent.type(screen.getByLabelText(/Confirm password/i), '222222');

    userEvent.click(screen.getByRole('button', {name: /Sign up/i}));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledTimes(0),
    );
  });
});
