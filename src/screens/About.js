import React, { useState } from 'react';
import { Panel, View, PanelHeader, Button, Div, Group, Headline, Title, PanelHeaderClose, CardGrid, Card, Header, PanelHeaderContent, Cell, List, PanelHeaderContext } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'

export default function About(props) {
    const [contextOpened, setContextOpened] = useState(false)
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        О приложении
                        <img src={require('./../img/multimedia-option.svg')} alt="" className="home__arrow-down" onClick={() => setContextOpened(!contextOpened)} />

                    </PanelHeaderContent>
                </PanelHeader>
                <PanelHeaderContext opened={contextOpened} onClose={() => setContextOpened(!contextOpened)}>
                    <List>
                        <Cell
                            data-mode="all"
                            onClick={() => props.changeScreen("main")}
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
                            Воздушный флот 
                        </Cell>
                        <Cell
                            data-mode="managed"
                            onClick={() => setContextOpened(!contextOpened)}
                        >
                            О приложении
                        </Cell>
                    </List>
                </PanelHeaderContext>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Зачем нам это?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Данное приложение разработано с использованием исходников нижеуказанного автора на GitHub. В этом приложении можно ознакомится с ВАК "Czech Airlines"</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Кто разработчик?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Автор исходников на Github: <a href="https://vk.com/s.sergeenkov">Александр Сергеенков</a><br />Доработка: <a href="https://vk.com/senior67">Сергей Ахачинский</a><br />Идея и скриншоты: <a href="https://vk.com/czechvak">ВАК "Czech Airlines"</a></Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group>
                <Div className="home__button" style={{bottom: 70}}>
                        <Button stretched mode="primary" size="l" onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 195333140})}>
                            Сообщество ВАК
                        </Button>
                    </Div>
                </Group>
            </Panel>
        </View>
    )
}