import styled from 'styled-components';

interface ContainerProps {
  gridRow: number;
  gridCol: number;
}

interface HeaderProps {
  borderTopLeft: boolean;
  borderTopRight: boolean;
}

interface FooterProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: ${props => props.gridRow === 1 ? 'auto' : '30px'} repeat(3, auto);
  grid-row-start: ${props => props.gridRow};
  grid-column: ${props => `${props.gridCol} / ${props.gridCol + 2}`};
`;

const Header = styled.div<HeaderProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1px;
  width: 100%;
  height: 30px;
  background-color: #ccc;

  div {
    background-color: #fff;
    border-top-width: 1px;
    border-top-style: solid;
  }

  div:first-child {
    border-top-color: ${props => props.borderTopLeft ? '#ccc' : 'transparent'};
  }

  div:last-child {
    border-top-color: ${props => props.borderTopRight ? '#ccc' : 'transparent'};
  }
`;

const Footer = styled.div<FooterProps>`
  width: 1px;
  height: 30px;
  justify-self: center;
  background-color: ${props => props.backgroundColor};
`;

export const div = {
  Container,
  Header,
  Footer,
};
