import styled from 'styled-components';

export const StyledFormAddContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 50px auto;

  & button {
    max-width: 200px;
  }

  & .label {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;
