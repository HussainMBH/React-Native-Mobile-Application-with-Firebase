// CharacterDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterDetailScreen = ({ route }) => {
    const { characterId } = route.params;
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                // Replace with your fetch logic based on characterId
                const response = await fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Failed to fetch character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (!character) {
        return (
            <View style={styles.centered}>
                <Text>Loading character details...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Character Details</Text>
            <Image source={{ uri: character.imageUrl }} style={styles.characterImage} />
            <Text>First Name: {character.firstName}</Text>
            <Text>Last Name: {character.lastName}</Text>
            <Text>Title: {character.title}</Text>
            <Text>Family: {character.family}</Text>
            {/* Add more details as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CharacterDetailScreen;
