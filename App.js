import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';


//Import Area

import Sample from './src/Screens/Sample';

const App = DrawerNavigator({
  Sample:{screen: Sample}
});

export default App;
