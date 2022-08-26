import { EntriesState } from "./";

type UIActionType = { type: "Entries - ActionName" };

export const entriesReducer = (
  state: EntriesState,
  action: UIActionType
): EntriesState => {
  switch (action.type) {
    // case "Entries - ActionName":
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
