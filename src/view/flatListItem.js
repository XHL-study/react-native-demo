import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  itemStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'red',
    justifyContent: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  }
})

export default class FlatListItem extends React.PureComponent {
  _onPressItem = () => {
    this.props.onPressItem(this.props.item);
  }

  render() {
    let item = this.props.item;
    return (
      <TouchableNativeFeedback
                               onPress={ this._onPressItem }
                               background={ TouchableNativeFeedback.SelectableBackground() }>
        <View style={ styles.itemStyle }>
          <Text>
            { item.title }
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}