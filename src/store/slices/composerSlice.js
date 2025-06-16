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
    generatedMelodyURL: null,
    generatedMelodyName: "",
}

export const composerSlice = createSlice({
    name: "composer",
    initialState: initialComposerState,
    reducers: {
        startComposing(state){
            state.isCurrentlyComposing = true;

            state.generatedMelodyURL = null;
            state.generatedMelodyName = "";
            
            console.log("Composing started!");
        },
        stopComposing(state){
            state.isCurrentlyComposing = false;
            console.log("Composing stopped!");
        },
        setGeneratedMelodyData(state, action){
            state.generatedMelodyURL = action.payload.generatedMelodyURL;
            state.generatedMelodyName = action.payload.generatedMelodyName;
            console.log("Generated Melody: ", action.payload);
        },
        setLastComposeSettings(state, action){
            state.lastComposeSettings.genre = action.payload.genre;
            state.lastComposeSettings.instrument = action.payload.instrument;
            state.lastComposeSettings.fileType = action.payload.fileType;
            state.lastComposeSettings.sequenceQuantity = action.payload.sequenceQuantity;
            state.lastComposeSettings.melodyDiversity = action.payload.melodyDiversity;
            console.log("Current settings: ", action.payload);
        }
    },
});

export const { startComposing, stopComposing, setGeneratedMelodyData, setLastComposeSettings } = composerSlice.actions;
export default composerSlice.reducer;