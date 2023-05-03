import { AppContext, IStatesProps } from "."
import AppContextProviderProps from "@infra/types/contextProviderProps"




export function AppContextProvider({ children }: AppContextProviderProps) {

  return (
    <AppContext.Provider value={{
      state: IStatesProps
    }}>
      {children}
    </AppContext.Provider>
  )
}