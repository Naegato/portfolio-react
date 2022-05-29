import { createSlice } from '@reduxjs/toolkit'
import { Authentificate } from "../axios/Authentificate";

const initialState = {
    loading: 'idle',
    data: {}
}

export const fetchCurriculum = () => async (dispatch) => {
    dispatch(curriculumLoading())
    const data = new Authentificate('http://localhost:8000/api/curricula')
    data.fetchAll().then((r) => {
        // console.log(r)
        dispatch(curriculumReceived(r))
    });
}

export const curriculumSlice = createSlice({
    name: 'curriculum',
    initialState,
    reducers: {
        curriculumLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        curriculumReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.data = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { curriculumLoading, curriculumReceived } = curriculumSlice.actions

export default curriculumSlice.reducer

export const getCurriculum = (state) => state.curriculum