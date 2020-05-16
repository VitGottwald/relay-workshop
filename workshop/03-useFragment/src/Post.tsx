import React from 'react';
import { Text } from 'rebass';
import { Card } from '@workshop/ui';
import { useFragment, graphql } from 'react-relay/hooks';

import { Post_post$key } from './__generated__/Post_post.graphql';

// eslint-disable-next-line
const Post = props => {
  const post = useFragment<Post_post$key>(
    graphql`
      fragment Post_post on Post {
        id
        content
        author {
          name
        }
      }
    `,
    props.post,
  );

  return (
    <Card mt='10px' flexDirection='column' p='10px'>
      <Text>id: {post.id}</Text>
      <Text>content: {post.content}</Text>
    </Card>
  );
};

export default Post;
