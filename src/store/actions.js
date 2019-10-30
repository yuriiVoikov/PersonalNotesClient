import axios from "axios";

const BASE_ADRESS = "http://localhost:5000";

export const login = ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      commit("loginRequest");
      axios
        .post(`${BASE_ADRESS}/api/authorization`, payload)
        .then(response => {
          const auth = response.data;
          axios.defaults.headers.common["Authorization"] = `Bearer ${
            auth.access_token
          }`;
          commit("loginSuccess", auth);
          commit("hideAuthModal");
          resolve(response);
        })
        .catch(error => {
          commit("loginError");
          delete axios.defaults.headers.common["Authorization"];
          reject(error.response);
        });
    });
  };
  
  export const register = ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      commit("registerRequest");
      axios
        .post(`${BASE_ADRESS}/api/account`, payload)
        .then(response => {
          commit("registerSuccess");
          resolve(response);
        })
        .catch(error => {
          commit("registerError");
          reject(error.response);
        });
    });
  };
  
  export const logout = ({ commit }) => {
    commit("logout");
    delete axios.defaults.headers.common["Authorization"];
  };

  export const sendTextMessage = ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      commit("sendMessageRequest");
      axios
        .post(`${BASE_ADRESS}/api/message/text`, payload)
        .then(response => {
          commit("sendMessageSuccess");
          resolve(response);
        })
        .catch(error => {
          commit("sendMessageError");
          reject(error.response);
        });
    });
  };

  export const getMessages = ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit("sendMessageRequest");
      axios
        .get(`${BASE_ADRESS}/api/message`)
        .then(response => {
          commit("sendMessageSuccess");
          resolve(response);
        })
        .catch(error => {
          commit("sendMessageError");
          reject(error.response);
        });
    });
  };