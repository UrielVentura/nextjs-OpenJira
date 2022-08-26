import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box } from "@mui/system";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const AddingToggle = () => setIsAddingEntry(!isAddingEntry);
  const cleanInput = () => {
    setIsAddingEntry(false);
    setInputValue("");
    setTouched(false);
  };

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    cleanInput();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
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
              onClick={onSave}
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
