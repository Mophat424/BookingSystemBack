// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import userReducer from '../features/login/userSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// export const store = configureStore({
//   reducer: {
//     user: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST', 'persist/PURGE', 'persist/REHYDRATE'],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/userSlice";
import { usersAPI } from "../features/users/usersAPI";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;