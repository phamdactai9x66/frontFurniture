import { createSlice, PayloadAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import stateAudio, { formStateAudio } from "./stateAudio";
import songApi from "api/songApi";
import { tranFormdata } from "component/MethodCommon";
export const getlistAudio: any = createAsyncThunk("audio/getListAUdio", async (params, thunkAPi) => {
    const getAllSong = await songApi.getAll({});
    return getAllSong?.data
})

const sliceAudio = createSlice({
    name: "audio",
    initialState: stateAudio,
    reducers: {
        playSong(state: formStateAudio, action: PayloadAction<{ _id: string }>) {
            const { _id } = action.payload;
            const findSong = state.likstStaticAudio[_id];
            if (findSong) {
                state.audio = findSong;
                state.display = !state.display;
                state.playing = true
            }
        },
        pauseSong(state: formStateAudio, action: PayloadAction) {
            state.display = false;
        },
        renderSong(state: formStateAudio, action: PayloadAction) {
            state.display = true;
        },
        pausePlaying(state: formStateAudio, action: PayloadAction) {
            state.playing = false;
        }
    },
    extraReducers: {
        [getlistAudio.fulfilled]: (state: formStateAudio, action) => {
            state.likstStaticAudio = tranFormdata([...action.payload])
            // console.log(action.payload)
        }
    }
})

export const { playSong, pauseSong, renderSong, pausePlaying } = sliceAudio.actions;
export default sliceAudio.reducer
