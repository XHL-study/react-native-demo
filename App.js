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
	TextInput,
	Keyboard,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

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
			},
			headerRight: view,
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
		this.refs.input1.blur();
	}

	//跳转到第二页
	_navigationTo() {
		navigate('Main2', {
			name: "还是首页(●'◡'●)"
		});
	}

	render() {
		//<StatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>
		return(
			<TouchableWithoutFeedback onPress={this._InputBlur.bind(this)}>
				<View style={styles.container}>
				    
			       	<Text style={styles.welcome}>
			          Welcome to React Native!
			        </Text>
			        <Text style={styles.instructions}>
			          To get started, edit App.js
			        </Text>
			        <Text style={styles.instructions}>
			          {instructions}
			        </Text>
			        <Text style={styles.helloWorld}>
			        	hello,world!
			        </Text>
			        <TouchableHighlight onPress={this._navigationTo.bind(this)}>
				        <Text style={{color:'green',marginTop:10}}>
				        	测试react-native-storage存储,读取数据
				        </Text>
			        </TouchableHighlight>
			        <TextInput
			          ref='input1'
			          style={styles.textinput}
			          clearButtonMode="while-editing"
			          underlineColorAndroid="transparent"
			          placeholder="Type here to translate!"
			          onChangeText={(text) => this.setState({text})}
			        />
			        
			        <TouchableHighlight onPress={this._getInputValue.bind(this)}>
			        	<Text style={styles.helloWorld}>点我获取input内容</Text>
			        </TouchableHighlight >
	      		</View>
      		</TouchableWithoutFeedback >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 10
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
	helloWorld: {
		textAlign: 'center',
		color: 'red',
		marginTop: 20
	},
	textinput: {
		height: 40,
		width: '100%',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgba(23,43,32,.2)',
		padding: 0
	}
});