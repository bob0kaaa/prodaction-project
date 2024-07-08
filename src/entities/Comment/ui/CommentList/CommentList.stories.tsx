import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'TEst123',
            user: { id: '1', username: 'TestUser' },
        },
        {
            id: '2',
            text: 'TEst333',
            user: { id: '2', username: 'TestUser2' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'TEst123',
            user: { id: '1', username: 'TestUser' },
        },
        {
            id: '2',
            text: 'TEst333',
            user: { id: '2', username: 'TestUser2' },
        },
    ],
    isLoading: true,
};
