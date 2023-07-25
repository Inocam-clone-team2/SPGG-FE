import styled from "styled-components";

export const StatsPerGame = styled.section`
	width: 1080px;
	margin: 0 auto;
`;
export const GameInfo = styled.div`
	display: flex;
`;

export const ChamInfo = styled.div`
	display: flex;

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: block;
		aspect-ratio: auto 48 / 48;
	}
`;

export const SpellWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0;

	img {
		width: 22px;
		height: 22px;
		border-radius: 4px;
	}
`;

export const ItemInfo = styled.div`
	display: flex;

	img {
		width: 22px;
		height: 22px;
		border-radius: 4px;
	}
`;

export const Players = styled.div`
	display: flex;

	ul {
		list-style: none;
		font-size: 12px;
	}

	img {
		width: 12px;
		height: 12px;
		border-radius: 4px;
	}
`;
