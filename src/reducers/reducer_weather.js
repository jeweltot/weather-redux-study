import {FETCH_WEATHRER} from '../actions';

export default function (state = [], action)
{
    switch (action.type)
    {
        case FETCH_WEATHRER :
            // return state.concat(action.payload.data)
            return [action.payload, ...state];

        default:
            return state;
    }
}