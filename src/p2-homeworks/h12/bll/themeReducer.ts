import { changeThemeType } from "../HW12";

const initState = {
  theme: "some",
};
// type InitStateType = ReturnType<typeof initState>;

export const themeReducer = (state = initState, action: changeThemeType) => {
  // fix any
  debugger;
  switch (action.type) {
    case "some": {
      return { ...state, theme: action.type };
    }
    case "red": {
      return { ...state, theme: action.type };
    }
    case "dark": {
      return { ...state, theme: action.type };
    }
    default:
      return state;
  }
};

export const changeThemeC = (): any => {}; // fix any
