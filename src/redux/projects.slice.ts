import { createSlice } from '@reduxjs/toolkit'
import { Project } from '../interfaces/projects'

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: []
  } as {projects: Project[]},
  reducers: {
    setProjects: (state, action: {payload: Project[]}) => {
      state.projects = [...action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setProjects } = projectsSlice.actions

export default projectsSlice.reducer