import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../../foundation/Text';
import HeartIcon from '../HeartIcon';

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  height: 15rem;
  width: 15rem;
  :hover {
    opacity: 50%;
    background-color: black;
    .likesDisplay {
      display: flex;
      gap: 0.5rem;
      color: #fff;
      justify-content: center;
      align-items: center;
    }
  }

  .likesDisplay {
    display: none;
  }
`;

const Post = ({ imgUrl, likes, key }) => {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }
  return (
    <PostWrapper onClick={handleLike} imgUrl={imgUrl} key={key}>
      <span className="likesDisplay">
        <Text variant="paragraph1" style={{ fontWeight: 'bold', fontSize: '1.15rem' }}>
          {likes}
        </Text>
        <HeartIcon liked={liked} />
      </span>
    </PostWrapper>
  );
};

Post.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;

// const LikeHeart = ({ liked }) => {
//   return (
//     <img src={`/images/${liked ? 'filled_heart' : 'heartIcon'}.svg`} alt="" sizes="3rem,3rem" />
//   );
// };

// LikeHeart.propTypes = {
//   liked: PropTypes.bool.isRequired,
// };
