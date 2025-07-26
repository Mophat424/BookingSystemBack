// src/features/events/eventSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'

interface Venue {
  venue_id: number;
  name: string;
  address: string;
  capacity: number;
  created_at: string;
}

interface Event {
  event_id: number;
  title: string;
  description: string;
  venue_id: number;
  category: string;
  date: string;
  time: string;
  ticket_price: number;
  tickets_total: number;
  tickets_sold: number;
  created_at: string;
  updated_at: string;
  venue?: Venue; // Optional relation
}

interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [
    {
      event_id: 1,
      title: 'Concert Night',
      description: 'An evening of live music',
      venue_id: 1,
      category: 'Music',
      date: '2025-08-01',
      time: '19:00',
      ticket_price: 50.00,
      tickets_total: 200,
      tickets_sold: 50,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      venue: {
        venue_id: 1,
        name: 'City Hall',
        address: '123 Main St, City',
        capacity: 500,
        created_at: new Date().toISOString(),
      },
    },
    {
      event_id: 2,
      title: 'Tech Workshop',
      description: 'Learn new tech skills',
      venue_id: 2,
      category: 'Workshop',
      date: '2025-08-15',
      time: '14:00',
      ticket_price: 30.00,
      tickets_total: 100,
      tickets_sold: 20,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      venue: {
        venue_id: 2,
        name: 'Tech Center',
        address: '456 Tech Ave, City',
        capacity: 300,
        created_at: new Date().toISOString(),
      },
    },
  ],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.loading = false;
      state.events = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateEvent: (state, action: PayloadAction<Partial<Event> & { event_id: number }>) => {
      const index = state.events.findIndex((e) => e.event_id === action.payload.event_id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...action.payload, updated_at: new Date().toISOString() };
      }
    },
  },
});

export const { setLoading, setEvents, setError, updateEvent } = eventSlice.actions;
export default eventSlice.reducer;