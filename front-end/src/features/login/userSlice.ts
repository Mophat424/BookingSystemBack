// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

// interface User {
//   id?: number;
//   email?: string;
//   name?: string;
//   role?: string;
//   token?: string;
// }

// interface UserState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   error: string | null;
//   loading: boolean;
// }

// const initialState: UserState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   error: null,
//   loading: false,
// };

// // Async thunk for registration
// export const registerUser = createAsyncThunk(
//   'user/register',
//   async (userData: { first_name: string; last_name: string; email: string; password: string; contact_phone?: string; address?: string }, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:8081/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Registration failed');
//       return data; // Matches { message, token, user }
//     } catch (error: unknown) {
//       if (error instanceof Error) return rejectWithValue(error.message);
//       return rejectWithValue('An unknown error occurred');
//     }
//   }
// );

// // Async thunk for login
// export const loginUser = createAsyncThunk(
//   'user/login',
//   async (credentials: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:8081/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Login failed');
//       return data; // Matches { token, user }
//     } catch (error: unknown) {
//       if (error instanceof Error) return rejectWithValue(error.message);
//       return rejectWithValue('An unknown error occurred');
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ message: string; token: string; user: User }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout, clearError } = userSlice.actions;
// export default userSlice.reducer;












// // src/features/login/userSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

// interface User {
//   id?: number;
//   email?: string;
//   name?: string;
//   role?: string;
//   token?: string;
// }

// interface UserState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   error: string | null;
//   loading: boolean;
//   needsVerification: boolean; // New state for OTP verification
// }

// const initialState: UserState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   error: null,
//   loading: false,
//   needsVerification: false,
// };

// // Async thunk for registration
// export const registerUser = createAsyncThunk(
//   'user/register',
//   async (userData: { first_name: string; last_name: string; email: string; password: string; contact_phone?: string; address?: string }, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:8081/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Registration failed');
//       return data; // Matches { message, token, user }
//     } catch (error: unknown) {
//       if (error instanceof Error) return rejectWithValue(error.message);
//       return rejectWithValue('An unknown error occurred');
//     }
//   }
// );

// // Async thunk for login
// export const loginUser = createAsyncThunk(
//   'user/login',
//   async (credentials: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:8081/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Login failed');
//       return data; // Matches { token, user }
//     } catch (error: unknown) {
//       if (error instanceof Error) return rejectWithValue(error.message);
//       return rejectWithValue('An unknown error occurred');
//     }
//   }
// );

// // Async thunk for verification (placeholder)
// export const verifyUser = createAsyncThunk(
//   'user/verify',
//   async (otp: string, { rejectWithValue }) => {
//     try {
//       // Placeholder: Replace with real API call when backend is ready
//       const response = await fetch(`http://localhost:8081/auth/verify/${otp}`, {
//         method: 'GET', // Adjust method based on backend
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Verification failed');
//       return data; // Expected response (e.g., { success: true, token, user })
//     } catch (error: unknown) {
//       if (error instanceof Error) return rejectWithValue(error.message);
//       return rejectWithValue('An unknown error occurred');
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.needsVerification = false;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ message: string; token: string; user: User }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.needsVerification = true; // Trigger verification step
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.needsVerification = false;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(verifyUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(verifyUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.needsVerification = false;
//       })
//       .addCase(verifyUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout, clearError } = userSlice.actions;
// // export { registerUser, loginUser, verifyUser };
// export default userSlice.reducer;




// src/features/login/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PublicUser } from '../../../../src/Auth/auth.service';
// Import the PublicUser interface

interface UserState {
  user: PublicUser | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
  needsVerification: boolean;
}

const initialState: UserState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  needsVerification: false,
};

// Async thunk for registration
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData: { first_name: string; last_name: string; email: string; password: string; contact_phone?: string; address?: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8081/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Registration failed');
      return data; // Matches { message, token, user: PublicUser }
    } catch (error: unknown) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');
      return data; // Matches { token, user: PublicUser }
    } catch (error: unknown) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Async thunk for verification
export const verifyUser = createAsyncThunk(
  'user/verify',
  async ({ email, otp }: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8081/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Verification failed');
      return data; // Matches { token, user: PublicUser }
    } catch (error: unknown) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.needsVerification = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ message: string; token: string; user: PublicUser }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.needsVerification = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: PublicUser }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.needsVerification = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action: PayloadAction<{ token: string; user: PublicUser }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.needsVerification = false;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;