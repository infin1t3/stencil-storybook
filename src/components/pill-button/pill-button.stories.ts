import { html } from 'lit-html';
import markdown from './readme.md';
import { eventHandles, action } from '../../../.storybook/helpers/custom-action';

const customEvents = ['removeButtonResponse'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  buttonTitle: 'Story Button',
  subTitle: '$5,556 | -1.7%',
  buttonKey: 'key4',
  color: '#F51515',
  textColor: '#000000',
};
// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  buttonTitle: {
    description: 'The Header or Top line of button',
  },
  subTitle: {
    description: 'The text below the title',
  },
  buttonKey: {
    description: 'The emitted key for the button click on the X',
  },
  color: {
    description: 'Background Color of button',
    control: 'color',
  },
  textColor: {
    description: 'Text Color of button',
    control: 'color',
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Pill button',
  component: 'stc-pill-button',
  parameters: {
    notes: { markdown },
    actions: {
      handles: events,
    },
  },
};

const Template = (
  {
    buttonTitle,
    subTitle,
    buttonKey,
    color,
    textColor,
  }) => html`
  <stc-pill-button
    name="pill-button-3"
    .buttonTitle="${buttonTitle}"
    .subTitle="${subTitle}"
    .buttonKey="${buttonKey}"
    color="${color}"
    .textColor="${textColor}">
  </stc-pill-button>
  ${action('stc-pill-button', customEvents)}
`;

export const Default = Template.bind({});

Default.args = { ...args };
Default.argTypes = { ...argTypes };

export const Modified = Template.bind({});
Modified.args = { ...args, modifier: 'modified' };
Modified.argTypes = { ...argTypes };
