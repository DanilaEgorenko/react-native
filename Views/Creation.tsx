// src/CreationScreen.tsx

import { View, TextInput, TouchableOpacity, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './Styles';
import React, { useState } from 'react';
import useFetchData from './utils/fetcher';

export const CreationScreen = () => {
    const [inputText, setInputText] = useState('https://jsonplaceholder.typicode.com/posts');
    const [url, setUrl] = useState<string | null>(null);
    const { data, loading, error } = useFetchData<any>(url);

    const handlePress = () => {
        setUrl(inputText);
    };

    const handleBack = () => {
        setUrl(null);

    };

    return (
        <View style={styles.container}>
            {url === null ? (
                <>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputText}
                        value={inputText}
                        placeholder="Введите URL"
                        keyboardType="url"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handlePress}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>Отправить</Text>
                    </TouchableOpacity>
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                </>
            ) : (
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.button} onPress={handleBack}>
                        <Text style={styles.buttonText}>Назад</Text>
                    </TouchableOpacity>
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : error ? (
                        <Text style={styles.errorText}>{error.message}</Text>
                    ) : (
                        <Text style={styles.responseText}>{JSON.stringify(data, null, 2)}</Text>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

const additionalStyles = StyleSheet.create({
    buttonDisabled: {
        backgroundColor: 'gray',
    },
});
