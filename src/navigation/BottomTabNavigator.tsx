import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BottomTabParamList, TAB_BAR } from './types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import SummaryScreen from '../screens/Summary';
import HomeScreen from '../screens/Home';
import ICONS from '../assets/icons';

import { BaseIcon } from '../components/BaseIcon';
import {
  BOTTOM_TAB_HEIGHT,
  BottomContainer,
} from '../components/BottomContainer';
import { AppRouter } from './AppRouter';
import SCREEN_KEYS from '../constants/screenKeys';
import { COLORS } from '../constants/colors';
import { NoteText } from '../components/NoteText';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBarWrapper}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const CustomTabBarWrapper = (props: BottomTabBarProps) => {
  return <CustomTabBar {...props} />;
};

const CustomTabBar = ({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const styles = createStyles(insets);

  const TAB_BAR_ICON = [
    {
      name: TAB_BAR.HOME,
      iconActive: ICONS.tabHomeActive,
      iconInactive: ICONS.tabHomeInactive,
    },
    {
      name: TAB_BAR.SUMMARY,
      iconActive: ICONS.tabSummaryActive,
      iconInactive: ICONS.tabSummaryInactive,
    },
  ];

  const renderTabBar = () => {
    return state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const { options } = descriptors[route.key];

      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <View key={index} style={styles.tabContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.buttonTab }}
            disabled={isFocused}
          >
            <BaseIcon
              source={
                isFocused
                  ? TAB_BAR_ICON[index].iconActive
                  : TAB_BAR_ICON[index].iconInactive
              }
              width={50}
              height={47}
            />
            {/* <NoteText variant="title" style={styles.title} color={color}> */}

            <NoteText
              variant="title"
              style={[styles.label]}
              color={isFocused ? COLORS.ACTIVE_COLOR : COLORS.INACTIVE_COLOR}
            >
              {label as String}
            </NoteText>
          </TouchableOpacity>
        </View>
      );
    });
  };

  const renderButtonAddNote = () => {
    return (
      <View style={styles.buttonAdd}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_KEYS.NEW_NOTE);
          }}
        >
          <BaseIcon source={ICONS.add} width={36} height={36} />
        </TouchableOpacity>
        <View style={styles.spacer}></View>
      </View>
    );
  };

  return (
    <BottomContainer>
      {renderTabBar()}
      {renderButtonAddNote()}
    </BottomContainer>
  );
};

export default BottomTabNavigator;

const createStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    tabContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: BOTTOM_TAB_HEIGHT,
      paddingHorizontal: 30,
    },
    buttonTab: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    buttonAdd: {
      position: 'absolute',
      alignSelf: 'center',
    },
    label: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 6,
    },
    spacer: {
      height: insets.bottom,
    },
  });
