
import React,{Component} from 'react';
import {Button} from 'react-native';
import { withNavigation } from 'react-navigation';

class NavigationLeft extends Component{
	 render() {
	    return <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
	  }
}

export default withNavigation(NavigationLeft);