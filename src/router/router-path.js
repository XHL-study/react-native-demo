
import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
//使用react-native-storage，存储数据
import '../utils/reactNativeStorageUtil'

//转场动画
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//转场动画-微调
//StackViewTransitionConfigs.js

//页面
import App from '../../App';
import Flatlist from '../components/flatlist';
import ReactNativeStorage from '../components/reactNativeStorage';

const screens = {
	App: {
		screen: App,
	},
	Flatlist: {
		screen: Flatlist
	},
	ReactNativeStorage: {
		screen: ReactNativeStorage
	},
};

const Navigator = StackNavigator(screens, {
	navigationOptions: {
		headerTintColor: '#333333',
		headerBackTitle: null, //ios右侧返回不显示标题
		showIcon: true,
		swipeEnabled: false,
		animationEnabled: false,
		headerStyle: {
			paddingTop: 20,
			backgroundColor: 'white',
			elevation: .5, //立体阴影
			//position:'absolute',//定位。
			//top:0,
			//zIndex:99,
			//width:'100%',
		},
		headerTintColor:'blue',
	},
	mode: 'card',
	transitionConfig: () => ({
		transitionSpec: {
			duration: 300,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
		},
		//转场动画--forHorizontal,forVertical,forFadeFromBottomAndroid
		screenInterpolator: StackViewStyleInterpolator.forHorizontal,
	})
});

export default Navigator;