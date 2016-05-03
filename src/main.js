import React, {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

var MountainList = require('./components/mountain_list');

var ROUTES = {
  mountains: MountainList,
}

module.exports = React.createClass({
  render: function() {
    return <Navigator
      style={styles.container}
      initialRoute={{name: "mountains"}}
      renderScene={this.renderScene}
      configureScene={() => { return Navigator.SceneConfigs.HorizontalSwipeJump; }}
    />
  },

  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
