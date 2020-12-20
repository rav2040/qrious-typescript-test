import type { FamilyTreeParents } from '../api/create-tree';

import React from 'react';
import FamilyMember from './FamilyMember';
import { div } from './FamilyMemberGroup-styles';

interface FamilyMemberGroupProps {
  members: FamilyTreeParents;
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
  const [parent1, parent2] = members;
  const borderTopLeft = displayTopLeftBorder ? '#ccc' : 'transparent';
  const borderTopRight = displayTopRightBorder ? '#ccc' : 'transparent';

  return (
    <div.Container gridRow={row} gridCol={col + 100}>
      {row > 1 &&
        <div.Header borderTopLeft={borderTopLeft} borderTopRight={borderTopRight}>
          <div />
          <div />
        </div.Header>
      }
      <FamilyMember
        name={parent1.name}
        color={parent1.gender === 'male' ? 'lightblue' : 'lightpink'}
        marginBottom="1rem"
      />
      {parent2 &&
        <FamilyMember
          name={parent2.name}
          color={parent2.gender === 'male' ? 'lightblue' : 'lightpink'}
        />
      }
      <div.Footer backgroundColor={members.length > 1 ? '#ccc' : 'transparent'} />
    </div.Container>
  );
}
