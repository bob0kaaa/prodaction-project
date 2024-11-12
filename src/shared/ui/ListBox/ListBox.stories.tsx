import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Blocked = Template.bind({});
Blocked.args = {
    defaultValue: 'Test',
    readonly: true,
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
};
export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Test',
    readonly: false,
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
};
