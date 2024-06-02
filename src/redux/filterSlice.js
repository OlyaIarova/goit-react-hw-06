import { createSlice } from "@reduxjs/toolkit";

const filterContact = createSlice({
    name: 'filter',
    initialState: {
        name: '',
    },
    reducers: {
        contactFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { contactFilter } = filterContact.actions;
export const filterContactReducer = filterContact.reducer;