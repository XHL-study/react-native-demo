import React, { Component} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

//渐变背景
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  main: {
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 15,
    paddingRight: 15,
    height: 56,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d6d7da',
  },
  mainView: {
    justifyContent: 'center',
    height: '100%',
  },
  mainTitleView: {
    flex: 1,
  },
  mainTitleText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
  },
  linearGradientStyle: {
    backgroundColor: 'rgba(255,255,255,1)',
    //backgroundColor:'rgba(255,255,255,0)',//透视图
    //position:'absolute',//定位。透视图
    top: 0,
    zIndex: 99,
    height: 56,
    width: '100%',
  }
});

const pageCfg = {
  linearGradient: {
    colors: ['white', 'white', 'white'],
    //colors: ['transparent','transparent','transparent'],//透视图
    start: {
      x: 0,
      y: 1
    },
    end: {
      x: 1,
      y: 0
    }
  },
}

export default class NavigationView extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    /*
    headerConfig
    {
    	headerTitle,
    	headerStyle,
    	headerLeft,
    	headerRight,
    	linearGradientColors
    	linearGradientStart,
    	linearGradientEnd
    	linearGradientStyle,
    }


    */
    let header = this.props.headerConfig;
    let headerStyle = [styles.main, header.headerStyle];
    let headerTitle = typeof (header.headerTitle) == 'string' ? (<Text style={ styles.mainTitleText }>
                                                                   { header.headerTitle }
                                                                 </Text>) : header.headerTitle;
    let headerLeft = header.headerLeft || null;
    let headerRight = header.headerRight || null;
    let linearGradientColors = header.linearGradientColors || pageCfg.linearGradient.colors;
    let linearGradientStart = header.linearGradientStart || pageCfg.linearGradient.start;
    let linearGradientEnd = header.linearGradientEnd || pageCfg.linearGradient.end;
    let linearGradientStyle = [styles.linearGradientStyle, header.linearGradientStyle];

    return (
      <LinearGradient
                      colors={ linearGradientColors }
                      start={ linearGradientStart }
                      end={ linearGradientEnd }
                      style={ linearGradientStyle }>
        <View style={ headerStyle }>
          <View style={ styles.mainView }>
            { headerLeft }
          </View>
          <View style={ [styles.mainView, styles.mainTitleView] }>
            { headerTitle }
          </View>
          <View style={ styles.mainView }>
            { headerRight }
          </View>
        </View>
      </LinearGradient>

      );
  }
}