"顶部导航栏"
import { StackNavigator } from 'react-navigation';
import { StatusBar, Animated, Easing } from 'react-native';
//使用react-native-storage，存储数据
import '../utils/reactNativeStorage'

//转场动画
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//转场动画-微调
//StackViewTransitionConfigs.js

//导航栏
const barBg = 'rgba(255,255,255,0)',
	navBg = 'white',
	barStyle = 'dark-content';
//<StatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor(barBg, true);
StatusBar.setBarStyle(barStyle, true);

//页面
import Main from '../../App';
import Main2 from '../components/App';

const screens = {
	Main: {
		screen: Main,
		navigationOptions: {
			header: null,
		}
	},
	Main2: {
		screen: Main2
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
			backgroundColor: navBg,
			elevation: .5, //立体阴影
		},
	},
	mode: 'card',
	transitionConfig: () => ({
		transitionSpec: {
			duration: 300,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
		},
		//转场动画
		screenInterpolator: StackViewStyleInterpolator.forHorizontal,
	})
});

export default Navigator;