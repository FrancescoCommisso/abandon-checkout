import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  text-align: center;
  height: 10vh;
  margin-bottom: 5vh;
  width: 10vw;
`;

export const Button = styled.button`
  padding: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  td {
    padding: 10px;
    border: 1px solid;
  }
  th {
    padding: 10px;
    border: 1px solid;
  }
`;
