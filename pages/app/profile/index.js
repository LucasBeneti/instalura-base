import React from 'react';
import ProfileScreen from '../../../src/components/screens/app/ProfileScreen';
import websitePageHOC from '../../../src/components/wrappers/WebSitePage/hoc';
import { authService } from '../../../src/services/auth/authService';
import { userService } from '../../../src/services/user/userService';

const ProfilePage = ({ userInfo, posts }) => {
  const rightPostOrder = posts.reverse();

  // const dados = useUserService.getProfilePage();
  // const { posts, error } = useSWR('api/users/posts', postService().getPosts);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   if (dados.data) {
  //     const incoming_posts = [];
  //     Object.entries(dados.data.posts).map((post) => {
  //       post.map(information => {
  //         let aux_post = {};
  //         aux_post[post[0]] = post[1];
  //         incoming_posts.push(aux_post);
  //       })
  //     });
  //     setPosts([...posts, ...incoming_posts]);
  //   }
  // }, [dados]);

  // useEffect(() => {
  //   if (posts) {
  //     console.log(`posts`, posts);
  //     posts.map((post) => {
  //       console.log(post.photoUrl);
  //     });
  //   }
  // }, [posts]);

  return <ProfileScreen userInfo={userInfo} posts={rightPostOrder} />;
};

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile page',
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
    const user = await auth.getSession();
    const dados = await userService.getProfilePage(ctx);

    const posts = dados.posts.filter((post) => post.user === user.id);
    const { userInfo } = dados;
    // const profilePage = await userService.getProfilePage(ctx);

    return {
      props: {
        userInfo,
        posts,
      },
    };
  }
  ctx.res.writeHead(307, { location: '/' });
  ctx.res.end();
  return {
    props: {},
  };
}
