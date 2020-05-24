import React from 'react';
import {Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/instagram.png';

import Feed from './Feed/index';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={Feed} options={{ 
                    headerTitle: <Image source={logo}/>,
                    headerTitleStyle: { alignSelf: 'center' },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}