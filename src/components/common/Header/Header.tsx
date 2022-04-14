import {AppBar, Typography} from '@mui/material';
import i18next from 'i18n';

const Header = () => {
  return (
    <AppBar>
      <Typography align='center' variant='h1'>
        {i18next.t('title')}
      </Typography>
    </AppBar>
  );
};

export default Header;
