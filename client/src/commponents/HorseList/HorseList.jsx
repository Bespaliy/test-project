import { useDispatch, useSelector } from 'react-redux';
import Horse from '../Horse/Horse';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { loadHorses } from '../../actions/actions';
import env from '../../common/env';

const HourseList = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state);

	useEffect(() => {
		const socket = io(env.serverUrl);
		socket.emit('start');
		dispatch(loadHorses(socket));
		return () => socket.disconnect();
	}, []);

	const horses = data.sort((h1, h2) => h2.distance - h1.distance);

	return (
		<ol>
			{horses.length ? 
				horses.map(({ name, distance }, index) => 
					<Horse 
				  	key={name}
				  	index={++index}
				  	name={name}
				  	distance={distance} />) 
		  	: <div>Is loading...</div>}
		</ol>
	)
}

export default HourseList;