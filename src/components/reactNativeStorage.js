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
	Button,
	Alert,
	TextInput,
	Keyboard,
	TouchableHighlight,
	TouchableWithoutFeedback,
	StatusBar,
} from 'react-native';

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('rgba(255,255,255,0)', true);
StatusBar.setBarStyle('dark-content', true);

type Props = {};
const RNAlert = Alert.alert;
export default class App extends Component < Props > {
	constructor(props) {
		super(props)
		this.state = {
			key: '',
			value: '',
		}
	}

	static navigationOptions = ({
		navigation
	}) => {
		console.warn(navigation);
		return {
			headerTitle: navigation.state.params.name, //前一个页面传来的对象的name属性
			headerTitleStyle: {
				alignSelf: 'center',
				textAlign: 'center',
				flex: 1,
				color: 'black',
			},
			headerRight: < View / > ,
			headerStyle: {
				paddingTop: 20,
				backgroundColor: 'red',
				elevation: .5, //立体阴影
			},
		}
	}

	componentWillMount() {
		//console.warn('barHeight:'+StatusBar.currentHeight);
	}

	componentWillUnmount() {}

	//失去焦点
	_InputBlur() {
		this.refs.input1.blur();
		this.refs.input2.blur();
	}

	//保存数据
	_setStorageForValue() {
		storage.save({
			key: this.state.key, // 注意:请不要在key中使用_下划线符号!
			id: '1001', // 注意:请不要在id中使用_下划线符号!
			data: this.state.value,
			expires: null, //过期时间，null为永不过期
		});
	}

	//读取数据
	_getStorageForValue() {
		storage.load({
			key: this.state.key,
			id: '1001'
		}).then(ret => {
			// 如果找到数据，则在then方法中返回
			// TODO;
			console.warn("数据:", ret);
		}).catch(err => {
			// 如果没有找到数据且没有sync方法，
			// 或者有其他异常，则在catch中返回
			console.warn(err.message);
			switch(err.name) {
				case 'NotFoundError':
					// TODO;
					console.warn("读取出错:" + NotFoundError);
					break;
				case 'ExpiredError':
					// TODO
					console.warn("读取出错" + ExpiredError);
					break;
			}
		})

	}

	render() {
		return(
			<TouchableWithoutFeedback onPress={this._InputBlur.bind(this)}>
				<View style={styles.container}>
			        <Text style={{color:'green',marginTop:10}}>
			        	这是第二页了,测试react-native-storage存储,读取数据
			        </Text>
			        
			        <TextInput
			          ref='input1'
			          style={styles.textinput}
			          clearButtonMode="while-editing"
			          underlineColorAndroid="transparent"
			          placeholder="请输入要保存的数据的key"
			          onChangeText={(key) => this.setState({key})}
			        />
			        
			         <TextInput
			          ref='input2'
			          style={styles.textinput}
			          clearButtonMode="while-editing"
			          underlineColorAndroid="transparent"
			          placeholder="请输入要保存的数据的value"
			          onChangeText={(value) => this.setState({value})}
			        />
			        
			        <View style={styles.inputView}>
				       
				       	<Button
						  onPress={this._setStorageForValue.bind(this)}
						  title="保存"
						  color="#274658"
						  accessibilityLabel="这是一个保存按钮"
						/>
				        
			        </View>
			        
			        <View style={styles.inputView}>
				        <Button
						  onPress={this._getStorageForValue.bind(this)}
						  title="读取"
						  color="#274658"
						  accessibilityLabel="这是一个读取按钮"
						  style={{borderWidth:.2,borderColor:'green',width:'80%'}}
						/>
			        </View>
			        
	      		</View>
      		</TouchableWithoutFeedback >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 0
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
	},
	inputView: {
		borderWidth: .2,
		borderColor: 'green',
		width: '80%',
		marginTop: 10,
		marginBottom: 10
	}
});