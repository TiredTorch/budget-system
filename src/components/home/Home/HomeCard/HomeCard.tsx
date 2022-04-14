import {FC} from 'react';
import {Button, Card, Typography} from '@mui/material';
import {IDeleteSpendManager} from 'types/types';
import i18next from 'i18next';

const HomeCard : FC<IDeleteSpendManager> =
  ({spend, deleteSpend}) => {
    return (
      <Card
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',

          p: '1vh 1vw',
          m: '4vh 0',
          bgcolor: 'yellowgreen',
          minWidth: '30%',
        }}
      >
        <Typography
          fontSize='1.3vmax'
        >
          {`${spend.spendItem} : ${spend.spendCost} 
          ${i18next.t('homepage.spendControl.monetaryUnits')}`}
        </Typography>
        <Button
          onClick={() => deleteSpend()}
          variant='outlined'
          sx={{
            border: '1px solid black',
            color: 'black',
            fontWeight: '700',
            '&:hover': {
              border: '1px solid green',

            },
          }}
        >
          {i18next.t('homepage.spendAction.remove')}
        </Button>
      </Card>
    );
  };

export default HomeCard;
