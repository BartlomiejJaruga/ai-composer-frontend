import { createSlice } from "@reduxjs/toolkit";

const initialComposerState = {
    isCurrentlyComposing: false,
    lastComposeSettings: {
        genre: "",
        instrument: "",
        fileType: "",
        sequenceQuantity: 50,
        melodyDiversity: 50,
    },
}

export const composerSlice = createSlice({
    name: "composer",
    initialState: initialComposerState,
    reducers: {
        startComposing(state, action){
            state.isCurrentlyComposing = true;
            state.lastComposeSettings.genre = action.payload.genre;
            state.lastComposeSettings.instrument = action.payload.instrument;
            state.lastComposeSettings.fileType = action.payload.fileType;
            state.lastComposeSettings.sequenceQuantity = action.payload.sequenceQuantity;
            state.lastComposeSettings.melodyDiversity = action.payload.melodyDiversity;
            console.log("Composing started!");
            console.log("Current settings: ", action.payload);
        },
        stopComposing(state){
            state.isCurrentlyComposing = false;
            console.log("Composing stopped!");
        },
    },
});

export const { startComposing, stopComposing } = composerSlice.actions;
export default composerSlice.reducer;