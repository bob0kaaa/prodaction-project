import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/conterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
