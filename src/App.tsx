import type { FamilyTreeNode } from './api/create-tree';

import React from 'react';
import { nanoid } from 'nanoid';
import FamilyMemberGroup from './components/FamilyMemberGroup';
import { div } from './App-styles';

import { familyTree as data } from './data/family-tree';
import createTree from './api/create-tree';

enum SiblingIndex {
  Start,
  Middle,
  End,
  None,
}

const treeObj = createTree(data);

function App() {
  const treeList: JSX.Element[] = [];

  const createTreeElement = (node: FamilyTreeNode, row = 1, col = -1, index?: SiblingIndex) => {
    if (node.children) {
      // The members of this node have children.
      for (const [i, childNode] of node.children.entries()) {
        // Calculate grid row and column for the child node.
        const childGridRow = row + 1;
        const childGridCol = calculateGridCol(i, node.children.length, col);

        let childSiblingIndex = SiblingIndex.None;

        // Determine the index of the child node relative to its siblings. This is
        // used for deciding which connecting lines should be drawn above child nodes.
        if (node.children.length !== 1) {
          if (i === 0) {
            // Is the first sibling.
            childSiblingIndex = SiblingIndex.Start;
          }

          else if (i === node.children.length - 1) {
            // Is the last sibling.
            childSiblingIndex = SiblingIndex.End;
          }

          else {
            // Is a middle sibling.
            childSiblingIndex = SiblingIndex.Middle;
          }
        }

        // Create the element for this node and add it to the tree list.
        createTreeElement(childNode, childGridRow, childGridCol, childSiblingIndex);
      }
    }

    // Only show a top-left border if this node is a middle or end sibling.
    const displayTopLeftBorder = (
      index === SiblingIndex.Middle ||
      index === SiblingIndex.End
    );

    // Only show a top-right border if this node is a start or middle sibling.
    const displayTopRightBorder = (
      index === SiblingIndex.Start ||
      index === SiblingIndex.Middle
    );

    const element = <FamilyMemberGroup
      key={nanoid()}
      members={node.members}
      row={row}
      col={col}
      displayTopLeftBorder={displayTopLeftBorder}
      displayTopRightBorder={displayTopRightBorder}
    />;

    treeList.push(element);
  };

  if (treeObj) {
    // Recursively create all elements of the tree and add them to the tree list.
    createTreeElement(treeObj);
  }

  return (
    <div.AppContainer>
      <h1>Family tree</h1>
      <div.TreeContainer>
        <div.TreeGrid>
          {treeList}
        </div.TreeGrid>
      </div.TreeContainer>
    </div.AppContainer>
  );
}

/**
 * Calculates the grid column index of a child element based on its position
 * relative to its siblings.
 */

function calculateGridCol(i: number, total: number, anchorPoint: number) {
  return anchorPoint + (total - (total * 2) ) + 1 + (i * 2);
}

export default App;
