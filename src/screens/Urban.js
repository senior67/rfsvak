import React, { useState, useContext } from 'react'
import { View, Panel, FormLayout, FormLayoutGroup, Card, CardGrid, Headline, Title, Input, List, Div, Button, Cell, PanelHeader, PanelHeaderContent, PanelHeaderContext, Group } from '@vkontakte/vkui'
import LibraryContext from '../context/LibraryContext'

export default function Urban(props) {
    const [contextOpened, setContextOpened] = useState(false)
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const context = useContext(LibraryContext)
    const onSubmit = () => {
        if (name && author) {
            context.addBook({ name, author })
        } else {
            return null
        }
        setName('')
        setAuthor('')
    }
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <View>
                    <Panel>
                        <PanelHeader
                        >
                            <PanelHeaderContent
                                onClick={() => setContextOpened(!contextOpened)}
                            >
                                Воздушный флот
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
                                    onClick={() => setContextOpened(!contextOpened)}
                                >
                                    Воздушный флот
                        </Cell>
                                <Cell
                                    data-mode="managed"
                                    onClick={() => props.changeScreen("about")}
                                >
                                    Рейтинг пилотов
                        </Cell>
                            </List>
                        </PanelHeaderContext>
                        <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Title level="1" style={{ marginBottom: 10 }}>Воздушный флот</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Воздушный флот виртуальной авиакомпании «Czech Airlines» представлен девятью воздушными судами.
                            </Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Airbus A320-200</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Используется для коротких полетов</Headline>
                                <img src={require('./../img/A320.jpg')} alt="photo A320" width="85%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                    </Panel>
                </View>
            )}

        </LibraryContext.Consumer>
    )
}
