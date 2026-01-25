// This file will hold React context(s) for the application.
import React, { createContext, useContext, useState } from 'react';

// Example: Create a sample context
const SampleContext = createContext();

export const SampleProvider = ({ children }) => {
  const [value, setValue] = useState(null);

  return (
    <SampleContext.Provider value={{ value, setValue }}>
      {children}
    </SampleContext.Provider>
  );
};

export const useSample = () => useContext(SampleContext);
