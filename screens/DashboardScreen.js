import { signOut} from "firebase/auth";
import { Button, View, Text } from "react-native";
import auth from "../services/firebaseAuth";

export default function DashboardScreen({navigation}) {
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            navigation.navigate('Login')
        })

       
    }

    return <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text style={{marginVertical:10}}>Welcome to Dashboard</Text>
        <Button onPress={handleLogout} title="Logout" />
    </View>
}