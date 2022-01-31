import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 280px;
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-bottom: 30px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const CardImage = styled.img`
  width: 180px;
  height: 100%;
`;

export const CardContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const CardTopContent = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 70px;
  background-color: #1068bf;

  & h2 {
    color: #42e9f5;
  }
`;

export const CardBottomContent = styled.div`
  position: relative;
  padding: 0px 20px;
`;

export const CardBottomUpperInfo = styled.div`
  display: flex;
  flex-direction: row;

  & span {
    color: #383636;
  }
`;

export const CardBottomLowInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;

  & p {
    color: #383636;
  }
`;

export const MovieGenreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const MovieGenreComponent = styled.div`
  padding: 3px 12px;
  background-color: #fff;
  border: 1px solid #1068bf;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;

  & span {
    color: #1068bf;
  }

`;

export const CardPercentageInfoContainer = styled.div`
  position: absolute;
  top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #1068bf;
  background-color: #1068bf;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CardPercentageInfo = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #42e9f5;

  & span {
    color: #42e9f5;
  }
`;
