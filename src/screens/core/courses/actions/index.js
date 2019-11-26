import * as types from '../constants';
import http from '~/services/http';

export const load = () => {
    return dispatch => {

        dispatch({
            type: types.LOADING,
            payload: true
        });

        let url = `${http.defaults.baseURL}lawsuit/all`;

        http.get(url)
            .then(res => {
                if ( res.data.courses && res.data.courses.length > 0 ) {
                    dispatch( {
                        type: types.COURSES_LOADED,
                        payload: res.data.courses
                    });
                }

                dispatch({
                    type: types.LOADING,
                    payload: false
                });
            })
            .catch(err => {
                console.warn(err);
                dispatch({
                    type: types.LOADING,
                    payload: false
                });
            });
    }
}
