import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './Styles';

const data = [
    { title: '1 элемент', key: '1' },
    { title: '2 элемент', key: '2' },
    { title: '3 элемент', key: '3' },
];

interface MaterialCardProps {
    title: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ title }) => (
    <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

export const ListScreen = () => (
    <View style={styles.container}>
        <FlatList data={data}
            style={styles.flatList}
            renderItem={({ item }) => (
                <MaterialCard title={item.title} />
            )}
            keyExtractor={item => item.key}
        />
    </View>
);
