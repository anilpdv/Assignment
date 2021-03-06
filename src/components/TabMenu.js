import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {tabMenus} from '../lib/mockData';
import HomeworkList from './Homeworks/HomeworkList';
export default function TabMenu() {
  const [activeIndex, setIsActive] = React.useState(0);

  return (
    <View>
      <View style={styles.flexContainer}>
        {tabMenus.map((menu, index) => (
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.text,
              color: index === activeIndex ? '#7cb9d1' : 'black',
              textDecorationLine: index === activeIndex ? 'underline' : 'none',
            }}
            onPress={() => setIsActive(index)}
            key={menu}>
            {menu}
          </Text>
        ))}
      </View>
      {getComponentByTab(tabMenus[activeIndex])}
    </View>
  );
}

const getComponentByTab = (tab) => {
  switch (tab) {
    case 'To Do':
      return <HomeworkList />;
    default:
      return <Text>{tab}</Text>;
  }
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.8,
    fontWeight: 'bold',
    textDecorationStyle: 'double',
  },
});
