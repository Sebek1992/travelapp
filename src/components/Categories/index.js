import React from 'react';
import { FlatList, Text, Pressable } from 'react-native';
import styles from '../Categories/styles';

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      style={{ marginRight: -32 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;

        return (
          <Pressable
            hitSlop={40}
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(Categories);
