import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Login from "./Login.jsx";
import Homepage from "./Homepage.jsx";
import InboxPage from "./InboxPage.jsx";
import MessagingPage from "./MessagingPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import SearchPage from "./SearchPage.jsx";
import VisitProfilePage from "./VisitProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "inbox",
    element: <InboxPage />,
  },
  {
    path: "messaging",
    element: <MessagingPage />,
  },
  {
    path: "home",
    element: <Homepage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "visiting",
    element: <VisitProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
