// import {StackNavigationProp} from '@react-navigation/stack';
// import {RouteProp} from '@react-navigation/native';

export enum Screens {
  Main = 'Main',
  Home = 'Home',
  Authorization = 'Authorization',
  About = 'About',
  Profile = 'Profile',
}

export type RootStackParamList = {
  Main: undefined;
  Authorization: undefined;
};
//
// type AboutScreenRouteProp = RouteProp<RootStackParamList, Screens.About>;
// type AboutScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   Screens.About
// >;
//
// export type TNavAboutScreenProps = {
//   route: AboutScreenRouteProp;
//   navigation: AboutScreenNavigationProp;
// };
//
// type HomeScreenRouteProp = RouteProp<RootStackParamList, Screens.Home>;
// type HomeScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   Screens.Home
// >;
//
// export type TNavHomeScreenProps = {
//   route: HomeScreenRouteProp;
//   navigation: HomeScreenNavigationProp;
// };
