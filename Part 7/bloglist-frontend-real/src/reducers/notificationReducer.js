const initialState = null

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET':
        return {message: action.message, error: action.error}
      case 'EMPTY':
        return null
      default:
        return state
    }
  }


  export const notificationVote = (anecdote) => {
    return {
      type: 'VOTE',
      anecdote,
    }
  }

  export const notificationNewAnecdote = (anecdote) => {
    return {
      type: 'ADD',
      anecdote,
    }
  }

  export const setNotification = (message, time = 5, error = true) => {
    return async dispatch => {
        console.log(message)
      setTimeout(() => {
        dispatch(emptyNotification())
      }, time * 1000)
      dispatch({
        type: 'SET',
        message,
        time,
        error
      })
    }
  }

  export const emptyNotification = () => {
    return {
      type: 'EMPTY'
    }
  }
  
  export default notificationReducer