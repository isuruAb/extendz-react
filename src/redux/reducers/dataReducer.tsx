const initialState: any = {};

const moviesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "EDIT_ROW": {
      return {
        ...state,
        ...action.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;
