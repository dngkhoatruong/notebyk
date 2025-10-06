// src/navigation/AppInitializer.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AppNavigator from './AppNavigator';
import { AppConfigService } from '../services/AppConfigService';
import { createTables } from '../database/Note/schema';
import { AppDispatch } from '../redux/store';

export default function AppInitializer() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function init() {
      try {
        // Load app config (your existing service)
        await AppConfigService.loadConfig();
        // Initialize SQLite tables and default categories
        await createTables();
      } catch (err) {
        console.error('Init error:', err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
