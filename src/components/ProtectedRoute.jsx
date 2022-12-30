import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetCurrentUserQuery } from "../features/auth/authApi";
import Loader from "./Loader";

const ProtectedRoute = () => {
  const { data: currentUser, error: currentUserError, isLoading: isLoadingCurrentUser } = useGetCurrentUserQuery();

  return currentUserError ? (
    <Navigate to="/login" />
  ) : isLoadingCurrentUser ? (
    <Loader />
  ) : currentUser ? (
    <>{<Outlet />}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
