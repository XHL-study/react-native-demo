/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { Platform, Animated, StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableWithoutFeedback, StatusBar, BackHandler, FlatList } from 'react-native';

import ScreenUtil from './src/utils/screenUtil';
//导航栏view
import NavView from './src/view/navigationView';
//渐变背景
import LinearGradient from 'react-native-linear-gradient';
//数据
import AppData from './src/data/appData';
import GetData from './src/utils/axiosUtil';
import { LoginSms } from './src/config/appConfig';
import FlatListItem from './src/view/flatListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  AnimatedFlatList: {
    width: '100%',
  }
});

const pageCfg = {
  bar: {
    barBg: 'rgba(255,255,255,0)',
    barStyle: 'dark-content', //dark
    barTranslucent: true, //沉浸式
    barBackgroundColorAnimate: false,
    barStyleColorAnimate: false,
  },
  page: {
    title: '首页',
    viewPaddingTop: 0,
    hasHeader: false,
  },
  linearGradient: {
    colors: ['white', 'white', 'white']
  },
}
//<StatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>

type Props = {};
let navigate;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export default class App extends React.PureComponent <Props> {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      flatListData: [],
    }
    navigate = this.props.navigation.navigate;
    //设置状态栏
    StatusBar.setTranslucent(pageCfg.bar.barTranslucent); //沉浸式
    StatusBar.setBackgroundColor(pageCfg.bar.barBg, pageCfg.bar.barBackgroundColorAnimate);
    StatusBar.setBarStyle(pageCfg.bar.barStyle, pageCfg.bar.barStyleColorAnimate);
  }

  static navigationOptions = ({navigation}) => {

    const onLeftP = navigation.getParam('onLeftPress', '');
    //console.warn('onLeftP',onLeftP);

    let header = <NavView
                          name="自定义导航器"
                          headerConfig={ { headerTitle: '首页', 
                          // headerRight:(<Button title="点我" onPress={()=>onLeftP(navigation)}/>),  
                          } } />;
    pageCfg.page.hasHeader = header !== null;

    pageCfg.page.viewPaddingTop = ScreenUtil.PAGE_PADDING_TOP(pageCfg.page.hasHeader);
    //console.warn("PAGE_PADDING_TOP: ", pageCfg.page.viewPaddingTop);

    return ({
      header: header, //是否显示header
      linearGradientStyle: {
        backgroundColor: 'rgba(255,255,255,0)',
      }
    })
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      //console.warn('返回按钮')
      return false;
    });

    //获取数据
    this._data();
  }

  componentDidMount() {
    let that = this;
    setTimeout(function() {

      that.props.navigation.setParams({
        onLeftPress: that._onLeftPress,
        pt: 'd',
      })
    },);
  }

  componentWillUnmount() {
    //console.warn('卸载监听');
    BackHandler.removeEventListener('hardwareBackPress');
  }

  _onLeftPress(nav) {
    alert('点了左边');
    nav.setParams({
      pt: 'dt',
    })
  }

  //FlatList
  _data = () => {
    let dt = AppData();
    this.setState({
      flatListData: dt,
    })
  }

  _onPressItem = (item) => {
    //console.warn('onPressItem-id:',routerName);
    navigate(item.routerName, {
      name: "组件：" + item.title
    });
  }

  _renderItem = ({item}) => {
    return (
      <FlatListItem
                    item={ item }
                    onPressItem={ this._onPressItem } />
    )
  }

  _keyExtractor = (item, i) => {
    return 'key_' + i
  }


  _ItemSeparatorComponent = (item) => {
    return <View style={ { height: 2 } }></View>
  }

  render() {

    //<SdtatusBar translucent={true} backgroundColor="white" barStyle ='dark-content'/>
    return (
      <LinearGradient
                      colors={ pageCfg.linearGradient.colors }
                      style={ styles.linearGradient }>
        <View style={ [styles.container, { paddingTop: pageCfg.page.viewPaddingTop }] }>
          <AnimatedFlatList
                            style={ styles.AnimatedFlatList }
                            data={ this.state.flatListData }
                            numColumns={ 1 }
                            renderItem={ this._renderItem }
                            keyExtractor={ this._keyExtractor }
                            ItemSeparatorComponent={ this._ItemSeparatorComponent } />
        </View>
      </LinearGradient>
      );
  }
}