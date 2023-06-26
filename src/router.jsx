import { createBrowserRouter } from 'react-router-dom'

//import layouts
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'

//import components
import About from './components/About'
import LandingPage from './pages/user/LandingPage'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Feature from './components/Feature'
import NotFound from './components/NotFound'
import Community from './pages/user/Community'
import Login from './pages/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import OtherBlog from './components/OtherBlog'
import ManageAccount from './pages/admin/ManageAccount'
import ManageArticle from './pages/admin/ManageArticle'
import ManageCommunity from './pages/admin/ManageCommunity'
import ManageVideo from './pages/admin/ManageVideo'
import Article from './components/Article'
import Video from './components/Video'
// import LibraryArticle from './components/LibraryArticle'

import Yt from './Yt'
import AddVideo from './pages/admin/video/AddVideo'

// User
import AddUser from './pages/admin/user/AddUser'
import UserData from './pages/admin/user/UserData'

// video
import VideoData from './pages/admin/video/VideoData'
import EditVideo from './pages/admin/video/EditVideo'

// Artikel
import ArtikelData from './pages/admin/artikel/ArtikelData'
import AddArtikel from './pages/admin/artikel/AddArtikel'
import EditArtikel from './pages/admin/artikel/EditArtikel'

// Community
import AddCommunity from './pages/admin/community/AddCommunity'
import CommunityData from './pages/admin/community/CommunityData'

// auth
import Logins from './pages/auth/Logins'


const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/otherblog",
        element: <OtherBlog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/video",
        element: <Video />,
      },
   /*   {
        path: "/libraryarticle",
        element: <LibraryArticle />,
      }, */
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/manage_account",
        element: <ManageAccount />,
      },
      {
        path: "/manage_community",
        element: <ManageCommunity />,
      },
      {
        path: "/manage_video",
        element: <ManageVideo />,
      },
      {
        path: "/manage_article",
        element: <ManageArticle />,
      },
      {
        path: "/data/user",
        element: <UserData />,
      },
      {
        path: "/data/user/add",
        element: <AddUser />,
      },
      {
        path: '/data/video',
        element: <VideoData />
      },
      {
        path: 'add/video',
        element: <AddVideo />
      },
      {
        path: '/data/video/edit/:id',
        element: <EditVideo />
      },
      {
        path: '/data/artikel',
        element: <ArtikelData />
      },
      {
        path: '/data/artikel/add',
        element: <AddArtikel />
      },
      {
        path: '/data/artikel/edit/:id',
        element: <EditArtikel />
      },
      {
        path: '/data/community',
        element: <CommunityData />
      },
      {
        path: '/data/community/add',
        element: <AddCommunity />
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/admin_login",
    element: <Login />,
  },
  
  {
    path: '/yt',
    element: <Yt />
  },
  {
    path: '/login',
    element: <Logins />
  }
  
]);

export default router