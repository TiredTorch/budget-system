import { Card } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import theme from 'theme/newTheme';

type BodyBoxProps = {
  children: React.ReactNode
  type: 'medium' | 'large'
}

/**
 * Returns section wrapper for other components
 * @component
 *
 *
 * @param {React.ReactNode} children Child component
 * @param {'medium' | 'large'} type Size of component ('medium' or 'large')
 *
 *
 * @return {React.ReactNode} Component, section wrapper for other components
 */
const BodyBox : FC<BodyBoxProps> = ({children, type}) => {
  const [personalStyle, setPersonalStyle] = useState({
    margin: '5vh 25vw',
    maxWidth: '50vw',
  });

  useEffect(() => {
    switch (type) {
      case 'medium':
        setPersonalStyle({
          margin: '5vh 25vw',
          maxWidth: '50vw',
        });
        break;
      case 'large':
        setPersonalStyle({
          margin: '5vh 10vw',
          maxWidth: '80vw',
        });
        break;
      default:
        break;
    }
  }, [type]);


  return (
    <Card
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme.palette.secondary.light,
        boxShadow: '1px 1px 10px 1px',
        padding: '4vmin 0',
        opacity: '.93',

        maxWidth: `${personalStyle.maxWidth}`,
        margin: `${personalStyle.margin}`,
      }}
    >
      {children}
    </Card>
  );
};

export default BodyBox;
