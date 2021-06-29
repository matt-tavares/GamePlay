import React from "react";
import { View , Text, Alert} from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";
import { styles } from "./style";

export function Profile() {
    const { user, SingOut } = useAuth();

    function handleSingOut() {
        Alert.alert('Logout', 'Deseja sair do GamePlay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => SingOut()
            }
        ])
    }
    return(
        <View style={styles.container}>

            <RectButton onPress={handleSingOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá, 
                    </Text>

                    <Text style={styles.username}>
                        {user.firstname}
                    </Text>
                </View>

                <Text style={styles.mensage}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}