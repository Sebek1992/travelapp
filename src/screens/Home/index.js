import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do you" style={{ fontWeight: 'normal' }} />
        <Title text="you want to go" />
        <Title text="Explore Attrations" style={styles.subtitle}></Title>
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exlusive',
            'Others',
          ]}
        />
        <View style={styles.row}>
          <AttractionCard
            title="Entertaiment Park"
            subtitle="Rome"
            imageSrc="https://img2.10bestmedia.com/Images/Photos/393302/SkyFly-Soar-America_55_660x440.jpg"
          />
          <AttractionCard
            title="Entertaiment Park"
            subtitle="Rome"
            imageSrc="https://img2.10bestmedia.com/Images/Photos/393302/SkyFly-Soar-America_55_660x440.jpg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
