import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Sample extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            
        }
    }

    
  render() {
    return (
      <View style={styles.container}>
        <Icon name="group-work" size={80} color='orange' />
        <Text style={styles.welcome}>
          Bienvenidos a WorkaMobile
        </Text >
        <Text style={styles.instructions}>
          Este sera el entorno de desarrollo de este proyecto
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
