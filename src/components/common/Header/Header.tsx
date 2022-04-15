import {AppBar, styled, Typography} from '@mui/material';
import i18next from 'i18n';

/**
 * Returns header of website
 * @component
 *
 * @return {React.ReactNode} Component, Header of website
 */
const Header = () => {
  const StyledHeader = styled(AppBar)(({ theme }) => ({
    color: theme.palette.secondary.main,
    minHeight: '6vmax',
  }));

  const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
  }));

  return (
    <StyledHeader>
      <StyledHeaderTitle variant='h1'>
        {i18next.t('title')}
      </StyledHeaderTitle>
    </StyledHeader>
  );
};

export default Header;
