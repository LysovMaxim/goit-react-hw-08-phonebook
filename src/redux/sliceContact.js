import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContact, getContacts } from '../apiUser';
import { toast } from 'react-hot-toast';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts();
});

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => {
    return addContacts(contact);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return deleteContact(id);
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: bilder => {
    bilder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
        state.error = '';
        toast.success("Сontact created")
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = '';
        toast.success("Сontact deleted")
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
