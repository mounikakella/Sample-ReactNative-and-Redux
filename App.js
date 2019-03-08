/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Input } from 'react-native';
import { connect } from 'react-redux';
import { getPlaces } from './src/actions/places';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
export class App extends Component<Props> {
	async componentDidMount() {
		await this.props.getPlaces();
		console.log('hii');
		console.log(this.props.places);
		alert(JSON.stringify(this.props.places));
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

const mapStateToProps = state => {
	return {
		places: state.places,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPlaces: () => {
			dispatch(getPlaces());
		},
	};
};

// return async dispatch => {}
//   return dispatch({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
