// ANCHOR Fetch
import { graphSdk } from '@medion/utils/fetch/graphql';

export const getUserSex = async () => {
  const response = await graphSdk.GetUserSex();

  return response.user_sex.map((item) => (
    item.value
  ));
};
