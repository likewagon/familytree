import {
	ADD_PERSON, ADD_PERSON_SUCCESS, ADD_PERSON_ERROR,
  GET_PERSON, GET_PERSON_SUCCESS, GET_PERSON_ERROR,
  UPDATE_PERSON, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR,
  DELETE_PERSON, DELETE_PERSON_SUCCESS, DELETE_PERSON_ERROR,

  ADD_TREE, ADD_TREE_SUCCESS, ADD_TREE_ERROR,
  GET_TREE, GET_TREE_SUCCESS, GET_TREE_ERROR
} from './actionTypes';

const initialState = {
	loading: false,
	error: "",
	person: null,
	addedPerson: null,
	tree: null,
	addedTree: null
};

const Data = (state = initialState, action) => {
	switch (action.type) {
		///////////////////
		case ADD_PERSON:
			return {
				...state,
				loading: true,
				addedPerson: null
			}

		case ADD_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				addedPerson: action.payload
			}

		case ADD_PERSON_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case GET_PERSON:
			return {
				...state,
				loading: true
			}

		case GET_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				person: action.payload
			}

		case GET_PERSON_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		///////////////////
		case UPDATE_PERSON:
			return {
				...state,
				loading: true,
				// person: null
			}

		case UPDATE_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				// person: action.payload
			}

		case UPDATE_PERSON_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		///////////////////
		case DELETE_PERSON:
			return {
				...state,
				loading: true,
				// person: null
			}

		case DELETE_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				// person: action.payload
			}

		case DELETE_PERSON_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_TREE:
			return {
				...state,
				loading: true,
				addedTree: null
			}

		case ADD_TREE_SUCCESS:
			return {
				...state,
				loading: false,
				addedTree: action.payload
			}

		case ADD_TREE_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case GET_TREE:
			return {
				...state,
				loading: true
			}

		case GET_TREE_SUCCESS:
			return {
				...state,
				loading: false,
				tree: action.payload
			}

		case GET_TREE_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Data;
