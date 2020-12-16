// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  ADD_PERSON,
  GET_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  
  ADD_TREE,
  GET_TREE,
   
} from './actionTypes';

import {
  addPersonSuccess, addPersonError,
  getPersonSuccess, getPersonError, 
  updatePersonSuccess, updatePersonError,
  deletePersonSuccess, deletePersonError,
  
  addTreeSuccess, addTreeError,
  getTreeSuccess, getTreeError, 
  
} from './actions';

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* addPerson({payload}) {
  try {    
    const response = yield call(postData, '/addperson', payload);    
    yield put(addPersonSuccess(response));
  } catch (error) {
    console.log('add person error', error);
    yield put(addPersonError(error));
  }
}

function* getPerson({payload}) {
  try {    
    const response = yield call(fetchData, '/getperson', payload);
    yield put(getPersonSuccess(response));    
  } catch (error) {
    console.log('get person error', error);
    yield put(getPersonError(error));
  }
}

function* updatePerson({payload}){
  try{
    const response = yield call(postData, '/updateperson', payload);
    yield put(updatePersonSuccess(response));
  } catch (error) {
    console.log('update person error', error);
    yield put(updatePersonError(error));
  }
}

function* deletePerson({payload}){
  try{
    const response = yield call(postData, '/deleteperson', payload);
    yield put(deletePersonSuccess(response));
  } catch (error) {
    console.log('delete person error', error);
    yield put(deletePersonError(error));
  }
}

function* addTree({payload}) {
  try {    
    const response = yield call(postData, '/addtree', payload);    
    yield put(addTreeSuccess(response));
  } catch (error) {
    console.log('add tree error', error);
    yield put(addTreeError(error));
  }
}

function* getTree({payload}) {
  try {    
    const response = yield call(fetchData, '/gettree', payload);
    yield put(getTreeSuccess(response));    
  } catch (error) {
    console.log('get tree error', error);
    yield put(getTreeError(error));
  }
}


export function* watchAddPerson() {
  yield takeEvery(ADD_PERSON, addPerson);
}

export function* watchGetPerson() {
  yield takeEvery(GET_PERSON, getPerson);
}

export function* watchUpdatePerson() {
  yield takeEvery(UPDATE_PERSON, updatePerson);
}

export function* watchDeletePerson() {
  yield takeEvery(DELETE_PERSON, deletePerson);
}

export function* watchAddTree() {
  yield takeEvery(ADD_TREE, addTree);
}

export function* watchGetTree() {
  yield takeEvery(GET_TREE, getTree);
}


function* DataSaga() {
  yield all([
    fork(watchAddPerson),
    fork(watchGetPerson),
    fork(watchUpdatePerson),
    fork(watchDeletePerson),
    fork(watchAddTree),
    fork(watchGetTree),
  ]);
}

export default DataSaga;