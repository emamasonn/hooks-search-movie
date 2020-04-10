import { get } from 'lodash'
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETA, SEARCH_MOVIE_BY_ID_START, SEARCH_MOVIE_BY_ID_ERROR, SEARCH_MOVIE_BY_ID_COMPLETE} from '../../consts/actionTypes'

const initialState = {

};

export default function (state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE_START:
            return {...state, isLoading: true}
            break;
        case SEARCH_MOVIE_ERROR:
            return{...state, isLoading: false, movieResults: null}
            break;
        case SEARCH_MOVIE_COMPLETA:
            return {...state, isLoading: false, movieResults: action.results.data}
            break;
        case SEARCH_MOVIE_BY_ID_START:
            return {...state, isLoading: true, movieResult: null}
            break;
        case SEARCH_MOVIE_BY_ID_ERROR:
            return{...state, isLoading: false, movieResult: null}
            break;
        case SEARCH_MOVIE_BY_ID_COMPLETE:
            return {...state, isLoading: false, movieResult: action.movie.data}
            break;
        default: 
            return state
    }
}