import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[]; //TODO: miss type for this array
}

export const EntriesContext = createContext({} as ContextProps);
