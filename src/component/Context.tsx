import React, { createContext, useState, ReactNode, FC } from 'react';

// Define the shape of the context value
interface ContextValue {
  data: number;
  onChange: (word: number) => void;
}

// Create the context with a default value
const ValueContext = createContext<ContextValue | undefined>(undefined);

// Define the props for the Context component
interface ContextProps {
  children: ReactNode;
}

const Context: FC<ContextProps> = ({ children }) => {
  const [data, setData] = useState<number>(0);

  // Function to update the state
  const onChange = (word: number) => {
    setData(word);
  };

  return (
    <ValueContext.Provider value={{ data, onChange }}>
      {children}
    </ValueContext.Provider>
  );
};

export { Context, ValueContext };
