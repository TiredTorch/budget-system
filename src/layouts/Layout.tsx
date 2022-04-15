import { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../components/common/Header/Header';

/**
 * Layout for website
 * @param {React.ReactNode} children Children component
 * for layout
 * @return {React.ReactNode} Layout for website
 */
const Layout : FC = ({children}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: '0 0 2vh 0',
        background: `url(https://i.pinimg.com/originals/b9/1e/f6/b91ef686bde789f0b4540468c07e5a0b.jpg)`,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header/>
      {children}
    </Box>
  );
};

export default Layout;
