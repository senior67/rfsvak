import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Text from '@vkontakte/vkui/dist/components/Text/Text';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Czech VAC</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Text weight="medium" style={{ marginBottom: 16 }}>Добро пожаловать в официальное приложение ВАК "Чешские авиалинии", представленной в авиасимуляторе RFS!</Text>

		<Text weight="medium" style={{ marginBottom: 16 }}>Здесь вы может ознакомиться с нашим флотом, направлениями авиакомпании, рейтингом пилотов и другой информацией!</Text>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Направления ВАК
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Авиафлот ВАК
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Рейтинг пилотов ВАК
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					О ВАК
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
