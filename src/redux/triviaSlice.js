import { createSlice } from '@reduxjs/toolkit';

export const triviaSlice = createSlice({
  name: 'triviaQuestions',
  initialState: {
    first: [`"They've done studies you know. Sixty percent of the time it works every time.\n - Movie quote"`, 'The main character has a dog who speaks spanish.\n - Movie fact', `"I'm very important. I have many leather-bound books and my apartment smells of rich mahogany.\n - Movie quote"`, "ANCHORMAN - THE LEGEND OF RON BURGUNDY", "This is one of my favorite movies. What's its name?"], 
    second:  [`"The first video game to introduce the side-scrolling parallax to platform games."`,`"This entire game for the original Nintendo Entertainment System (NES) was only 31 KB (kilobytes) of data."`, `"This is one of the first video games I ever played and to this day it inspires me still."`, "Super Mario Bros.", "This is one of my favorite video games. What's its name?"]
  },
  reducers: {
    settriviaQuestions: (state, action) => {
      return {
        ...state,
        triviaQuestions : action.payload
      }
    }
  }
});

export const { triviaQuestions } = triviaSlice.actions
export default triviaSlice.reducer 
