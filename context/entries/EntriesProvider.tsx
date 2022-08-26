import { FC, ReactNode, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
import { NewEntry } from "../../components/ui/NewEntry";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: ReactNode;
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        " Pending: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "In-Progress: Totam consectetur eius, minus deserunt dolor illo dolorem",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Finished: id enim fugit facere voluptatibus autem dolore",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const NewEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: NewEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
