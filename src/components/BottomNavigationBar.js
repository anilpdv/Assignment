import * as React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import TabMenu from './TabMenu';

const Home = () => <Text>Home</Text>;
const Notes = () => <TabMenu />;
const Profile = () => <Text>Profile</Text>;

const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'notes', icon: 'note'},
    {key: 'home', icon: 'home'},
    {key: 'profile', icon: 'face-profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    notes: Notes,
    profile: Profile,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        style={styles.navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
  },
});
export default BottomNavigationBar;
