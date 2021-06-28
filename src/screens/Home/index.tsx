import React, { useState } from "react";
import { View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { ListHeader } from "../../components/ListHeader";
import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/buttonAdd";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";

import { styles } from './style';


export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 22:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 22:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentsDetails() {
        navigation.navigate('AppointmentsDetails')
    }

    function handleAppointmentsCreate() {
        navigation.navigate('AppointmentsCreate')
    }

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentsCreate}/>
            </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                
                    <ListHeader
                        title='Partidas agendadas'
                        subtitle='Total 2'
                    />

            <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentsDetails}
                        />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{paddingBottom: 69}}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
        </Background>
    )
}
