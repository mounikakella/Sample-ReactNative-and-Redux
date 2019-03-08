export const GET_PLACES = 'GET_PLACES';

export function getPlaces() {
	const body = { placename: 'testing' };
	return {
		type: GET_PLACES,
		payload: body,
	};
}

export default {
	getPlaces,
	GET_PLACES,
};
