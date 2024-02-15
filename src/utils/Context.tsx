import { createContext } from "react";

import cfg from "./ConfigLoader";

export const AppContext = createContext(cfg);
