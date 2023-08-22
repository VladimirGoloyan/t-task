import React from "react";
import { getUsers } from "../../shared/api/sharedApi";
import { User } from "./types";
import axios, { AxiosError } from "axios";

export const useGetUsers = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<User[] | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setData((prev) => (prev ? [...prev, ...data] : [...data]));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = React.useCallback(() => {
    // TODO add functional for scroll preserve on rerender
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    getData();
  }, [loading]);

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { data, loading, error };
};
