import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box } from "@mui/system";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const AddingToggle = () => setIsAdding(!isAdding);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New Entry"
            autoFocus
            multiline
            label="New Entry"
            helperText={inputValue.length <= 0 && touched && "Enter a value"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={AddingToggle}>
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
            >
              {" "}
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={AddingToggle}
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};
