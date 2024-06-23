import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { styles } from './Styles';

export const MediaScreen = () => {
    const [media, setMedia] = useState<Asset | null>(null);

    const selectMedia = () => {
        launchImageLibrary({ mediaType: 'mixed' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.assets && response.assets.length) {
                setMedia(response.assets[0]);
            }
        });
    };

    return (
        <View style={styles.container} >
            <Button title="Выберите медиа" onPress={selectMedia} />
            {media && (
                media.type?.startsWith('image/') ? (
                    <Image source={{ uri: media.uri }} style={styles.media} />
                ) : (
                    <Video source={{ uri: media.uri }} style={styles.media} controls={true} />
                )
            )}
        </View>
    );
};
