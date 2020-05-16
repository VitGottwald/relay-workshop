// eslint-disable-next-line
import { graphql } from 'react-relay';

/**
 * TODO
 * add mutation input and output here
 */
export const PostUnLike = graphql`
  mutation PostUnLikeMutation($input: PostUnLikeInput!) {
    PostUnLike(input: $input) {
      success
      error
      post {
        meHasLiked
        likesCount
      }
    }
  }
`;

/**
 * TODO
 * add Post Like optimistic update
 */
export const unLikeOptimisticResponse = post => ({
  PostUnLike: {
    success: '',
    error: null,
    post: {
      id: post.id,
      meHasLiked: false,
      likesCount: post.likesCount - 1,
    },
  },
});
