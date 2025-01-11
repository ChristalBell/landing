"use client";
import { Box, Input, Button } from "@mui/material";

import React, { useState } from "react";

const Email = () => {
  const [isValid, setIsValid] = useState(true);
  // console.log(email);

  const isEmail = (email: string) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
      email
    );
  };

  const validator = (email: string) => {
    const isValidEmail = isEmail(email);
    if (isValidEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Box>
      <Input
        placeholder="email address"
        onChange={(e) => validator(e.target.value)}
        sx={{
          border: `1px solid  ${isValid ? "navy" : "red"}`,
          borderRadius: "2rem",
          height: "3rem",
          width: "26.5rem",
          color: "navy",
          padding: "1.25rem",
        }}
      />
      <Button
        variant="outlined"
        sx={{
          border: `1px solid navy`,
          borderRadius: "2rem",
          height: "3rem",
          width: "5rem",
          color: "navy",
          padding: "1.25rem",
          fontSize: ".5rem",
          marginLeft: "2.5rem",

          "&:hover": { backgroundColor: "navy", color: "white" },
        }}
      >
        {" "}
        Subscribe{" "}
      </Button>
    </Box>
  );
};

export default Email;
