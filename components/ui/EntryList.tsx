import { List, Paper } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    //TODO: Here we will drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          //overflow: "scroll",
          backgroundColor: "transparent",
          padding: 1,
        }}
      >
        {/** TODO: opacity will change if I'm dragging or not*/}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
