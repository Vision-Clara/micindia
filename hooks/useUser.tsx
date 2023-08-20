import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { getUserProfile } from "@/api/user";

export function useUser({
  redirectTo,
  redirectIfFound,
}: {
  redirectTo?: string;
  redirectIfFound?: string;
}) {
  const { data: user, error, isLoading } = useSWR("/profile", getUserProfile);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || !isLoading) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, isLoading, hasUser]);

  return error ? null : user;
}
