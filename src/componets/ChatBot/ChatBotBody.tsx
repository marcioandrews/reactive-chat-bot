import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function ChatBotBody() {
    return (
        <Text style={styles.text}>
          Teste de mensagem...
        </Text>
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#f5f5f5',
  }
});