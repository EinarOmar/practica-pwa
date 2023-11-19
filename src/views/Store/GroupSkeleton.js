import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

function GroupSkeleton() {
  return (
    <>
      {/* Skeleton items */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
          <Stack spacing={1} p={1}>
            <Skeleton variant="rectangular" width={"100%"} height={270} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          </Stack>
        </Grid>
      ))}

      {/* Additional Skeleton item */}
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} sx={{ display: { md: "none", sm: "block", xs: "none" } }}>
        <Stack spacing={1} p={1}>
          <Skeleton variant="rectangular" width={"100%"} height={270} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </Grid>
    </>
  );
}

export default GroupSkeleton;
