import React from "react";
import ForgotPasswordScreen from "../AuthNavigator/ForgotPasswordScreen";
import SignupScreen from "../AuthNavigator/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../AuthNavigator/LoginScreen";
import EditProfile from "./EditProfile";
import BottomAppBar from "../BottomNavBar";
import HistoryScreen from "./HistoryScreen";
import ChooseStation from "./ChooseStation";
import LegalPoliciesScreen from "./LegalPoliciesScreen";
import HelpSupportScreen from "./HelpSupportScreen";
import TravelTimes from "./TravelTimes";
import ProfileScreen from "./ProfileScreen";
import RatingsScreen from "./RatingsScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import TrackScreen from "./TrackScreen";
import NotificationsScreen from "./NotificationScreen";
import QRCode from "./QRcode";
const MainStack = createNativeStackNavigator();

//main navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: true }}
      >
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="ForgetPassword"
          component={ForgotPasswordScreen}
        />
        <MainStack.Screen name="SignUp" component={SignupScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="History" component={HistoryScreen} />
        <MainStack.Screen name="Home" options={{ headerLeft: null, headerBackVisible: false }} component={ChooseStation} />
        <MainStack.Screen name="TravelTimes" component={TravelTimes} />
        <MainStack.Screen name="Edit Profile" component={EditProfile} />
        <MainStack.Screen name="Ratings" component={RatingsScreen} />
        <MainStack.Screen name="Confirmation" component={ConfirmationScreen} />
        <MainStack.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
        <MainStack.Screen name="TrackScreen" component={TrackScreen} />
        <MainStack.Screen name="QRcode" component={QRCode} />
        <MainStack.Screen
          name="Legal and Policies"
          component={LegalPoliciesScreen}
        />
        <MainStack.Screen name="Help & Support" component={HelpSupportScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
