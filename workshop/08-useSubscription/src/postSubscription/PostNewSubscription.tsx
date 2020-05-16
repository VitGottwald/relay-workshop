// eslint-disable-next-line
import { graphql } from 'react-relay';
// eslint-disable-next-line
import { ConnectionHandler, RecordSourceSelectorProxy, ROOT_ID } from 'relay-runtime';

// eslint-disable-next-line
import { connectionUpdater } from '@workshop/relay';

export const PostNew = graphql`
  subscription PostNewSubscription($input: PostNewInput!) {
    PostNew(input: $input) {
      post {
        id
        content
        author {
          id
          name
        }
        meHasLiked
        likesCount
        ...PostComments_post
      }
    }
  }
`;

/**
 * TODO
 * fill updater to get the new post and add to Feed_posts connection
 * avoid duplication of post
 */
// eslint-disable-next-line
export const updater = (store: RecordSourceSelectorProxy) => {
  const postNode = store.getRootField('PostNew').getLinkedRecord('post');

  const postId = postNode.getValue('id');

  const postStore = store.get(postId);

  // avoid mutation + subscription update
  if (!postStore) {
    const postConnection = ConnectionHandler.getConnection(store.getRoot(), 'Feed_posts');

    // create user edge
    const postEdge = ConnectionHandler.createEdge(store, postConnection, postNode, 'PostEdge');

    connectionUpdater({
      store,
      parentId: ROOT_ID,
      connectionName: 'Feed_posts',
      edge: postEdge,
      before: true,
    });
  }
};
