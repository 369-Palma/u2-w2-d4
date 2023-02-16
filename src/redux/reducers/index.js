const startState = {
  favJobs: {
    content: [],
  },
};

const myReducer = (state = startState, action) => {
  switch (action.type) {
    /* case "SALVA_AZIENDA":
         return (
            ...state,
            favJobs: {...state.favJobs,
            content:[...state.favJobs.content, action.payload]}
        ) */
    default:
      return state;
  }
};

export default myReducer;
