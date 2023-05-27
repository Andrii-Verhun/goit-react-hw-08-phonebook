import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://64687416e99f0ba0a8250243.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
});

export const addContact = createAsyncThunk('contacts/addContact', async (arg, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', arg);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (arg, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${arg}`);
        console.log(response);
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});