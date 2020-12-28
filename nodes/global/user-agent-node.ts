// ANCHOR Graph State
import { createGraphNode } from 'graph-state';
import {
  useGraphNodeMutate,
  useGraphNodeValue,
} from 'react-graph-state';

// ANCHOR User Agent
import { UserAgent } from 'next-useragent';

export const userAgentNode = createGraphNode({
  key: 'userAgent',
  get: {} as UserAgent,
});

export function useUserAgent() {
  return useGraphNodeValue(userAgentNode);
}

export function useUserAgentHydrate(userAgent: UserAgent) {
  return useGraphNodeMutate(userAgentNode, userAgent);
}
