/** @format */
"use client";

import { Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const LogoEmelent = () => {
  const router = useRouter();

  return (
    <Tooltip title='Home' arrow>
      <Typography
        variant='h5'
        onClick={() => router.push("/")}
        sx={{ cursor: "pointer" }}>
        MyWeb
      </Typography>
    </Tooltip>
  );
};

export default LogoEmelent;
