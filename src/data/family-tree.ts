import type { FamilyMember } from '../components/FamilyTree';

export const familyTree: FamilyMember[] = [
  {
    id: '2351232112252',
    name: 'Sally',
    children: ['5555', '6666', '7777', '8458189966444', '897543276547654765443576'],
    gender: 'female',
    parents: [],
  },
  {
    id: '1231239887112',
    name: 'Billy',
    children: ['8458189966444', '5555', '6666', '7777', '897543276547654765443576'],
    gender: 'male',
    parents: [],
  },
  {
    id: '7777',
    name: 'Suzie',
    gender: 'female',
    children: ['317849882', '8569047194214199353'],
    parents: ['2351232112252', '1231239887112'],
  },
  {
    id: '23123122',
    name: 'Sam',
    gender: 'male',
    children: ['317849882', '8569047194214199353'],
    parents: []
  },
  {
    id: '317849882',
    name: 'Josh',
    gender: 'male',
    children: ['43924235082592'],
    parents: ['7777', '23123122']
  },
  {
    id: '8593288989',
    name: 'Sarah',
    gender: 'female',
    children: ['43924235082592'],
    parents: []
  },
  {
    id: '43924235082592',
    name: 'Jim',
    gender: 'male',
    children: ['9305009999'],
    parents: ['317849882', '8593288989']
  },
  {
    id: '83473298328562398696',
    name: 'Clara',
    gender: 'female',
    children: ['9305009999'],
    parents: []
  },
  {
    id: '9305009999',
    name: 'Joe',
    children: [],
    gender: 'male',
    parents: ['43924235082592', '83473298328562398696']
  },
  {
    id: '8569047194214199353',
    name: 'Charlie',
    gender: 'male',
    children: ['565893648394894339808'],
    parents: ['23123122', '7777'],
  },
  {
    id: '4382743284732483290',
    name: 'Jessie',
    gender: 'female',
    children: ['565893648394894339808'],
    parents: []
  },
  {
    id: '565893648394894339808',
    name: 'Bob',
    gender: 'male',
    children: [],
    parents: ['8569047194214199353', '4382743284732483290'],
  },
  {
    id: '8458189966444',
    name: 'Ricky',
    gender: 'male',
    children: ['23'],
    parents: ['2351232112252', '1231239887112']
  },
  {
    id: '897543276547654765443576',
    name: 'Julian',
    gender: 'male',
    children: [],
    parents: ['1231239887112', '2351232112252'],
  },
];
