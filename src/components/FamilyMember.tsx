import React from 'react';
import PeopleIcon from './PeopleIcon';
import { div, p } from './FamilyMember-styles';

interface FamilyMemberProps {
  name: string;
  color: 'lightpink' | 'lightblue';
  marginBottom: string;
}

export default function FamilyMember({ name, color, marginBottom }: FamilyMemberProps) {
  return (
    <div.Container backgroundColor={color} marginBottom={marginBottom}>
      <PeopleIcon />
      <p.Name>{name}</p.Name>
    </div.Container>
  );
}
