import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Button, View, Text, FlatList, Image, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import auth from "../services/firebaseAuth";
import { fetchCharacters } from "../services/thronesApi";

const DashboardScreen = ({ navigation }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data);
            } catch (error) {
                console.error("Failed to load characters: ", error);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate('Login');
            })
            .catch(error => {
                console.error("Failed to sign out: ", error);
            });
    };

    const renderCharacter = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { characterId: item.id })}
        >
            <View style={styles.characterCard}>
                <Image source={{ uri: item.imageUrl }} style={styles.characterImage} />
                <Text style={styles.characterName}>{item.fullName}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.centered}>
                <Text>Loading characters...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to Dashboard</Text>
            
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCharacter}
                contentContainerStyle={styles.list}
            />
            <Button onPress={handleLogout} title="Logout" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    header: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    list: {
        marginTop: 20,
        width: '100%',
    },
    characterCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    characterImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    characterName: {
        fontSize: 16,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default DashboardScreen;
