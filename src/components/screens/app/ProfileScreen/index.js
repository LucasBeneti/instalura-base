import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../../../foundation/Text';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import MenuProfile from '../../../commons/MenuProfile';
import Modal from '../../../commons/Modal';
import Post from '../../../commons/Post';
import UploadImageModal from '../../../pattern/UploadImage';

const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

ProfileContentWrapper.Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;

  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 3rem;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    .infoRow1 {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .metrics {
        display: flex;
        flex-direction: column;
      }
    }
    .infoRow2 {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
`;

ProfileContentWrapper.Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 4.5rem;
  grid-gap: 0.25rem;
  ${breakpointsMedia({
    md: css`
      grid-gap: 0.75rem;
    `,
  })}
  img {
    height: 15rem;
    width: 15rem;
    object-fit: cover;
    :hover {
      opacity: 40%;
    }
  }
`;

export default function ProfileScreen({ posts }) {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    console.log(`posts`, posts);
  }, [posts]);

  return (
    <>
      <MenuProfile onAddClick={() => setModalState(true)} />
      <Modal
        isOpen={modalState}
        onClose={() => {
          setModalState(false);
        }}
        animation={{
          open: {
            scale: 1,
            y: '12.5%',
            x: '15%',
          },
          closed: {
            scale: 0,
            y: '100%',
          },
        }}
      >
        {(propsDoModal) => <UploadImageModal propsDoModal={propsDoModal} />}
      </Modal>
      <ProfileContentWrapper>
        <ProfileContentWrapper.Info>
          <img src="/images/nicolas.jpeg" alt="profile pic" />
          <div className="infos">
            <div className="infoRow1">
              <div className="metrics">
                <Text variant="paragraph1" color="tertiary.main" textAlign="left">
                  234
                </Text>
                <Text variant="paragraph1" color="tertiary.light" textAlign="left">
                  Publicações
                </Text>
              </div>
              <div className="metrics">
                <Text>22k</Text>
                <Text variant="paragraph1" color="tertiary.light" textAlign="left">
                  Seguindo
                </Text>
              </div>
              <div className="metrics">
                <Text>134k</Text>
                <Text variant="paragraph1" color="tertiary.light" textAlign="left">
                  Seguidores
                </Text>
              </div>
            </div>
            <div className="infoRow2">
              <Text variant="subTitle">Nicolas Cage</Text>
              <Text variant="paragraph1" color="tertiary.light" textAlign="left">
                A wholesome person responsible for the best movies ever.
              </Text>
            </div>
          </div>
        </ProfileContentWrapper.Info>
        <ProfileContentWrapper.Posts>
          {posts ? (
            posts.map((post) => {
              return (
                <Post
                  imgUrl={post.photoUrl}
                  likes={post.likes ? post.likes.length : 0}
                  key={post._id ? post._id : 'adasd'}
                />
              );
            })
          ) : (
            <div>Carregando conteúdo, aguarde por favor...</div>
          )}
        </ProfileContentWrapper.Posts>
      </ProfileContentWrapper>
    </>
  );
}
