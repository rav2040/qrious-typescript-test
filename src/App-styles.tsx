import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 2rem;
  text-align: center;

  h1 {
    margin: 0;
    margin-left: 2rem;
    text-align: left;
  }
`;

const TreeContainer = styled.div`
  display: inline-block;
`;

const TreeGrid = styled.div`
  display: grid;
  margin-top: 2rem;
`;

const Branch = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto;
`;

const Parents = styled.div`
  grid-row: 1 / 2;
`;

const Children = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const div = {
  AppContainer,
  TreeContainer,
  TreeGrid,
  Branch,
  Parents,
  Children,
};
