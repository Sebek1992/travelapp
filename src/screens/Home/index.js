import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Title from '../../components/Title';

function Home() {
  return (
    <SafeAreaView>
      <View>
        <Title text="My First Component" />
        <Title text="Default Text" />
      </View>
    </SafeAreaView>
  );
}

export default Home;
