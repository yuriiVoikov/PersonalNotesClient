export const initialise = (state, payload) => {
    Object.assign(state, payload);
  };

export const showAuthModal = state => {
  state.showAuthModal = true;
};

export const hideAuthModal = state => {
  state.showAuthModal = false;
};

export const loginRequest = state => {
  state.loading = true;
};

export const loginSuccess = (state, payload) => {
  state.auth = payload;
  state.loading = false;
};

export const loginError = state => {
  state.loading = false;
};

export const registerRequest = state => {
  state.loading = true;
};

export const registerSuccess = state => {
  state.loading = false;
};

export const registerError = state => {
  state.loading = false;
};

export const logout = state => {
  state.auth = null;
  state.messages = null;
};

export const sendMessageRequest = state => {
    state.loading = true;
};

export const sendMessageSuccess = state => {
    state.loading = false;
};

export const sendMessageError = state => {
    state.loading = false;
};

export const getMessageRequest = state => {
  state.loading = true;
};

export const getMessageSuccess = (state, payload) => {
  state.loading = false;
  state.messages = payload;
};

export const getMessageError = state => {
  state.loading = false;
};
