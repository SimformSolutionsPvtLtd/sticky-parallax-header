import type { FC } from 'react';
import React, { memo } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { ItemType } from '../../assets/data/tabbedSections';
import colors from '../../constants/colors';

const ITEM_HEIGHT = 120;
const ITEM_MARGIN_VERTICAL = 5;

export const TABBED_SECTION_ITEM_HEIGHT = ITEM_HEIGHT + 2 * ITEM_MARGIN_VERTICAL;

export const TabbedSectionItem: FC<ItemType> = memo(({ imageUrl, title, subtitle }) => {
  return <SafeAreaView edges={['left', 'right']} style={styles.container}>
    <View style={styles.itemContainer}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        {/** 
         * We can't use react-native-fast-image with Expo Go, and there is no cache with default Image component on Android 
         * 
         * So instead, just render it on iOS, to not slow down underlying SectionList
         */}
        {Platform.OS !== 'android' && <Image
          resizeMode="cover"
          source={{ uri: imageUrl, cache: 'force-cache' }}
          style={styles.itemImage}
        />}
      </View>
    </View>
  </SafeAreaView>;
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: TABBED_SECTION_ITEM_HEIGHT,
    justifyContent: 'center',
    padding: 5,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 3,
    elevation: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  itemImage: {
    height: 90,
    width: 90,
  },
  itemImageContainer: {
    flex: 0.3,
  },
  itemSubtitle: {
    color: colors.darkMint,
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
  },
  itemTitle: {
    color: colors.secondaryGreen,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'left',
  },
  itemTitleContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    flex: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
