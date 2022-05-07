import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projectFocused',
  initialState: {
    projects: [
      {
        id: 0,
        name: 'E-commerce Website',
        github: 'https://github.com/lemondsun/crwn-clothing',
        discription: `An e-commerce website that leverages Google's "Firebase" for Auth and Stripe for payments. I built it with React, Redux, and Sass.`,
        image: 'https://i.imgur.com/FO0Bdmu.png',
        website:'https://crwnshpdemo.surge.sh/'
      },
      {
        id: 1,
        name: 'Photographer Portfolio',
        github: 'https://github.com/lemondsun/shot-in-film-frontend',
        discription: 'A portfolio website and a seperate admin web application that allows the client the freedom to edit and adjust the site as they feel.',
        image: 'https://i.imgur.com/EqkolrV.jpg',
        website:'https://www.shotinfilm.com/'
      },
      {
        id: 2,
        name: 'Church Website',
        github: 'https://github.com/lemondsun/church-frontend',
        discription: 'A sample website for growing church organizations.',
        image: 'https://i.imgur.com/sHYRWtV.png',
        website:'http://churchsample.surge.sh/'
      },
      {
        id: 3,
        name: 'Resturant Website',
        github: 'unavailable',
        discription: 'A sample website for growing resturants.',
        image: 'https://i.imgur.com/YY1j8NF.png',
        website:'http://tartine.surge.sh/'
      },
    ],
  },
  reducers: {
    updateProject: (state, action) => {
      return {
        ...state,
        projects: action.payload
      }
    }
  }
});

export const { updateProject } = projectSlice.actions
export default projectSlice.reducer