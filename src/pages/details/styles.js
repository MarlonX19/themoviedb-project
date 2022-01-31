import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 100%;
  min-height: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  width: 100%;
  padding: 20px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;

  & #movie-title {
    color: #1068bf;
    font-size: 1.9em;
  }
  & #movie-date {
    color: #333;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 40px;
  background-color: #f0f0f0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 20px;

  & h3 {
    color: #1068bf;
  }

  & hr {
    background-color: transparent;
    border-top: 1px solid #1068bf;
  }

  & p {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export const CardImageContent = styled.div`

  & img {
    height: 100%;
  }
`;

