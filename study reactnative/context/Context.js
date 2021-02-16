//진입점

import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';

const ThemeContext = React.createContext();

//parent
class Parent extends React.Component {
  state = {themeValue: 'light'};

  toggleThemeValue = () => {
    let value = this.state.themeValue === 'dark' ? 'light' : 'dark';
    this.setState({themeValue: value});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          themeValue: this.state.themeValue,
          toggleThemeValue: this.toggleThemeValue,
        }}>
        <View style={styles.container}>
          <Text>hello world</Text>
        </View>
        <Child1 />
      </ThemeContext.Provider>
    );
  }
}

//child
const Child1 = () => <Child2 />;
//부모 container와 child2에는 props가 전달되지 않음을 보여준다.

const Child2 = () => (
  <ThemeContext.Consumer>
    {(value) => (
      <View
        style={[
          styles.container,
          value.themeValue === 'dark' && {backgroundColor: 'black'},
        ]}>
        <Text style={styles.text}>hello from component2</Text>
        <Text style={styles.text} onPress={value.toggleThemeValue}>
          toggle
        </Text>
      </View>
    )}
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 22,
    color: '#666',
  },
});

export default Parent;
