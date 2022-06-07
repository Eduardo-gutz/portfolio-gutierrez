import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from './projects.slice'

const store = configureStore({
    reducer: {
        projects: projectsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store