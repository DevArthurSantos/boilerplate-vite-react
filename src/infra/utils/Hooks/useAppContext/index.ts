import { useContext } from "react";

import { AppContext } from "@infra/utils/modules/Context";

export function useAppContext() {
  const context = useContext(AppContext)
  return context
}