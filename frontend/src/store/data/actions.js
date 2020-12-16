import { 
  ADD_PERSON, ADD_PERSON_SUCCESS, ADD_PERSON_ERROR,
  GET_PERSON, GET_PERSON_SUCCESS, GET_PERSON_ERROR,
  UPDATE_PERSON, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR,
  DELETE_PERSON, DELETE_PERSON_SUCCESS, DELETE_PERSON_ERROR,

  ADD_TREE, ADD_TREE_SUCCESS, ADD_TREE_ERROR,
  GET_TREE, GET_TREE_SUCCESS, GET_TREE_ERROR
} from './actionTypes';

/////////////////////////////////////
export const addPerson = (person) => {
  return {
      type: ADD_PERSON,
      payload: person
  }
}

export const addPersonSuccess = (response) => {      
  return {
    type: ADD_PERSON_SUCCESS,
    payload: response
  }
}

export const addPersonError = (error) => {
  return {
    type: ADD_PERSON_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getPerson = () => {
  return {
      type: GET_PERSON      
  }
}

export const getPersonSuccess = (person) => {      
  return {
    type: GET_PERSON_SUCCESS,
    payload: person
  }
}

export const getPersonError = (error) => {
  return {
    type: GET_PERSON_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const updatePerson = (person) => {
  return {
      type: UPDATE_PERSON,
      payload: person
  }
}

export const updatePersonSuccess = (response) => {      
  return {
    type: UPDATE_PERSON_SUCCESS,
    payload: response
  }
}

export const updatePersonError = (error) => {
  return {
    type: UPDATE_PERSON_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const deletePerson = (person) => {
  return {
      type: DELETE_PERSON,
      payload: person
  }
}

export const deletePersonSuccess = (response) => {      
  return {
    type: DELETE_PERSON_SUCCESS,
    payload: response
  }
}

export const deletePersonError = (error) => {
  return {
    type: DELETE_PERSON_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addTree = (tree) => {
  return {
      type: ADD_TREE,
      payload: tree
  }
}

export const addTreeSuccess = (response) => {      
  return {
    type: ADD_TREE_SUCCESS,
    payload: response
  }
}

export const addTreeError = (error) => {
  return {
    type: ADD_TREE_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTree = () => {
  return {
      type: GET_TREE      
  }
}

export const getTreeSuccess = (tree) => {      
  return {
    type: GET_TREE_SUCCESS,
    payload: tree
  }
}

export const getTreeError = (error) => {
  return {
    type: GET_TREE_ERROR,
    payload: error
  }
}
