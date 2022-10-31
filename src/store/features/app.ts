/**
 * App state
 */

// Dependencies
import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	currentResources: Resource[];
	selectedTags: Tags;
	snackbar: {
		display: boolean;
		message: string;
		type: AlertColor;
	};
}

const initialState: AppState = {
	currentResources: [],
	selectedTags: [],
	snackbar: {
		display: false,
		message: '',
		type: 'error', // error, warning, info, success
	},
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
		updateSelectedTags: (state, action: PayloadAction<Tag>) => {
			if (state.selectedTags.includes(action.payload)) {
				state.selectedTags = state.selectedTags.filter(
					(item) => item !== action.payload
				);
			} else {
				state.selectedTags = [...state.selectedTags, action.payload];
			}
		},
		showSnackbar: (
			state,
			action: PayloadAction<{ message: string; type?: AlertColor }>
		) => {
			state.snackbar = { ...state.snackbar, display: true, ...action.payload };
		},
		hideSnackbar: (state) => {
			state.snackbar = { ...state.snackbar, display: false };
		},
	},
});

export const {
	updateCurrentResources,
	updateSelectedTags,
	clearAllSelectedTags,
	showSnackbar,
	hideSnackbar,
} = appSlice.actions;

export default appSlice.reducer;
