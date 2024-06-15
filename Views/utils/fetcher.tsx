// src/hooks/useFetchData.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FetchDataResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useFetchData = <T,>(url: string | null): FetchDataResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!url) return;

            setLoading(true);
            setError(null);
            try {
                const cachedData = await AsyncStorage.getItem(url);
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                }

                const response = await axios.get<T>(url);
                setData(response.data);
                await AsyncStorage.setItem(url, JSON.stringify(response.data));
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
