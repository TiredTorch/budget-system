import React, {FC} from 'react';
import {Box, Button, Card, styled, Typography} from '@mui/material';
import {useFormik} from 'formik';
import {IHomePageProps} from '../../../types/types';
import HomeCard from './HomeCard/HomeCard';
import BodyBox from 'components/common/BodyBox/BodyBox';
import Input from 'components/common/UserInputs/Input';
import i18next from 'i18next';
import theme from 'theme/newTheme';

/**
 * Component for user's homepage. Contains list of user's
 * spends and method to add or remove them
 *
 * @param {IBudgetContextProps} budgetState State from
 * Budget Context
 * @param {Function} logOut Method to log out of user's
 * account
 * @param {Function} addSpend Method to add some spend to
 * user's list
 * @param {Function} deleteSpend Method to delete some spend
 * from user's list
 * @param {Object} spendManager Object that contains list of
 * users spends and dispatcher for it
 *
 * @return {React.ReactNode} Component for user's homepage
 */
const Home: FC<IHomePageProps> = (
    {
      budgetState,
      logOut,
      addSpend,
      deleteSpend,
      spendManager: {spends, setSpends},
    },
) => {
  const HomeCardWrapper = styled(Box)({
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  });

  const formik = useFormik({
    initialValues: {
      spendItem: '',
      spendCost: '',
    },
    onSubmit: (values) => addSpend(values),
  });

  return (
    <BodyBox type={'large'}>
      <Typography variant='h1'>
        {i18next.t('homepage.title')} {budgetState?.user?.email}
      </Typography>
      <Card
        sx={{
          marginTop: '3vmin',
          bgcolor: theme.palette.secondary.main,
          border: `.4vmin solid ${theme.palette.primary.dark}`,
        }}
      >
        <Typography variant='h2' >
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
              fontWeight: '700',
            }}
          >
            {i18next.t('homepage.spendAction.add')}
          </Button>
        </form>
      </Card>
      <Typography variant='h2'>
        {!!spends.length ?
        `${i18next.t('homepage.spendControl.spendAmount')} ${spends.reduce(
            (acc, state) => acc + state.spendCost, 0,
        )}` :
        i18next.t('homepage.spendControl.emptySpendList')}
      </Typography>
      <HomeCardWrapper>
        {spends.map((curSpend) => {
          return (
            <HomeCard
              key={`spend: ${curSpend.spendItem}`}
              spend={curSpend}
              deleteSpend={() => deleteSpend(curSpend)}
            />
          );
        })}
      </HomeCardWrapper>
      <Button
        onClick={logOut}
        variant='outlined'
      >
        {i18next.t('homepage.logoutButton')}
      </Button>
    </BodyBox>

  );
};

export default Home;
