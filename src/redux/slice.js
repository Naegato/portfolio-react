import { createSlice } from '@reduxjs/toolkit'
import { Authentificate } from "../axios/Authentificate";

const initialState = {
    loading: 'idle',
    data: {}
}

export const fetchData = () => async (dispatch) => {
    dispatch(dataLoading())
    const data = new Authentificate('http://localhost:3001/portfolio-react')
    data.fetchAll().then((r) => {
        // console.log(r)
        dispatch(dataReceived(r))
    });
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        dataReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.data = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { dataLoading, dataReceived} = dataSlice.actions

export default dataSlice.reducer

export const getData = (state) => state.data