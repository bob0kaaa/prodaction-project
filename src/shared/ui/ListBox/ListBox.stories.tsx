import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],

} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Blocked = Template.bind({});
Blocked.args = {
    defaultValue: 'Test',
    readonly: true,
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};
export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Test',
    readonly: false,
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};
export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'Test',
    readonly: false,
    direction: 'top left',
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'Test',
    readonly: false,
    direction: 'top right',
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'Test',
    readonly: false,
    direction: 'bottom left',
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'Test',
    readonly: false,
    direction: 'bottom right',
    label: 'Test ',
    items: [
        { value: '123', content: 'Первый ' },
        { value: '1234', content: 'Второй ' },
    ],
};
