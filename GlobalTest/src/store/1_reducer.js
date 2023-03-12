import { useReducer } from "react";
import { createAction } from "../utils/createAction";

export const ADD_INGREDIENT = createAction("ADD_INGREDIENT");
export const REMOVE_INGREDIENT = createAction("REMOVE_INGREDIENT");

const ingredientReducer = (state, action) => {
    switch (action.type) {
        case "ADD_INGREDIENT":
            return [...state, action.payload];
        case "REMOVE_INGREDIENT":
            return state.filter(
                (ingredient) => ingredient.id !== action.payload.id
            );
        default:
            return state;
    }
};

export default ingredientReducer;
