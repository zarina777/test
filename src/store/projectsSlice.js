import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      return {
        ...state,
        projects: [...state.projects, action.payload], 
      };
    },
    getProjects: (state) => {
      return state; 
    },
    updateProject: (state, action) => {
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id
            ? {
                ...project,  
                ...action.payload, 
              }
            : project
        ),
      };
    },
    removeProject: (state, action) => {
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload.id), 
      };
    },
  },
});

export const { addProject, getProjects, updateProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
