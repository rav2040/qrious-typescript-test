import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
  marginBottom: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 250px;
  height: 60px;
  background-color: ${props => props.backgroundColor};
  margin: 0 1rem;
  margin-bottom: ${props => props.marginBottom};
`;

const Name = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
`;

export const div = {
  Container,
};

export const p = {
  Name,
};
