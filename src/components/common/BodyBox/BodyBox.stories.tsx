import { CssBaseline, ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import theme from 'theme/newTheme';
import BodyBox from './BodyBox';

export default {
  title: 'Budget-Control/BodyBox',
  component: BodyBox,
  argTypes: {
    children: { control: 'text'},
    type: { control: 'radio', options: ['medium', 'large'] },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Story/>
        </CssBaseline>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof BodyBox>;

const Template: ComponentStory<typeof BodyBox> = (args) => (
  <BodyBox {...args}/>
);

export const Main = Template.bind({});
Main.args = {
  type: 'medium',
  children: 'Text',
};
