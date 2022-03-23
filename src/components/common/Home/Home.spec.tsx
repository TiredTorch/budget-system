import {render, screen} from '@testing-library/react';
import React, {SetStateAction} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Home} from './Home';
import '@testing-library/jest-dom';
import {ISpend} from 'types/types';

describe('Testing Home component', () => {
  test('should add new spend', () => {
    render(
        <BrowserRouter>
          <Home
            budgetState={null}
            logOut={(): void => {
              throw new Error('Function not implemented.');
            } }
            addSpend={(values: any): Promise<void> => {
              throw new Error('Function not implemented.');
            } }
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
  });
});
