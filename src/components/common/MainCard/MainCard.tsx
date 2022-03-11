import {Button, Card, Typography} from '@mui/material';
import React, {FC} from 'react';
import {IDeleteSpendManager} from 'types/types';

export const MainCard : FC<IDeleteSpendManager> =
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
          {`${spend.spendItem} : ${spend.spendCost} m. u.`}
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
        Remove Spend
        </Button>
      </Card>
    );
  };
