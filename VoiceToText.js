import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceToText = ({ onVoiceResult }) => {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    setStarted('√');
  };

  const onSpeechRecognized = (e) => {
    setRecognized('√');
  };

  const onSpeechResults = (e) => {
    setResults(e.value);
    if (onVoiceResult) {
      onVoiceResult(e.value[0]);
    }
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US');
      setRecognized('');
      setStarted('');
      setResults([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button title="Start Voice Recognition" onPress={startRecognizing} />
      <Text>Started: {started}</Text>
      <Text>Recognized: {recognized}</Text>
      <Text>Results: {results.join(', ')}</Text>
    </View>
  );
};

export default VoiceToText;
