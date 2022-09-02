/**
 * App state
 */

// Dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	currentResources: Resource[];
	selectedTags: string[];
}

const initialState: AppState = {
	currentResources: [],
	selectedTags: [],
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		updateCurrentResources: (state, action: PayloadAction<Resource[]>) => {
			state.currentResources = action.payload;
		},
		clearAllSelectedTags: (state) => {
			state.selectedTags = [];
		},
		updateSelectedTags: (state, action: PayloadAction<string>) => {
			if (state.selectedTags.includes(action.payload)) {
				state.selectedTags = state.selectedTags.filter(
					(item) => item !== action.payload
				);
			} else {
				state.selectedTags = [...state.selectedTags, action.payload];
			}
		},
	},
});

export const {
	updateCurrentResources,
	updateSelectedTags,
	clearAllSelectedTags,
} = appSlice.actions;

export default appSlice.reducer;
