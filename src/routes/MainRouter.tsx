import { AuthorizedRoutes } from "./authorized-routes/AuthorizedRoutes";
import { NonAuthorizedRoutes } from "./non-authorized-routes/NonAuthorizedRoutes";

export const MainRouter = () => {
  const userObj = localStorage.getItem("user");

  if (!userObj) {
    return <NonAuthorizedRoutes />;
  } else {
    return <AuthorizedRoutes />;
  }
};