import React from "react";
import { Alert, Box, FormLabel, Input } from "@chakra-ui/react";

const InPut = ({ type, name, label, value, error, onChange }) => {
  return (
    <Box>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <Alert status="error">{error}</Alert>}
    </Box>
  );
};

export default InPut;
