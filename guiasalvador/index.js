
import React, { Component} from 'react';
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import HorizontalScrollView from './components/HorizontalScrollView'; // importar a tela 
AppRegistry.registerComponent(appName, () => HorizontalScrollView); //abrir a tela horizontal

//import testebutton from './components/testebutton';
//AppRegistry.registerComponent(appName, () => testebutton);