import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Players from '../../screens/players'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const PlayersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Players' component={Players} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default PlayersStack
