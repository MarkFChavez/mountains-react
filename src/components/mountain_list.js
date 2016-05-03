import React, {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

var _ = require('lodash');
var mountains = require('../commons/mocked_data');

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: ds.cloneWithRows(mountains),
    }
  },

  render: function() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderMountain}
      />
    )
  },

  renderMountain: function(mountain) {
    return (
      <TouchableWithoutFeedback
        underlayColor='gray'
        onPress={this.onPress}
      >
        <Image
          style={styles.backgroundImage}
          source={{uri: mountain.image_url}}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>
              {_.toUpper(mountain.name)}
            </Text>
          </View>
        </Image>
      </TouchableWithoutFeedback>
    )
  },

  onPress: function() {
    // fetch
    // 1) api call
    // 2) navigation change
  }
});

var styles = StyleSheet.create({
  listView: {
    marginTop: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 180,
  },
  labelWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: 3,
  }
});
