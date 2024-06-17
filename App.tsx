import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { APIScreen } from './Views/API'
import { ListScreen } from './Views/List'
import { CreationScreen } from './Views/Creation'
import { MediaScreen } from './Views/Media'

const CreationIcon = require('./assets/creation_icon.png');
const ListIcon = require('./assets/list_icon.png');
const APIIcon = require('./assets/api_icon.png');
const MediaIcon = require('./assets/media_icon.png');

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            if (route.name === 'Создать') {
              iconSource = CreationIcon
            } else if (route.name === 'Список') {
              iconSource = ListIcon
            } else if (route.name === 'API') {
              iconSource = APIIcon
            } else if (route.name === 'MEDIA') {
              iconSource = MediaIcon
            }
            return <Image source={iconSource} style={{ width: 32, height: 32 }} />;
          },
        })}
      >
        <Tab.Screen name="Создать" component={CreationScreen} />
        <Tab.Screen name="Список" component={ListScreen} />
        <Tab.Screen name="API" component={APIScreen} />
        <Tab.Screen name="MEDIA" component={MediaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
