import {Box, Button, Card, TextField, Typography} from '@mui/material';
import React, {FC} from 'react';
import {HomeCard} from '../HomeCard/HomeCard';
import {IHomePageProps} from '../../../types/types';
import {useFormik} from 'formik';

export const Home: FC<IHomePageProps> = (
    {
      budgetState,
      logOut,
      addSpend,
      deleteSpend,
      spendManager: {spends, setSpends},
    },
) => {
  const formik = useFormik({
    initialValues: {
      spendItem: '',
      spendCost: '',
    },
    onSubmit: (values) => addSpend(values),
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            <TextField
              value={formik.values.spendItem}
              onChange={formik.handleChange}
              name='spendItem'
              id='spendItem'
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
              value={formik.values.spendCost}
              onChange={formik.handleChange}
              color='success'
              id='spendCost'
              name='spendCost'
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
            type='submit'
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
        </form>
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
          <HomeCard
            key={`spend: ${curSpend.spendItem}`}
            spend={curSpend}
            deleteSpend={() => deleteSpend(curSpend)}
          />
        );
      })}
      <Button
        onClick={logOut}
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
