import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
	title: 'shared/Button',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ex, eum iusto tempora ab est incidunt eos et ullam iste architecto? Quidem blanditiis odit, expedita nisi atque aut ut. Minima.',
};
