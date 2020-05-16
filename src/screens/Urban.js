import React, { useState, useContext } from 'react'
import { View, Panel, FormLayout, FormLayoutGroup, Card, CardGrid, Header, Headline, Title, Input, List, Div, Button, Cell, PanelHeader, PanelHeaderContent, PanelHeaderContext, Group } from '@vkontakte/vkui'
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
                <Group separator="hide" header={<Header mode="secondary">Airbus A320-200</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Airbus А320-200 — одна из модификаций популярного Airbus A320. Основное отличие от предыдущей версии — увеличенный объём топливных баков и множество технических нововведений, касающихся двигательной части.<br /></Headline>
                                <img src={require('./../img/A320.jpg')} alt="photo A320" width="100%"/>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">Airbus A330-300</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Эксплуатация авиалайнера Airbus А330-300 (Аэробус А330-300) началась в 1994 году. Выпуск этого дальнемагистрального, двухдвигательного самолета продолжается и в настоящее время. За основу конструкции взят Аэробус А330, созданный во второй половине 1980-х годов. Почти одновременно была создана модификация А330-200. Ее отличие – укороченный фюзеляж.<br /></Headline>
                                <img src={require('./../img/A330.jpg')} alt="photo A330" width="100%"/>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">Airbus А340-200</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Четырехдвигательный, широкофюзеляжный Airbus A340-200, это пассажирский самолет, разработанный западноевропейским консорциумом «Airbus S.A.S.», как часть семейства дальнемагистральных авиалайнеров А340. Данный самолет является самой короткой машиной в этом семейства. Длина А340-200 составляет 59,4 метра, что на 4,29 метров короче своей старшей модели А340-300.<br /></Headline>
                                <img src={require('./../img/A340.jpg')} alt="photo A340" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">Airbus A380-800</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>В мире существует огромное количество различных авиалайнеров, но Airbus A380-800 – это тот самолет, на который действительно стоит обратить внимание. Подобных лайнеров на планете не очень много. Дело в том, что этот является самым большим пассажирским широкофюзеляжным летательным аппаратом, оснащенным двумя палубами. <br /></Headline>
                                <img src={require('./../img/A380.jpg')} alt="photo A380" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">ATR-72</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>ATR 72 — пассажирский двухмоторный турбовинтовой самолёт для среднемагистральных перелётов. Самолёт предназначен для перевозки до 74 пассажиров одного класса на расстояние до 1300 км и управляется двумя пилотами. Производитель — франко-итальянский концерн ATR.<br /></Headline>
                                <img src={require('./../img/ATR72.jpg')} alt="photo ATR-72" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">Boeing 737-800</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Boeing 737–800 — среднемагистральный пассажирский самолет, один из самых популярных американских лайнеров в парках мировых авиакомпаний, в том числе и чешских. Выпускается корпорацией Boeing с конца 1990-х годов.<br /></Headline>
                                <img src={require('./../img/B737-800.jpg')} alt="photo B737" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">Boeing 787-8 DREAMLINER</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Boeing 787 Dreamliner — широкофюзеляжный двухдвигательный пассажирский самолёт, разработанный американской компанией Boeing. По вместимости и дальности полёта 787 сравним с Boeing 767. Boeing утверждает, что Dreamliner более экономичный, чем предыдущие разработки. Boeing 787 стал первым пассажирским самолётом компании, в конструкции которого широко использованы композитные материалы. <br /></Headline>
                                <img src={require('./../img/B787-8.jpg')} alt="photo B787-8" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">BOMBARDIER CRJ900</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Bombardier CRJ900 представляет собой удлиненную версию модели CRJ-700, вместе с которой входит в семейство региональных самолетов CRJ. CRJ900 предназначен для обслуживания региональных маршрутов с повышенным пассажиропотоком.<br /></Headline>
                                <img src={require('./../img/CRJ900.jpg')} alt="photo CRJ900" width="100%" />
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide" header={<Header mode="secondary">TUPOLEV TU-154M</Header>}>
                    <CardGrid>
                        <Card size="l" mode="shadow" style={{ marginTop: 10 }}>
                            <Div>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Ту-154М (по кодификации НАТО: Careless — «Беззаботный», на сленге советских пилотов — «Полтинник», «Туполь», «Большая Тушка» или «Аврора») — советский трёхдвигательный реактивный пассажирский авиалайнер для авиалиний средней протяжённости, рассчитанный на перевозку 152—180 пассажиров. Разработан в 1960-х годах в СССР в ОКБ Туполева. <br /></Headline>
                                <img src={require('./../img/TU154M.jpg')} alt="photo TU154M" width="100%" />
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
