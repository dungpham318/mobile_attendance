import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'


export default class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView>

        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>
            Login
          </Text>
          <TouchableOpacity
            style={{
              width: '30%',
              backgroundColor: '#108ec5',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "GoHome",
              })
            }}
          >
            <Text
              style={{
                color: '#ffffff'
              }}
            >
              Go to Home
            </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>

    )
  }

}