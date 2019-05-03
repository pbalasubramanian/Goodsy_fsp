import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = id => dispatch => (
    UserApiUtil.fetchUser(id)
        .then( payload => dispatch({ type: RECEIVE_USER, payload }) )
);
