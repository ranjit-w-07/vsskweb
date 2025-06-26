import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
  isLoading: false,
  currentSlide: 0,
  activeNavItem: '/',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
    setActiveNavItem: (state, action) => {
      state.activeNavItem = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setLoading, setCurrentSlide, setActiveNavItem } =
  uiSlice.actions;

export default uiSlice.reducer;
