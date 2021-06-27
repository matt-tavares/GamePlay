import React from "react";
import { View, FlatList } from 'react-native';
import { GuildProps } from "../../components/Guild";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from './style';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do game',
            icon: 'image.png',
            owner: true
        },
    ];

    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <Guild
                    data={item}
                    onPress={() => handleGuildSelected(item)}
                />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentred />}
                ListHeaderComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                style={styles.guilds}
            />
        </View>
    )
}