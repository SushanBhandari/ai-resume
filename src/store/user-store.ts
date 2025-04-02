import { create } from "zustand";
import { IUser } from "@/interface";

const userGlobalStore = create((set) => ({
  currentUserData: null,
  setCurrentUserData: (data: IUser) => set({ currentUserData: data }),
}));
export interface IUsersStroe {
  currentUserData: IUser | null;
  setCurrentUserData: (data: IUser) => void;
}

export default userGlobalStore as any;
