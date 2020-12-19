import service from '../../service/boardService'


export function setState() {
  return async dispatch => {
    try {
      const state = await service.getState()
      dispatch(_setState(state));
      dispatch({ type: 'GET_STATE' });
    }
    catch (err) {
      console.log('there was an error')
      throw err
    }
  }
}


function _setState(action) {
  return {
    type: 'SET_STATE',
    action
  }
}