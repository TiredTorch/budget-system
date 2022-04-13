import {FC} from 'react';
import {Box, Button, Card, Typography} from '@mui/material';
import {useFormik} from 'formik';
import {IHomePageProps} from '../../../types/types';
import {HomeCard} from './HomeCard/HomeCard';
import {BodyBox} from 'components/common/BodyBox/BodyBox';
import {UserInputs} from 'components/common/UserInputs/UserInputs';

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
    <BodyBox
      type={'large'}
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

            <UserInputs
              formik={formik}
              name={'spendItem'}
              type={'text'}
              label={'What did you bought'}
            />

            <UserInputs
              formik={formik}
              name={'spendCost'}
              type={'number'}
              label={'How much is it?'}
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
    </BodyBox>

  );
};
