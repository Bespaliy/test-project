import { theme } from '../../common/theme';
import { ListElement, PrizeNumber, Distance, HorseName } from '../../styles/HorseListStyle';

const Horse = ({ name, distance, index }) => {
	return (
		<ListElement bgColor={theme.color.prizesColor[index]}>
			<PrizeNumber>{index}</PrizeNumber>
			<HorseName>{name}</HorseName>
			<Distance>{distance}</Distance>
		</ListElement>
	)
}

export default Horse;
