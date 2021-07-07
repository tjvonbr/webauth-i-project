import axios from 'axios';

export const FETCH_USER_DATA_START = "FETCH_USER_DATA_START";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE = "FETCH_USER_DATA_FAILURE";

export const POST_USER_DATA_START = "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_DATA_START })
      axios
        .get("http://localhost:8000/api/users/users")
        .then(response => {
          console.log("FETCH USERS", response.data);
          dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: FETCH_USER_DATA_FAILURE, payload: error.response });
        });
  };
};

export const registerUser = creds => dispatch => {
    dispatch({ type: POST_USER_DATA_START})
      axios
        .post("http://localhost:8000/api/users/register")
        .then(response => {
          console.log("POST USER", response.data);
          dispatch({ type: POST_USER_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: POST_USER_DATA_FAILURE, payload: error.response });
        });
};
