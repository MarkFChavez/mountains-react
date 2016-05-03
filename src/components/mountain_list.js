import React, {
  View,
  Text,
  StyleSheet,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text> Mountains </Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
