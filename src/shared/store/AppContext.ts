import React from "react";

interface AppContext {
    searchText?: string;
    setSearchText: (value: string) => void
}

export const AppContext = React.createContext({} as AppContext)