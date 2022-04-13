import {FC, useEffect, useState} from 'react';
import {Box} from '@mui/system';

type BodyBoxProps = {
  children: React.ReactNode
  type: string
}

export const BodyBox : FC<BodyBoxProps> = ({children, type}) => {
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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

        border: '.5vh solid yellowgreen',
        bgcolor: 'lightgoldenrodyellow',
        maxWidth: `${personalStyle.maxWidth}`,
        m: `${personalStyle.margin}`,
        p: '1vh 1vw',

      }}
    >
      {children}
    </Box>
  );
};
