import React from "react";
import Link from "@mui/material/Link";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const LinkGroup = () => {
  return (
    <div>
      <Link
        color="white"
        variant="h6"
        underline="none"
        href="/login"
        sx={rightLink}
      >
        {"Sign In"}
      </Link>
      <Link
        variant="h6"
        underline="none"
        href="/signup"
        sx={{ ...rightLink, color: "white" }}
      >
        {"Sign Up"}
      </Link>
    </div>
  );
};

export default LinkGroup;
