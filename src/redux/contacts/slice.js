import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoadingFetch: false,
    isLoadingAdd: false,
    error: null
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoadingFetch = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoadingFetch = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoadingFetch = false;
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state) => {
            state.isLoadingAdd = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoadingAdd = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isLoadingAdd = false;
            state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state) => {
            state.isLoadingDel = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoadingDel = false;
            state.error = null;
            const index = state.items.findIndex((el) => el.id === action.payload.id);
            console.log(index);
            state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isLoadingDel = false;
            state.error = action.payload;
        })
    }
});

export const contactsReducer = contactsSlice.reducer;