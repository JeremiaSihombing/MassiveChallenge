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
import LibraryArticle from './components/LibraryArticle'


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
      {
        path: "/libraryarticle",
        element: <LibraryArticle />,
      },
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
]);

export default router