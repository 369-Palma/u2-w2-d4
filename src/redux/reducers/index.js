const startState = {
  favJobs: {
    content: [],
  },
};

const myReducer = (state = startState, action) => {
  switch (action.type) {
    case "AGGIUNGI_AI_PREFERITI":
      return {
        ...state,
        favJobs: {
          ...state.favJobs,
          content: [...state.favJobs.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favJobs: {
          ...state.favJobs,
          content: state.favJobs.content.filter(
            (fav) => fav !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default myReducer;
