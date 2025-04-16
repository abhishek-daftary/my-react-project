import { Component1 } from './components/component1/Component1';
import { Storecard } from './components/storeCard/StoreCard';

export const App: React.FC = () => {
  return (
    <div>
      <Component1 name="World" />
      <Storecard />
    </div>
  );
};
