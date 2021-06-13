import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import Link from '../../../commons/Link';
import { Box } from '../../../../foundation/Layout/Box';
import { Grid } from '../../../../foundation/Layout/Grid';
import Text from '../../../../foundation/Text';
import { WebsitePageContext } from '../../../wrappers/WebSitePage';
import { postService } from '../../../../services/post/postService';
import { Logo } from '../../../../theme/Logo';
import MenuProfile from '../../../commons/MenuProfile';
import Modal from '../../../commons/Modal';
import UploadImageModal from '../../../pattern/UploadImage';
import Post from '../../../commons/Post';

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
  grid-gap: 0.75rem;
  img {
    height: 15rem;
    width: 15rem;
    /* border-radius: 50%; */
    object-fit: cover;
    :hover {
      opacity: 40%;
    }
  }
`;

export default function ProfileScreen() {
  const { posts, error } = useSWR('api/users/posts', postService().getPosts);
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
      >
        {(propsDoModal) => <UploadImageModal propsDoModal={propsDoModal} />}
      </Modal>
      <ProfileContentWrapper>
        <ProfileContentWrapper.Info>
          <img src="/images/nicolas.jpeg" alt="profile pic" />
          <div className="infos">
            <div className="infoRow1">
              <div className="metrics">
                <Text
                  variant="paragraph1"
                  // tag="p"
                  color="tertiary.main"
                  textAlign="left"
                  // textAlign={{
                  //   xs: 'center',
                  //   md: 'left',
                  // }}
                >
                  234
                </Text>
                <Text
                  variant="paragraph1"
                  // tag="p"
                  color="tertiary.light"
                  textAlign="left"
                  // textAlign={{
                  //   xs: 'center',
                  //   md: 'left',
                  // }}
                >
                  Publicações
                </Text>
              </div>
              <div className="metrics">
                <Text>22k</Text>
                <Text
                  variant="paragraph1"
                  // tag="p"
                  color="tertiary.light"
                  textAlign="left"
                  // textAlign={{
                  //   xs: 'center',
                  //   md: 'left',
                  // }}
                >
                  Seguindo
                </Text>
              </div>
              <div className="metrics">
                <Text>134k</Text>
                <Text
                  variant="paragraph1"
                  // tag="p"
                  color="tertiary.light"
                  textAlign="left"
                  // textAlign={{
                  //   xs: 'center',
                  //   md: 'left',
                  // }}
                >
                  Seguidores
                </Text>
              </div>
            </div>
            <div className="infoRow2">
              <Text variant="subTitle">Nicolas Cage</Text>
              <Text
                variant="paragraph1"
                // tag="p"
                color="tertiary.light"
                textAlign="left"
                // textAlign={{
                //   xs: 'center',
                //   md: 'left',
                // }}
              >
                A wholesome person responsible for the best movies ever.
              </Text>
            </div>
          </div>
        </ProfileContentWrapper.Info>
        <ProfileContentWrapper.Posts>
          {posts ? (
            posts.map((post) => {
              // console.log(post);
              return (
                <Post
                  imgUrl={post.photoUrl}
                  likes={post.likes ? post.likes.length : 0}
                  key={post._id}
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
