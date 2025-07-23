// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { loginUser, registerUser } from './authAPI';
// import { AxiosError } from 'axios';


// interface User {
//   id: string | number; // Since 814 is a number
//   name: string;
//   email: string;
//   role: 'admin' | 'user'; // or simply: string if more roles exist
// }


// interface AuthResponse {
//   user: User;
//   token: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// // LOGIN
// export const login = createAsyncThunk<
//   AuthResponse,
//   { email: string; password: string },
//   { rejectValue: string }
// >(
//   'auth/login',
//   async (userData, thunkAPI) => {
//     try {
//       const response = await loginUser(userData);
//       return response;
//     } catch (err) {
//       const error = err as AxiosError<{ message: string }>;
//       return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
//     }
//   }
// );

// // REGISTER
// export const register = createAsyncThunk<
//   void,
//   { email: string; password: string },
//   { rejectValue: string }
// >(
//   'auth/register',
//   async (userData, thunkAPI) => {
//     try {
//       await registerUser(userData);
//     } catch (err) {
//       const error = err as AxiosError<{ message: string }>;
//       return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
//     }
//   }
// );


// // SLICE
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Login Cases
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })

//       // Register Cases
//       .addCase(register.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authAPI';
import { AxiosError } from 'axios';

interface User {
  id: string | number;
  name: string;
  email: string;
  role: 'admin' | 'user'; // You can generalize this if more roles are added
}

interface AuthResponse {
  user: User;
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Async login
export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await loginUser(userData);
    return response;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Async register
export const register = createAsyncThunk<
  void,
  { email: string; password: string },
  { rejectValue: string }
>('auth/register', async (userData, thunkAPI) => {
  try {
    await registerUser(userData);
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
  }
});

// Sync stored user from localStorage into redux
const loadUserFromStorage = (): AuthState => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const token = localStorage.getItem('token');
    return {
      user,
      token,
      loading: false,
      error: null,
    };
  } catch {
    return initialState;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadUserFromStorage(),
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    rehydrate(state) {
      const stored = loadUserFromStorage();
      state.user = stored.user;
      state.token = stored.token;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      });
  },
});

export const { logout, rehydrate } = authSlice.actions;
export default authSlice.reducer;
