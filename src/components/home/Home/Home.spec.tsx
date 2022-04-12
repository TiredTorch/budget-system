import {render, screen, waitFor} from '@testing-library/react';
import React, {SetStateAction} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Home} from './Home';
import '@testing-library/jest-dom';
import {ISpend} from 'types/types';
import userEvent from '@testing-library/user-event';

describe('Testing Home component', () => {
  test('should add new spend with proper values', async () => {
    const handleAddSpend = jest.fn();
    render(
        <BrowserRouter>
          <Home
            budgetState={null}
            logOut={(): void => {
              throw new Error('Function not implemented.');
            } }
            addSpend={handleAddSpend}
            deleteSpend={(spend: ISpend): Promise<void> => {
              throw new Error('Function not implemented.');
            } }
            spendManager={{
              spends: [],
              setSpends: (value: SetStateAction<ISpend[]>): void => {
                throw new Error('Function not implemented.');
              },
            }}
          />
        </BrowserRouter>,
    );
    const currentSpends = screen.getByText('Your spends list is empty');
    expect(currentSpends).toBeInTheDocument();

    userEvent.type(screen.getByLabelText(/What did you/i), 'Toys');
    userEvent.type(screen.getByLabelText(/How much/i), '22');

    userEvent.click(screen.getByText(/Add spend/i));

    await waitFor(() =>
      expect(handleAddSpend).toHaveBeenCalledWith({
        spendItem: 'Toys',
        spendCost: 22,
      }),
    );
  });
});
