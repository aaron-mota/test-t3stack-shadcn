import { create } from "zustand";

import { type Mail, mails } from "./data";

type State = {
  mail: Mail["id"] | null;
  setMail: (id: Mail["id"] | null) => void;
};

export const useMail = create<State>((set) => ({
  mail: mails[0]!.id, // TODO: fix this
  setMail: (id) => set({ mail: id }),
}));
