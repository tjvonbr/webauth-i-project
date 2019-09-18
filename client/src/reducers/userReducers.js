import {
  POST_USER_DATA_START,
  POST_USER_DATA_SUCCESS,
  POST_USER_DATA_FAILURE
} from '../actions/userActions';

const usersInitialState = {
  users: [],
  isLoading: false,
}

export const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case POST_USER_DATA_START:
      return {
        ...state,
        isLoading: true,
      }
    case POST_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    case POST_USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  };
};