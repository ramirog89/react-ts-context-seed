import React from 'react';

import { ApiServiceMock } from './ApiServiceMock';
import { ComposeProvider, Provider } from '../modules/context/compose';
import { IDependencies } from '../modules/context/rootState';
import { GeneralProvider } from '../modules/context/general/provider';
import { TodoProvider } from '../modules/context/todo/provider';

export const dependencies: IDependencies = {
  apiService: new ApiServiceMock() as any,
};

export const providers: Provider[] = [GeneralProvider, TodoProvider];

export const ContextMock = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeProvider deps={dependencies} providers={providers}>
      {children}
    </ComposeProvider>
  )
};
