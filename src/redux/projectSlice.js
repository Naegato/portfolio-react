import { createSlice } from '@reduxjs/toolkit'
import { Authentificate } from "../axios/Authentificate";

const initialState = {
    loading: 'idle',
    data: {}
}

export const fetchProject = () => async (dispatch) => {
    dispatch(projectLoading())
    const data = new Authentificate('http://localhost:8000/api/projects')
    data.fetchAll().then((r) => {
        // console.log(r)
        dispatch(projectReceived(r))
    });
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        projectLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        projectReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.data = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { projectLoading, projectReceived } = projectSlice.actions

export default projectSlice.reducer

export const getProject = (state) => state.project