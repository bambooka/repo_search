const initialState = {
  languages: ['java', 'python', 'javascript'],
  inputText: '',
  selectedOption: 'Java'
}
export const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_INPUT') {
    return {...state, inputText: action.inputData}
  } else if (action.type === 'SELECT_OPTION') {
    return {...state, selectedOption: action.selectedOption}
  } else if (action.type === 'CLEAR_INPUT') {
    return {...state, inputText: ''}
  } else {
    return state
  }
}

