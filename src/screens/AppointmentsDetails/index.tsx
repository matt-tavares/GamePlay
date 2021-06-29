import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton} from 'react-native-gesture-handler';
import {
    ImageBackground,
    Text,
    View ,
    FlatList,
    Alert
} from 'react-native';

import BannerImg from '../../assets/banner.png';

import { useRoute } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { styles } from './style';

import { AppointmentProps } from '../../components/Appointment';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/Buttonicon';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string
    name: string
    instant_invite: string
    members: MemberProps[]
}

export function AppointmentsDetails() {
    const [Widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)

    const route = useRoute()
    const { guildSelected } = route.params as Params

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidget(response.data)
        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilidato?')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGuildWidget()
    },[])

    return(
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >

                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                       { guildSelected.guild.name }
                  </Text>

                  <Text style={styles.subtitle}>
                      { guildSelected.description}
                   </Text>
                </View>
            </ImageBackground>
            

            {
                loading ? <Load /> :
                <>
                    <ListHeader
                        title='Jogadores'
                        subtitle={`Total ${Widget.members.length}`}
                    />

                    <FlatList
                        data={Widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member data={item}/>
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentred />}
                        style={styles.members}
                    />
                </>
            }


            <View style={styles.footer}>
            <ButtonIcon title='Entrar na partida' />
            </View>
        </Background>
    )
}