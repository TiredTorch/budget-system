import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import i18next from 'i18n';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'static',
        w: '100vw',
        minHeight: '5vh',
        bgcolor: 'yellowgreen',
        p: '1vh 0',
      }}
    >
      <Typography fontSize="3vmax" align='center' fontFamily='Lato'>
        {i18next.t('title')}
      </Typography>
    </Box>
  );
};

export default Header;
