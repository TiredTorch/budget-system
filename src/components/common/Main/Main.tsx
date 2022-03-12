import {Box, Button, Card, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {MainCard} from '../MainCard/MainCard';
import {ISpend} from '../../../types/types';
import {signOut} from 'firebase/auth';
import {auth} from 'api/firebase';
import {useNavigate} from 'react-router';
import {getBudgetState} from 'contexts/BudgetContext';

export const Main = () => {
  const initialSpends : Array<ISpend> = [
    {
      spendItem: 'govno 2',
      spendCost: 22,
    },
    {
      spendItem: 'govno 3',
      spendCost: 47,
    },
    {
      spendItem: 'govno 4',
      spendCost: 47,
    },
    {
      spendItem: 'govno 5',
      spendCost: 47,
    },
  ];
  const [spends, setSpends] = useState(initialSpends);

  const [newSpendItem, setSpendItem] = useState('');
  const [newSpendCost, setSpendCost] = useState<number|void>();

  const navigate = useNavigate();

  const budgetState = getBudgetState();

  const handleDeleteSpend = (spend:ISpend) => {
    setSpends(spends.filter((curSpend) => curSpend !== spend));
  };

  const handleAddSpend = () => {
    if (!newSpendItem || !newSpendCost) {
      alert('You have to fill empty inputs!');
      return;
    }

    const newSpend = {
      spendItem: newSpendItem,
      spendCost: newSpendCost,
    };

    setSpends([...spends, newSpend]);
    setSpendItem('');
    setSpendCost();
  };

  const handleLogOut = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

        border: '.5vh solid yellowgreen',
        bgcolor: 'lightgoldenrodyellow',
        maxWidth: '80vw',
        m: '5vh 10vw',
        p: '1vh 1vw',
      }}
    >
      <Typography
        align='center'
        fontSize='3vmax'
        sx={{
          minWidth: '90vw',
        }}
      >
        Page of {budgetState?.user?.email}
      </Typography>
      <Card
        sx={{
          minWidth: '75%',
          m: '3vh 0',
          p: '1vh 1vw',
          bgcolor: 'yellowgreen',
        }}
      >
        <Typography
          align='center'
          fontSize='3vmax'
        >
          Add some of yours spends
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <TextField
            value={newSpendItem}
            onChange={(e) => {
              setSpendItem(e.target.value);
            }}
            color='success'
            label='What did you bought'
            variant='standard'
            inputProps={{style: {
              fontSize: '1.5vmax',
            }}}
            InputLabelProps={{style: {fontSize: '1.5vmax'}}}
            sx={{
              minWidth: '40%',
              m: '2vh 0',
            }}
          />
          <TextField
            value={newSpendCost??''}
            onChange={(e) => {
              setSpendCost(Number(e.target.value));
            }}
            color='success'
            label='How much is it?'
            type='number'
            variant='standard'
            inputProps={{style: {
              fontSize: '1.5vmax',
            }}}
            InputLabelProps={{style: {fontSize: '1.5vmax'}}}
            sx={{
              minWidth: '40%',
              m: '2vh 0',
              'input[type=number]::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: '0',
              },
              'input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: '0',
              },

            }}
          />
        </Box>
        <Button
          onClick={handleAddSpend}
          variant='outlined'
          sx={{
            fontSize: '1.2vmax',
            m: '2vh 20%',
            minWidth: '60%',
            border: '1px solid black',
            color: 'black',
            fontWeight: '700',
            '&:hover': {
              border: '1px solid green',

            },
          }}
        >
          Add spend
        </Button>
      </Card>
      <Typography
        fontSize='3vmax'
        align='center'
        sx={{
          minWidth: '100%',
        }}
      >
        {!!spends.length ?
        `Your current spends: ${spends.reduce(
            (acc, state) => acc + state.spendCost, 0,
        )}` :
        'Your spends list is empty'}
      </Typography>
      {spends.map((curSpend) => {
        return (
          <MainCard
            key={`spend: ${curSpend.spendItem}`}
            spend={curSpend}
            deleteSpend={() => handleDeleteSpend(curSpend)}
          />
        );
      })}
      <Button
        onClick={handleLogOut}
        variant='outlined'
        sx={{
          fontSize: '2vmax',
          minWidth: '60%',
          m: '3vh 20%',
          border: '1px solid black',
          color: 'black',
          fontWeight: '700',
          '&:hover': {
            border: '1px solid green',

          },
        }}
      >
        Log out
      </Button>
    </Box>
  );
};
