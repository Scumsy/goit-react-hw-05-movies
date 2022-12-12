import styled from 'styled-components';

export const ActorImg = styled.img`
  height: 160px;
  width: 120px;
`;

export const ActorList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li:not(:last-child) {
    margin-right: 50px;
    align-items: center;
  }
`;
