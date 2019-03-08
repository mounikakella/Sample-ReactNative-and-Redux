import { GET_PLACES } from '../actions/places';

export default function places(state = {}, action) {
	switch (action.type) {
		case GET_PLACES:
			return action.payload;
	}
	return state;
}
