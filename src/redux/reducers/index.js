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
    default:
      return state;
  }
};

export default myReducer;
