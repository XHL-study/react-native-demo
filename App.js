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
	StatusBar,
	BackHandler
} from 'react-native';

import ScreenUtil from './src/utils/screenUtil'

//渐变背景
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: 0,
	},
	linearGradient: {
		flex: 1,
	},
	headerTitleStyle: {
		alignSelf: 'center',
		flex: 1,
		textAlign: 'center',
		color: 'black'
	},
});

const pageCfg = {
	bar: {
		barBg: 'rgba(255,255,255,0)',
		barStyle: 'dark-content',
		barTranslucent: true,//沉浸式
		barBackgroundColorAnimate: false,
		barStyleColorAnimate: false,
	},
	page: {
		title: '首页',
		viewPaddingTop: 0,
	},
	linearGradient: {
		colors: ['red', 'white', 'green']
	},
}
//<StatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>

type Props = {};
let navigate;
export default class App extends Component < Props > {

	constructor(props) {
		super(props)
		this.state = {
			text: '',
		}
		navigate = this.props.navigation.navigate;
		//此处设置状态栏，防止按返回推出应用后再次进入状态栏效果设置失败。
		StatusBar.setTranslucent(pageCfg.bar.barTranslucent); //沉浸式
		StatusBar.setBackgroundColor(pageCfg.bar.barBg, pageCfg.bar.barBackgroundColorAnimate);
		StatusBar.setBarStyle(pageCfg.bar.barStyle, pageCfg.bar.barStyleColorAnimate);
		pageCfg.bar.viewPaddingTop = ScreenUtil.PAGE_PADDING_TOP(pageCfg.bar.barTranslucent);
		console.warn("PAGE_PADDING_TOP: ", pageCfg.bar.viewPaddingTop);
	}

	static navigationOptions = ({
		navigation
	}) => {
		let view = null;
		let state = navigation.state;
		let title = pageCfg.title;
		console.warn('navigationParams：', navigation)
		if(state.params) {
			title = title.params.name;
			view = (<View />);
		}
		return({
			headerTitle: title, //前一个页面传来的对象的name属性
			headerTitleStyle: styles.headerTitleStyle,
			headerRight: view,
			header: state.params ? '' : null, //是否显示header
		})
	}

	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', function() {
			// this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
			// Typically you would use the navigator here to go to the last state.
			console.warn('返回')
			return false;
		});
	}

	componentDidMount() {}

	componentWillUnmount() {
		console.warn('卸载组件');
		BackHandler.removeEventListener('hardwareBackPress');
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
			<TouchableWithoutFeedback>
				<LinearGradient colors={pageCfg.linearGradient.colors} style={styles.linearGradient}>
					<View style={[styles.container,{paddingTop:pageCfg.bar.viewPaddingTop}]}>
					    <Text>{'内容'}</Text>
				        
		      		</View>
	      		</LinearGradient>
      		</TouchableWithoutFeedback >
		);
	}
}