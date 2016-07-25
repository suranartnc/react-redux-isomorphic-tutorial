import * as actionTypes from 'shared/modules/post/actionTypes';

export function getPostLatest(filter) {
  return {
    type: actionTypes.POST_GET_LATEST,
    request: {
      path: `/posts?filter=${JSON.stringify(filter)}`
    }
  };
}