import React from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import { useGetUsers } from "./helper";
import UserCard from "../../shared/components/UserCard";

const sxClasses = {
  paper: { p: 2, m: 2, width: 1 / 2 },
  scrollGrid: {
    pt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  loading: {
    width: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    m: 2,
    width: 1 / 4,
  },
};

const InfiniteScroll = () => {
  const { data, loading } = useGetUsers();

  return (
    <Paper sx={sxClasses.paper}>
      <Grid container sx={sxClasses.scrollGrid}>
        {loading && (
          <Box sx={sxClasses.loading}>
            <CircularProgress />
          </Box>
        )}
        {!loading &&
          data?.length !== 0 &&
          data?.map((item) => (
            <Grid key={item.id} item sx={sxClasses.gridItem}>
              <UserCard user={item} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default InfiniteScroll;
