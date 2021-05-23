import * as api from '../api';

export const getDistros = () => async (dispatch) => {
  try {
    const {data} = await api.fetchDistros();
    dispatch({type: 'FETCH_ALL', payload: data});

  } catch (error) {
    console.log(error.msg);
  }

}
