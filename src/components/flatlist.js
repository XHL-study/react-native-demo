import React, {
	Component
} from 'react';

import {View,Text} from 'react-native';

export default class Flatlist extends Component {
	constructor(props) {
		super(props)
	}
	
	static navigationOptions = ({
		navigation
	}) => {
		return {
			headerTitle: navigation.state.params.name,
		}
	}
	
	componentWillMount() {
		//console.warn('barHeight:'+StatusBar.currentHeight);
	}
	
	componentWillUnmount() {}
	
	render(){
		return(
			<View>{'FlatList'}</View>
		)
	}
}