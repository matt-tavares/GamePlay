import React from "react";
import { View , Text} from "react-native";

import { Avatar } from "../../components/Avatar";
import { styles } from "./style";

export function Profile() {
    return(
        <View style={styles.container}>

            <Avatar urlImage='https://github.com/matt-tavares.png' />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá, 
                    </Text>

                    <Text style={styles.username}>
                        Matheus
                    </Text>
                </View>

                <Text style={styles.mensage}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}