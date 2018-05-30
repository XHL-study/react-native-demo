import React from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import IconList from "react-native-vector-icons/dist/glyphmaps/FontAwesome";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  items: {
    height: 100,
    width: '33.333%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    backgroundColor: 'white',
  },
  item: {
    alignSelf: 'center',
    color: 'black',
  }
})

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class Icons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      iconListData: Object.getOwnPropertyNames(IconList) || [],
      numColumns: 3,
      initialNumToRender: 10,
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.name,
      headerRight: <View></View>,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        color: 'black',
      },
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  _renderItem = ({item}) => {
    return (
      <View
            key={ item + '_key' }
            style={ styles.items }>
        <Icon
              name={ item }
              size={ 26 }
              color='#cccccc'></Icon>
        <Text style={ styles.item }>
          { item + '' }
        </Text>
      </View>
    )
  }

  _keyExtractor = (item, i) => {
    return 'key_' + i
  }

  _ItemSeparatorComponent = () => {
    return null
  }

  render() {

    return (
      <AnimatedFlatList
                        style={ styles.main }
                        data={ this.state.iconListData }
                        extraData={ this.state }
                        numColumns={ this.state.numColumns }
                        initialNumToRender={ this.state.initialNumToRender }
                        renderItem={ this._renderItem }
                        keyExtractor={ this._keyExtractor }
                        ItemSeparatorComponent={ this._ItemSeparatorComponent } />
    )
  }
}