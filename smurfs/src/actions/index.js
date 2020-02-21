import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILURE = "SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });

  axios
    .get("http://localhost:3333/smurfs/")
    .then(res => {
      console.log(res.data);
      dispatch({ type: SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: SMURFS_FAILURE, payload: err.message });
    });
};

// /export const GET_SMURFS = "GET_SMURFS";
// export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
// export const GET_SMURFS_FAILURE = "SMURFS_FAILURE";

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs/", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
    });
};

export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";

export const deleteSmurf = id => dispatch => {
  console.log("id =", id);
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("response from delete action", res);
      dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
    });
};