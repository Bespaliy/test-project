export const reducer = (state = [], action) => {
    switch(action.type) {
      case 'HORSES': {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }