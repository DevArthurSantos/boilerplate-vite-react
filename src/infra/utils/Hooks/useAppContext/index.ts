import { useContext } from "react";

import { AppContext } from "@infra/utils/Context";

export function useAppContext() {
  const context = useContext(AppContext)
  return context
}