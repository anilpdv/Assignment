import React from 'react';
import {View, FlatList} from 'react-native';
import HomeworkItem from './HomeworkItem';
import {data} from '../../lib/mockData';

export default function HomeworkList(props) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <HomeworkItem item={item} />}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
}
