import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    selectedAccount: null,
    // add other selectedX if needed
  },
  reducers: {
    updateState: (state, action) => {
      const { key, value, mode = 'replace' } = action.payload;

      if (mode === 'merge' && typeof value === 'object' && value !== null) {
        state[key] = {
          ...state[key],
          ...value,
        };
      } else {
        state[key] = value;
      }
    },

    // ✅ Generic selector for any key like selectedAccount, selectedTrade etc.
    selectState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updateState, selectState } = accountsSlice.actions;
export default accountsSlice.reducer;
