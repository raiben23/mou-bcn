import axios from "axios";
import {
  GET_STATIONS_ATTEMPT,
  GET_STATIONS_SUCCESS,
  GET_STATIONS_FAILURE,
} from "./DownloadStationsTypes";

const getStationsAttempt = () => ({
  type: GET_STATIONS_ATTEMPT,
});
const getStationsSuccess = (payload) => ({
  type: GET_STATIONS_SUCCESS,
  payload,
});
const getStationsFailure = (error) => ({
  type: GET_STATIONS_FAILURE,
  error,
});

export const downloadStations = (id) => async (dispatch) => {
  dispatch(getStationsAttempt());
  try {
    const response = await axios.get(
      "https://api.tmb.cat/v1/transit/linies/metro/" +
        id +
        "/estacions?app_id=07ba35b4&app_key=17d5fecb81e92f3daa9e1f5e869db9c2"
    );
    return dispatch(getStationsSuccess(response.data.features));
  } catch (error) {
    return dispatch(getStationsFailure(error.message));
  }
};
