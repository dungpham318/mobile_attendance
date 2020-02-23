import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


export default class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView>

        <View>
          <Text>
            Home
          </Text>
        </View>

      </SafeAreaView>

    )
  }

}