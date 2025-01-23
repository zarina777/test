import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import projectReducer from "./projectsSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "projects",
  storage,
};

const persistedReducer = persistReducer(persistConfig, projectReducer);

const store = configureStore({
  reducer: {
    projects: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
