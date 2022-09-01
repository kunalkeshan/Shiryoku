/**
 * App state
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		currentResources: [],
		selectedTags: [],
	},
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		updateCurrentResources: (state, action) => {},
		updateSelectedTags: (state, action) => {},
	},
});

export const { updateCurrentResources, updateSelectedTags } = appSlice.actions;

export default appSlice.reducer;
