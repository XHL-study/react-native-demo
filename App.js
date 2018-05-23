/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Alert,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from 'react-native';
//渐变背景
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
const RNAlert = Alert.alert;
let navigate;
export default class App extends Component < Props > {

	constructor(props) {
		super(props)
		this.state = {
			text: '',
		}
		navigate = this.props.navigation.navigate;
	}

	static navigationOptions = ({
		navigation
	}) => {
		let view = null;
		let titles = navigation.state;
		if(titles.params) {
			titles = titles.params.name;
			view = (<View />);
		} else {
			titles = '首页';
		}

		return({
			headerTitle: titles, //前一个页面传来的对象的name属性
			headerTitleStyle: {
				alignSelf: 'center',
				flex: 1,
				textAlign: 'center',
				color: 'black'
			},
			headerRight: view,
			header: titles.params ? '' : '', //是否显示header
		})
	}

	componentWillMount() {}

	componentWillUnmount() {}

	//获取inputvalue
	_getInputValue() {
		this._InputBlur();
		var AlertText = 'inputValue = ' + this.state.text;
		RNAlert(
			'Tip getInputValue',
			AlertText, [{
					text: '取消',
					onPress: () => {
						alert('哈哈');
					}
				},
				{
					text: '确定',
					onPress: () => {}
				},
			]
		)
	}

	//失去焦点
	_InputBlur() {
		//this.refs.input1.blur();
		this._navigationTo();
	}

	//跳转到第二页
	_navigationTo() {
		navigate('ReactNativeStorage', {
			name: "还是首页(●'◡'●)"
		});
	}

	render() {
		//<StatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>
		return(
			<TouchableWithoutFeedback onPress={this._InputBlur.bind(this)}>
				<LinearGradient  colors={['red', 'white', 'green']} style={styles.linearGradient}>
					<View style={styles.container}>
					    <Text>{'内容'}</Text>
				        
		      		</View>
	      		</LinearGradient>
      		</TouchableWithoutFeedback >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: 0
	},
	linearGradient: {
		flex: 1,
	},
});