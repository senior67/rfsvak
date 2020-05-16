import React, { useState, useEffect } from 'react';
import { Panel, View, PanelHeader, Button, Div, Group, Headline, Title, Card, CardGrid, Avatar, PanelHeaderContent, Cell, List, PanelHeaderContext, Banner, Link } from '@vkontakte/vkui';
import { Excuses } from './../Data'
import './Home.sass'

export default function Home(props) {
    const [phrase, setPhrase] = useState('Корм кончился. У меня всего лишь лапки, сделаю завтра')
    const [contextOpened, setContextOpened] = useState(false)
    let fail = Excuses.fail[Math.floor(Math.random() * Excuses.fail.length)];
    let action = Excuses.action[Math.floor(Math.random() * Excuses.action.length)];
    let date = Excuses.date[Math.floor(Math.random() * Excuses.date.length)];
    let general = Excuses.general[Math.floor(Math.random() * Excuses.general.length)];
    var item = general + '. ' + fail + '. ' + action + ' ' + date + '. ';
    const [modalOpen, setModalOpen] = useState(props.modalOpen)
    const seenButton = () => {
        props.closeModal(false)
        props.changeScreen("Phrases")
    }
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        Главная (О ВАК)
                        <img src={require('./../img/multimedia-option.svg')} alt="" className="home__arrow-down" onClick={() => setContextOpened(!contextOpened)} />
                    </PanelHeaderContent>
                </PanelHeader>
                <PanelHeaderContext opened={contextOpened} onClose={() => setContextOpened(!contextOpened)}>
                    <List>
                        <Cell
                            data-mode="all"
                            onClick={() => setContextOpened(!contextOpened)}
                        >
                            Главная (О ВАК)
                        </Cell>
                        <Cell
                            data-mode="managed"
                            onClick={() => props.changeScreen("phrases")}
                        >
                            Направления
                        </Cell>
                        <Cell
                            data-mode="managed"
                            onClick={() => props.changeScreen("library")}
                        >
                            Авиафлот
                        </Cell>
                        <Cell
                            data-mode="managed"
                            onClick={() => props.changeScreen("about")}
                        >
                            О приложении
                        </Cell>

                    </List>
                </PanelHeaderContext>
                <Group separator="hide">

                    {
                        modalOpen ?
                            <Banner
                                mode="image"
                                header="Добавлены новые направления!"
                                subheader="Добавлены новые направления ВАК 'Czech Airlines'"
                                background={
                                    <div
                                        style={{
                                            backgroundColor: '#FF8E22',
                                            backgroundImage: 'url(https://image.flaticon.com/icons/svg/1454/1454500.svg)',
                                            backgroundPosition: 'right bottom',
                                            backgroundSize: 70,
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    />
                                }
                                actions={<Button mode="overlay" style={{color: 'white', background: '#FFC15B'}} onClick={() => seenButton()}>Подробнее</Button>}
                            /> : ""
                    }
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Кто вы?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Мы - ВАК (виртуальная авиакомпания), представленная в игре Real Flight Simulator (RORTOS).
                                Хаб: Пражский аэропорт имени Вацлава Гавела (LKPR)</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Хочу к вам, что сделать?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Вся информация есть в нашем официальном сообществе ВКонтакте -> <Link href="https://vk.com/czechvak">*тык*</Link></Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    )
}
