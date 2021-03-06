import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const TopHeader = (props) => {
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action
        icon="arrow-left-drop-circle-outline"
        style={styles.green}
        onPress={_handleSearch}
      />
      <Appbar.Content title="Assignment" style={styles.green} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="filter-outline" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    backgroundColor: 'white',
  },
  green: {
    color: '#059669',
  },
});

export default TopHeader;
