import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
    name: "text",
    initialState: {
      value: "placeholder"
    },
    reducers: { 
      replaceText(state, action) {
        state.value = action.payload;
      }
    }
  })
  
  export const textValue = state => state.text.value;

  export const {replaceText} = textSlice.actions

  export default textSlice.reducer