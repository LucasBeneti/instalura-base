import React, { useEffect, useState } from 'react';
import ProfileScreen from '../../../src/components/screens/app/ProfileScreen';
import { authService } from '../../../src/services/auth/authService';
import { useUserService } from '../../../src/services/user/hook';
import websitePageHOC from '../../../src/components/wrappers/WebSitePage/hoc';

const ProfilePage = () => {
  const dados = useUserService.getProfilePage();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (dados.data) {
      const incoming_posts = [];
      Object.entries(dados.data.posts).map((post) => {
        let aux_post = {};
        aux_post[post[0]] = post[1];
        incoming_posts.push(aux_post);
      });
      setPosts([...posts, ...incoming_posts]);
    }
  }, [dados]);

  useEffect(() => {
    if (posts) {
      console.log(`posts`, posts);
    }
  }, [posts]);

  return <ProfileScreen userPosts={posts} />;
};

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: `Profile page`,
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

export async function getServerSideProps(ctx) {
  //eslint-disable-next-line no-console
  console.log('[Server side]');
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const session = await auth.getSession();
    // const profilePage = await userService.getProfilePage(ctx);

    return {
      props: {
        user: {
          ...session,
          // ...profilePage.user,
        },
        // posts: profilePage.posts,
      },
    };
  }
  ctx.res.writeHead(307, { location: '/' });
  ctx.res.end();
  return {
    props: {},
  };
}
