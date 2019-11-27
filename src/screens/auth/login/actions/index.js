import * as types from '../constants';
import http from '~/services/http';
import {
    Alert
} from 'react-native';

export const changeUser = (value) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_USER,
            payload: value
        });
    }
}

export const changePassword = (value) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_PASSWORD,
            payload: value
        });
    }
}

export const login = (data) => {
    return dispatch => {
        dispatch({
            type: types.LOADING_LOGIN,
            payload: true
        });

        let url = `${http.defaults.baseURL}login`;

        http.data(url, data)
            .then(res => {

                if ( res.status === 200 ) {

                }
                else {
                    Alert.alert(
                      'Ops!',
                      'Falha ao tentar autenticar.',
                      [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ],
                      {cancelable: false},
                    );
                }

                dispatch({
                    type: types.LOADING_LOGIN,
                    payload: false
                });
            })
            .catch(err => {
                console.warn(err);
                dispatch({
                    type: types.LOADING_LOGIN,
                    payload: false
                });
            });
    }
}
