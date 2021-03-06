import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default LoginStack
