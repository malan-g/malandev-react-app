import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root, 
  Home as HomePage,
  WorkHistory as WorkHistoryPage,
  Qualifications as QualificationsPage,
  Projects as ProjectsPage,
  Project as ProjectPage,
  Skills as SkillsPage,
  Skill as SkillPage
} from "./routes"
import ErrorPage from "./error-page.jsx"
// import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about/work-history",
        element: <WorkHistoryPage />
      },
      {
        path: "/about/qualifications",
        element: <QualificationsPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:project",
        element: <ProjectPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/skills/:skill",
        element: <SkillPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
