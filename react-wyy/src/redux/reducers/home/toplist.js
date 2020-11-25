import { GET_TOPLIST_DETAIL} from '../../actionTypes'

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOPLIST_DETAIL:
            return {
                ...state,
                list: action.payload.list
            }
        default:
            return state;
    }
};