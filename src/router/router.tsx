import { createBrowserRouter } from "react-router-dom";
import AuthComponent from "../core/layouts/auth/auth.component";
import AuthProtectedComponent from "./protected/auth-protected.component";
import PublicComponent from "../core/layouts/public/public.component";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import LoginComponent from "../pages/login/login.component";

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthProtectedComponent layout="public">
          <PublicComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
      ],
    },
    {
      path: Routes.auth,
      element: (
        <AuthProtectedComponent layout="auth">
          <AuthComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.login,
          element: <LoginComponent />,
        },
      ],
    },
  ],
  { basename: "/" }
);

export default router;
