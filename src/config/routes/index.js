import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import PlayersStack from './playersStack'

const BottomTab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen options={{ headerShown: false}} name='HomeStack' component={HomeStack} />
        <BottomTab.Screen options={{ headerShown: false}} name='PlayersStack' component={PlayersStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
