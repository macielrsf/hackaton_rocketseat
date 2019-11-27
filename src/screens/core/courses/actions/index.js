import * as types from '../constants';
import http from '~/services/http';

export const load = () => {
    return dispatch => {

        dispatch({
            type: types.LOADING,
            payload: true
        });

        let url = `${http.defaults.baseURL}courses`;

        http.get(url)
            .then(res => {
                console.warn(res.data);

                if ( res.data && res.data.length > 0 ) {
                    dispatch( {
                        type: types.COURSES_LOADED,
                        payload: res.data
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
