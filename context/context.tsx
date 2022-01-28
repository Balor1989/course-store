import { createContext, PropsWithChildren, ReactNode, useState } from "React";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IntContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}
    
export const AppContext = createContext<IntContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IntContext>): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

    return <AppContext.Provider value={{ menu: menuState, firstCategory: firstCategory, setMenu }}>
        {children}
        </AppContext.Provider>;
};