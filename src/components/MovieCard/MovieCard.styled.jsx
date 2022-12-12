import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;

  box-shadow: 0px -4px 4px -4px rgba(34, 60, 80, 0.4) inset;
  margin-top: 20px;
`;

export const Poster = styled.img`
  height: 300px;
  margin-right: 20px;
`;

export const GenreWrapper = styled.div`
  display: flex;
  p:not(:last-child) {
    margin-right: 20px;
  }
  p {
    margin-top: 0px;
  }
`;

export const InfoWrapper = styled.div`
  box-shadow: 0px -4px 4px -4px rgba(34, 60, 80, 0.4) inset;
  padding-bottom: 4px;
  li {
    margin-bottom: 10px;
  }
`;

export const CastLink = styled(NavLink)`
  margin-right: 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
`;
