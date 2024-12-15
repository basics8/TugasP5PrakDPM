import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Tampilan Utama" />
        <Card.Content>
          <Text>Selamat datang di aplikasi!</Text>
          <Button mode="contained" onPress={() => navigation.navigate('Details')}>
            Pergi ke Detail
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
