import { FC, cloneElement } from 'react';

export function compose(...nodes: JSX.Element[]): FC {
  return ({ children }) => (
    <>
      { nodes.reduceRight((acc, el) => cloneElement(el, {}, acc), children) }
    </>
  );
}
