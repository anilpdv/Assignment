import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export default function HomeworkItem({item}) {
  return (
    <View style={styles.container}>
      <Card elevation={4} style={styles.card}>
        <View style={styles.flexContainer}>
          <Card.Content>
            <View style={styles.paddingBottom}>
              <Title style={{...styles.title, color: item.color}}>
                {item.title}
              </Title>
              <Text style={styles.text}>{item.subHeading}</Text>
            </View>

            <Paragraph style={styles.paragraph}>{item.date}</Paragraph>
          </Card.Content>

          <ImageBackground
            imageStyle={styles.imageStyle}
            style={styles.cover}
            source={item.imagePath}
          />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {padding: 20},
  card: {
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.8,
  },
  paddingBottom: {
    paddingBottom: 18,
    paddingTop: 20,
  },
  title: {
    paddingBottom: 3,
    letterSpacing: 0.8,
  },
  paragraph: {
    fontSize: 12,
    color: 'grey',
  },
  cover: {
    width: 200,
    height: 150,
  },
  imageStyle: {
    borderRadius: 20,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
