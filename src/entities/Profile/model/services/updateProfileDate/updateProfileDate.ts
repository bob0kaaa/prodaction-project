import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData } from 'entities/Profile';
import { Profile } from '../../types/profile';

export const updateProfileDate = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/updateProfileDate',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formDate = getProfileData(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formDate);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
