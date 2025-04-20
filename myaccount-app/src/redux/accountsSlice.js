import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [],
  selectedAccount: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
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
  },
});

export const { updateState } = accountsSlice.actions;
export default accountsSlice.reducer;
