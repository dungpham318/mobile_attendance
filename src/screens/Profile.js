import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


export default class Profile extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView>

        <View>
          <Text>
            Profile
          </Text>
        </View>

      </SafeAreaView>

    )
  }

}