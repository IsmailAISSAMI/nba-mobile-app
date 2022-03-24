import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'
import Players from '../../screens/players'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
      <Stack.Screen name='Players' component={Players} />
      <Stack.Screen name='Details' component={Details} />

    </Stack.Navigator>
  )
}

export default HomeStack
