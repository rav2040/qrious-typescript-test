import type { FamilyMember } from '../components/FamilyTree';

export interface FamilyTreeMember {
  name: string;
  gender: 'male' | 'female';
}

export interface FamilyTreeNode {
  members: FamilyTreeMember[];
  children?: FamilyTreeNode[];
}

/**
 * Returns a new object containing the name and gender of the provided family member.
 */

function createParent({ name, gender }: FamilyMember): FamilyTreeMember {
  return { name, gender };
}

/**
 * Returns a boolean that indicates whether or not the two provided family members
 * share children.
 */

function sharesChildren(parent1: FamilyMember, parent2: FamilyMember) {
  if (parent1 === parent2 || parent1.children.length === 0) {
    // Parents are the same or parent1 has no children.
    return false;
  }

  for (const child of parent1.children) {
    if (!parent2.children.includes(child)) {
      // Parents have at least one child that is not shared.
      return false;
    }
  }

  // Parents share the same chilren.
  return true;
}

/**
 * Returns the partner of the provided family member if one exists, or null otherwise.
 */

function findPartner(parent: FamilyMember, members: FamilyMember[]) {
  for (const member of members) {
    if (sharesChildren(parent, member)) {
      // Member is the partner of parent.
      return member;
    }
  }

  // Parent has no partner.
  return null;
}

/**
 * Returns an object containing a 'members' property, which is an array consisting of either
 * one or two family members. If there are two family members, the returned object will also
 * contain a 'children' property, which is set to an array containing all child nodes for the
 * current pair.
 */

function createTreeNode(member: FamilyMember, members: FamilyMember[]): FamilyTreeNode {
  const partner = findPartner(member, members);

  if (!partner) {
    // Member has no children and is the only member of this node.
    return {
      members: [createParent(member)]
    };
  }

  // Populate new array with member's children data.
  const childrenData = member.children
    .map(id => members.find(member => member.id === id))
    .filter(member => member) as FamilyMember[];

  // Create nodes for each of member's children.
  const children = childrenData.map(member => (
    createTreeNode(member, members)
  ));

  // Member has a partner and children.
  return {
    members: [
      createParent(member),
      createParent(partner),
    ],
    children,
  };
}

/**
 * Returns the top level tree node for the provided data set. Returns null if the data set does
 * not contain top level parents.
 */

export default function createTree(members: FamilyMember[]): FamilyTreeNode | null {
  for (const member of members) {
    if (member.parents.length > 0) {
      // Is not top level because member has parents.
      continue;
    }

    const partner = findPartner(member, members);

    if (!partner || partner.parents.length > 0) {
      // Is not top level because member has no partner or partner has parents.
      continue;
    }

    // Member is a top level parent.
    return createTreeNode(member, members);
  }

  // No top level parent was found.
  return null;
}
