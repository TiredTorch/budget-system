import {FC} from 'react';
import {Box, Button, Card, Typography} from '@mui/material';
import {useFormik} from 'formik';
import {IHomePageProps} from '../../../types/types';
import HomeCard from './HomeCard/HomeCard';
import BodyBox from 'components/common/BodyBox/BodyBox';
import Input from 'components/common/UserInputs/Input';
import i18next from 'i18next';

const Home: FC<IHomePageProps> = (
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
        {i18next.t('homepage.title')} {budgetState?.user?.email}
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
          {i18next.t('homepage.spendControl.title')}
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >

            <Input
              formik={formik}
              name={'spendItem'}
              type={'text'}
              label={i18next.t('homepage.spendControl.spendItemLabel')}
            />

            <Input
              formik={formik}
              name={'spendCost'}
              type={'number'}
              label={i18next.t('homepage.spendControl.spendCostLabel')}
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
            {i18next.t('homepage.spendAction.add')}
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
        `${i18next.t('homepage.spendControl.spendAmount')} ${spends.reduce(
            (acc, state) => acc + state.spendCost, 0,
        )}` :
        i18next.t('homepage.spendControl.emptySpendList')}
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
        {i18next.t('homepage.logoutButton')}
      </Button>
    </BodyBox>

  );
};

export default Home;
