import React, { useState } from 'react'
import { View, Panel, Cell, PanelHeader, Group, CardGrid, Card, Button, Div, Title, Headline, PanelHeaderContext, PanelHeaderContent, List } from '@vkontakte/vkui'
import { PHRASES } from './../PHRASES'

export default function Phrases(props) {
    const [phrase, setPhrase] = useState('Цитата - всего лишь слова, а не приказ к действию.')
    const [contextOpened, setContextOpened] = useState(false)
    let love = PHRASES.love[Math.floor(Math.random() * PHRASES.love.length)];
    let life = PHRASES.life[Math.floor(Math.random() * PHRASES.life.length)];
    let friendship = PHRASES.friendship[Math.floor(Math.random() * PHRASES.friendship.length)];
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        Направления
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
                            onClick={() => setContextOpened(!contextOpened)}
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
                            Рейтинг пилотов
                        </Cell>
                    </List>
                </PanelHeaderContext>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Наши направления:</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>[🇨🇿] Внутренние рейсы:
0️⃣0️⃣1️⃣ 🇨🇿 Аэропорт им. Вацлава Гавела - аэропорт Пардубице (LKPR - LKPD)
0️⃣0️⃣2️⃣ 🇨🇿 Аэропорт им. Вацлава Гавела - аэропорт «Карловы Вары» (LKPR - LKKV)
0️⃣0️⃣3️⃣ 🇫🇷 Аэропорт им. Вацлава Гавела - Аэропорт Леош Яначек (LKPR - LKMT)

[🇪🇺] Международные рейсы:
0️⃣0️⃣4️⃣ 🇩🇪 Прага - Дрезден (LKPR - EDDC)
0️⃣0️⃣5️⃣ 🇩🇪 Прага - Дюссельдорф (LKPR - EDDL)
0️⃣0️⃣6️⃣ 🇩🇪 Прага - Мюнхен (LKPR - EDDM)
0️⃣0️⃣7️⃣ 🇩🇪 Прага - Лейпциг (LKPR - EDDP)
0️⃣0️⃣8️⃣ 🇩🇪 Прага - Франкфурт (LKPR - EDDF)

0️⃣0️⃣9️⃣ 🇦🇹 Прага - Вена (LKPR - LOWW)

0️⃣1️⃣0️⃣ 🇷🇺 Прага - Москва (Домодедово) (LKPR - UUDD)
0️⃣1️⃣1️⃣ 🇷🇺 Прага - Москва (Шереметьево) (LKPR - UUWW)
0️⃣1️⃣2️⃣ 🇷🇺 Прага - Москва (Внуково) (LKPR - UUEE)
0️⃣1️⃣3️⃣ 🇷🇺 Прага - Санкт-Петербург (Пулково) (LKPR - ULLI)
0️⃣1️⃣4️⃣ 🇷🇺 Прага - Екатеринбург (LKPR - USSS)
0️⃣1️⃣5️⃣ 🇷🇺 Прага - Калининград (LKPR - UMKK)

0️⃣1️⃣6️⃣ 🇧🇾 Прага - Минск (LKPR - UMMS)
0️⃣1️⃣7️⃣ 🇧🇾 Прага - Брест (LKPR - UMBB)

0️⃣1️⃣8️⃣ 🇱🇹 Прага - Вильнюс (LKPR - EYVI)

0️⃣1️⃣9️⃣ 🇺🇦 Прага - Борисполь (LKPR - UKBB)
0️⃣2️⃣0️⃣ 🇺🇦 Прага - Харьков (LKPR - UKKH)

0️⃣2️⃣1️⃣ 🇵🇱 Прага - Варшава (аэропорт им. Фридерика Шопена) (LKPR - EPWA)
0️⃣2️⃣2️⃣ 🇵🇱 Прага - Катовице (LKPR - EPKT)
0️⃣2️⃣3️⃣ 🇵🇱 Прага - Краков (LKPR - EPKK)

0️⃣2️⃣4️⃣ 🇫🇷 Прага - Париж (аэропорт Шарль-де-Голль) (LKPR - LFPG)
0️⃣2️⃣5️⃣ 🇫🇷 Прага - Ницца (Лазурный Берег) (LKPR - LFMN)
0️⃣2️⃣6️⃣ 🇫🇷 Прага - Марсель (LKPR - LFML)

0️⃣2️⃣7️⃣ 🇬🇧 Прага - Лондон (Хитроу) (LKPR - EGLL)

0️⃣2️⃣8️⃣ 🇪🇸 Прага - Мадрид (LKPR - LEMD)
</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    )
}
