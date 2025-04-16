import { Component1 } from './component1/Component1';
import { Component2 } from './component2/Component2';
import { Notes } from './Notes/Notes';
import { Storecard } from './storecard/Storecard';

export const App = () => {
  const store = {
    storeId: 'IN0006',
    addressLine1: 'New Phoenix Marketcity,Chennai',
    addreddLine2: 'Bangalore, India',
    openDate: '2011-11-11',
    closeDate: '2023-11-13',
  };

  return (
    <div>
      <h3>App</h3>
    </div>
  );
};
