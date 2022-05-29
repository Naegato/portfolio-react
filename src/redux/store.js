import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice'
import projectReducer from './projectSlice';
import curriculumReducer from './curriculumSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        project: projectReducer,
        curriculum: curriculumReducer,
    },
})