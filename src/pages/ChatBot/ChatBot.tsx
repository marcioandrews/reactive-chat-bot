import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChatBotBody } from 'src/componets/ChatBot/ChatBotBody';

export function ChatBot() {
  return (
    <View style={styles.container}>
      <ChatBotBody />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    width: '100%',
  },
});
