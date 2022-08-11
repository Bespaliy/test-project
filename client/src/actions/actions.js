export const getHorses = (payload) => ({type: 'HORSES', payload});

export const loadHorses = (socket) => {
	return (dispatch) => {
		socket.on('ticker', (res) => {
		   dispatch(getHorses(res));
	   })
	}	
}
