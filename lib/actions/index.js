import {
  GET_THINGS_FROM_DB,
  GET_ALL_THINGS_FROM_DB,
  POST_THING_DB,
  PUT_THING_DB,
  DELETE_THING_DB
} from '../actionTypes.js';


const getThingsDb = () => {
  return {
    type: GET_THINGS_FROM_DB
  };
};

const getThingsDbAll = () => {
  return {
    type: GET_ALL_THINGS_FROM_DB,
  };
};

const postThingDb = (data) => {
  return {
    type: POST_THING_DB,
    payload: data
  };
};

const putThingDb = (id, data) => {
  return {
    type: PUT_THING_DB,
    payload: {
      id, data
    }
  };
};

const deleteThingDb = (id) => {
  return {
    type: DELETE_THING_DB,
    payload: id
  };
};

export {
  getThingsDb,
  getThingsDbAll,
  postThingDb,
  putThingDb,
  deleteThingDb
};
