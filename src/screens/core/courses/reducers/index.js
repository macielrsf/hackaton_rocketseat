import * as types from '../constants';

const INITIAL_STATE = {
    loading: false,
    courses: [
        {
            "id": 1,
            "name": "Lógica de programação",
            "description": "Teste",
            "teacher": {
                "id": 1
            },
            "powered_by": "Rocketseat",
            "stars": 1,
            "students": [
                {
                    "id": 1
                }
            ],
            "posts": [
                {
                    "id": 1,
                    "date": "2019-11-26T18:00:00-03:00",
                    "title": "teste",
                    "message": "teste",
                    "content_url": "https://www.youtube.com/watch?v=DDm0M_rZLJo",
                    "author": {
                        "id": 1
                    },
                    "comments": [
                        {
                            "id": 1,
                            "date": "2019-11-26T18:10:00-03:00",
                            "message": "teste",
                            "content_url": "https://www.youtube.com/watch?v=DDm0M_rZLJo",
                            "author": {
                                "id": 1
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case types.COURSES_LOADED: {
            return {
                ...state,
                courses: action.payload
            }
        }
        default:
            return state;
    }
}
