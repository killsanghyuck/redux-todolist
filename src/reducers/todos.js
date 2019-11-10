const initialState = {
  input: '',
  todos: []
};
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.text
      };
      case 'ADD_TODO':
        return {
          ...state,
          todos: state.todos.concat({ 
            id: action.id,
            text: action.text,
            completed: false})
        };
      default:
        return state
    }
  }
  
  export default todos