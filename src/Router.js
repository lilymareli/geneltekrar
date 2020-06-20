import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { CharDetail, CharList, Compare } from './pages';

const Stack = createStackNavigator()

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="CharList"
          component={CharList}
          options={{
            title: "Karakter Listesi"
          }}
        />

        <Stack.Screen
          name="CharDetail"
          component={CharDetail}
          options={{
            title: "Karakter Detay"
          }}
        />

        <Stack.Screen
          name="Compare"
          component={Compare}
          options={{
            title: "Kıyasla"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;