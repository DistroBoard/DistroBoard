import {FETCH_ALL, FETCH_RANDOM, CREATE, UPDATE, DELETE, LIKE} from '../constants/actions'
import * as api from '../api';

export const getDistros = () => async (dispatch) => {
  try {
    const {data} = await api.fetchDistros();
    dispatch({type: FETCH_ALL, payload: data});

  } catch (error) {
    console.log(error.msg);
  }

};

export const getRandom = () => async (dispatch) => {
  try {
    const {data} = await api.fetchRandom();
    dispatch({type: FETCH_RANDOM, payload: data});

  } catch (error) {
    console.log(error.msg);
  }

};

export const createDistro = (distro) => async (dispatch) => {
  try {
    const {data} = await api.createDistro(distro);

    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDistro = (id, distro) => async (dispatch) => {
  try {
    const {data} = await api.updateDistro(id, distro);

    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const deleteDistro = (id) => async (dispatch) => {
  try {
    await api.deleteDistro(id);

    dispatch({type: DELETE, payload: id});
  } catch (error) {
    console.log(error.message);
  }
};

export const likeDistro = (id) => async (dispatch) => {
  try {
    const {data} = await api.likeDistro(id);

    dispatch({type: LIKE, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
