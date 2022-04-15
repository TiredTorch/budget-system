import {FC} from 'react';
import {Button, Card, styled, Typography} from '@mui/material';
import {IDeleteSpendManager} from 'types/types';
import i18next from 'i18next';

/**
 * Card that depict one of user spends
 *
 * @param {ISpend} spend Object that contains some stuff and
 * how much user did spend on this
 * @param {Function} deleteSpend Function to delete current card
 * @return {React.ReactNode} Card-element for home component to
 * contain and show users spends
 */
const HomeCard : FC<IDeleteSpendManager> =
  ({spend, deleteSpend}) => {
    const StyledHomeCard = styled(Card)(({ theme }) => ({
      display: 'flex',
      justifyContent: 'space-between',
      margin: '3vmin',
      padding: '4vmin',
      background: theme.palette.primary.light,
      border: `1px solid ${theme.palette.primary.dark}`,
    }));
    const StyledHomeButton = styled(Button)(({ theme }) => ({
      fontSize: '1.5vmin',
      fontWeight: '700',
      margin: '0 0 0 2vmin',
      color: 'lightgray',
      '&:hover': {
        color: 'white',
      },
    }));
    return (
      <StyledHomeCard >
        <Typography
          fontSize='1.3vmax'
          color='white'
        >
          {spend.spendItem} : {spend.spendCost}
          {i18next.t('homepage.spendControl.monetaryUnits')}
        </Typography>
        <StyledHomeButton
          onClick={() => deleteSpend()}
          variant='outlined'
          sx={{
          }}
        >
          {i18next.t('homepage.spendAction.remove')}
        </StyledHomeButton>
      </StyledHomeCard>
    );
  };

export default HomeCard;
