export const isAuthenticated = state => {
    return state.auth !== null 
        && state.auth.accessToken !== null 
        && new Date(state.auth.accessTokenExpiration) > new Date();
  };