import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Login} from './Login';

describe('Testing Login component', () => {
  test('should render and submit login form', async () => {
    const handleSubmit = jest.fn();
    render(
        <BrowserRouter>
          <Login onSubmit={handleSubmit}/>
        </BrowserRouter>,
    );

    userEvent.type(screen.getByLabelText(/Email/i), 'user@gmail.com');
    userEvent.type(screen.getByLabelText(/Password/i), '22222222');

    userEvent.click(screen.getByRole('button', {name: /Sign in/i}));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'user@gmail.com',
        password: '22222222',
      }),
    );
  });

  test('should render and dont submit login form', async () => {
    const handleSubmit = jest.fn();
    render(
        <BrowserRouter>
          <Login onSubmit={handleSubmit}/>
        </BrowserRouter>,
    );

    userEvent.type(screen.getByLabelText(/Email/i), 'user@gmail.com');
    userEvent.type(screen.getByLabelText(/Password/i), '222222');

    userEvent.click(screen.getByRole('button', {name: /Sign in/i}));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledTimes(0),
    );
  });
});
