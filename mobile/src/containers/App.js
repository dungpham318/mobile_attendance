import React from 'react';
import { Button, Image, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon1 from "react-native-vector-icons/FontAwesome5"
import { Icon, Badge } from "react-native-elements"

import Login from '../screens/Login'
import Home from '../screens/Home'
import HistoryAttendance from '../screens/HistoryAttendance'
import Profile from '../screens/Profile'


const homeStackNavigator = createStackNavigator(
  {
    Home: Home,
    HistoryAttendance: HistoryAttendance,
    Profile: Profile
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: headerRightDefault(navigation),
      headerLeft: headerLeftDefault(navigation)
    })
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    HistoryAttendance: {
      screen: HistoryAttendance,
      navigationOptions: {
        title: "HistoryAttendance"
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home`;
        } else if (routeName === "HistoryAttendance") {
          iconName = `clock`;
        } else if (routeName === "Profile") {
          iconName = `user`;
        }
        let iconColor = "#ced2d9";
        if (tintColor === "#108ec5") {
          iconColor = "#ffffff";
        } else {
          iconColor = "#ced2d9";
        }
        return (
          <View
            style={{
              height: "90%",
              width: "60%",
              backgroundColor: tintColor,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40
            }}
          >
            <Icon1
              name={iconName}
              size={20}
              color={iconColor}
              solid
            />
          </View>
        );
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let label;
        switch (routeName) {
          case "Home":
            return (label = focused ? null : (
              <Text style={{ color: '#ced2d9' }}>Trang chủ</Text>
            ));
          case "HistoryAttendance":
            return (label = focused ? null : (
              <Text style={{ color: '#ced2d9' }}>Lịch sử điểm danh</Text>
            ));
          case "Profile":
            return (label = focused ? null : (
              <Text style={{ color: '#ced2d9' }}>Thông tin</Text>
            ));
        }
        return label;
      },
      headerRight: headerRightDefault(navigation),
      headerLeft: headerLeftDefault(navigation)
    }),
    tabBarOptions: {
      activeTintColor: "#108ec5",
      inactiveTintColor: "#ffffff",
      labelPosition: "below-icon",
      tabStyle: {
        alignItems: "center",
        justifyContent: "center"
      }
    },

  }
)
const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
  {
    Init: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,

    },
    HistoryAttendance: {
      screen: HistoryAttendance,

    },
    Profile: {
      screen: Profile,

    },
    GoHome: {
      screen: TAB,
      navigationOptions: navigation => defaultNavigation(navigation.navigation)
    }
  },
  {
    initialRouteName: "Init",
    mode: 'card',
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: headerRightDefault(navigation),
      headerLeft: headerLeftDefault(navigation)
    })
  })

const defaultNavigation = navigation => {
  const index = navigation.state.index
  var title = ""
  // console.log(navigation.state)
  switch (index) {
    case 0:
      title = "Trang chủ";
      break;
    case 1:
      title = "Lịch sử điểm danh";
      break;
    case 2:
      title = "Thông tin";
      break;
  }
  return {
    title: title,
    headerTitleStyle: {
      flex: 1,
      color: '#335272',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    },
    headerRight: headerRightDefault(navigation),
    // headerRight: <UpdateGeneralNotificationContainer navigation={navigation} styles={styles} />,
    headerLeft: headerLeftDefault(navigation)
  };
}

const headerLeftDefault = (navigation, styles) => {
  return (
    <View style={{
      width: Dimensions.get("window").width / 4,
      height: Dimensions.get("window").width / 8,
      justifyContent: "center",
      alignItems: "flex-start"
    }}>
      {/* <Image
        source={logoFPT}
        style={styles.logoImage}
        containerStyle={styles.containerImage}
      /> */}
      <Text>
      </Text>
    </View>
  )
}

const headerRightDefault = (navigation, styles) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 10
      }}
    >
      <TouchableOpacity
        onPress={() => {

        }}
        style={{ marginRight: 10 }}
      >
        <Icon
          name="md-notifications-outline"
          type="ionicon"
          color="#ced2d9"
          size={30}
          containerStyle={{
            marginHorizontal: 10,
            justifyContent: "center"
          }}
        />
        <Badge
          value={0}
          status="error"
          containerStyle={{ position: "absolute", right: -4 }}
        />
      </TouchableOpacity>
    </View>
  )
};

export default createAppContainer(RootStack);
