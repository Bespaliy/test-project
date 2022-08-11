import styled from 'styled-components';
import { theme } from '../common/theme';

export const ListElement = styled.li`
	display: flex;
	justify-content: space-between;
	border: solid black;
	min-height: 50px;
	font-size: ${theme.size.listFontSize};
	background-color: ${props => props.bgColor || 'white'};
`
export const PrizeNumber = styled.div`
	min-width: 20px;
	text-align: center;
	border-right: solid black;
`

export const Distance = styled.div`
	min-width: 60px;
	text-align: center;
	border-left: solid black;
`

export const HorseName = styled.div`
`

export const HorseListWrapper = styled.div`
  & > ol {
      margin: 0;
  }
`