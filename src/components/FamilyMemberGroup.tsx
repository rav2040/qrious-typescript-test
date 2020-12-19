import type { FamilyTreeMember } from '../api/create-tree';

import React from 'react';
import FamilyMember from './FamilyMember';
import { div } from './FamilyMembergroup-styles';

interface FamilyMemberGroupProps {
  members: FamilyTreeMember[];
  row: number;
  col: number;
  displayTopLeftBorder: boolean;
  displayTopRightBorder: boolean;
}

export default function FamilyMemberGroup({
  members,
  row,
  col,
  displayTopLeftBorder,
  displayTopRightBorder,
}: FamilyMemberGroupProps) {
  const borderTopLeft = displayTopLeftBorder ? '#ccc' : 'transparent';
  const borderTopRight = displayTopRightBorder ? '#ccc' : 'transparent';

  const membersList = members.map((member, i) => {
    const marginBottom = i === 0 ? '1rem' : '0';

    return (
      <FamilyMember
        key={i}
        name={member.name}
        color={member.gender === 'male' ? 'lightblue' : 'lightpink'}
        marginBottom={marginBottom}
      />
    );
  });

  return (
    <div.Container gridRow={row} gridCol={col + 100}>
      {row > 1 &&
        <div.Header borderTopLeft={borderTopLeft} borderTopRight={borderTopRight}>
          <div />
          <div />
        </div.Header>
      }
      {membersList}
      <div.Footer backgroundColor={members.length > 1 ? '#ccc' : 'transparent'} />
    </div.Container>
  );
}
