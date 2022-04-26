import { playLists } from '@data/playlists';
import { IPlayList } from '@domain/models/playlist';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface PlayListState {
  loading?: boolean;
  list: IPlayList[];
  current: IPlayList | null;
}

const initialState: PlayListState = {
  loading: false,
  list: playLists,
  current: null,
};

export const playListSlice = createSlice({
  name: 'PlayList',
  initialState,
  reducers: {
    getAllPlayListsRequest: (state) => {
      state.loading = true;
    },
    getAllPlayListsSuccess: (state, action: PayloadAction<IPlayList[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    getAllPlayListsFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
    getPlayList: (state, action: PayloadAction<IPlayList>) => {
      state.current = state.list.find((item) => item.id === action.payload.id);
    },
  },
});

export const {
  getAllPlayListsSuccess,
  getAllPlayListsRequest,
  getAllPlayListsFailed,
  getPlayList,
} = playListSlice.actions;

export const $PlayLists = (state: RootState) => state.playLists;

export default playListSlice.reducer;
