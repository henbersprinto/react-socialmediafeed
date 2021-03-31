import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
    name: "text",
    initialState: "placeholder",
    reducers: { 
      replaceText(state, action) {
        state = action.payload;
      }
    }
  })
  
  export const {replaceText} = textSlice.actions
  export default textSlice.reducer

  


