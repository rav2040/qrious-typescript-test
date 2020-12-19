import React from 'react';
import FamilyTree from './components/FamilyTree';
import { div } from './App-styles';
import { familyTree as data } from './data/family-tree';

function App() {
  return (
    <div.Container>
      <h1>Family tree</h1>
      <FamilyTree data={data} />
    </div.Container>
  );
}

export default App;
