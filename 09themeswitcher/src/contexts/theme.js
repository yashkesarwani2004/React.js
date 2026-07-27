import React, { createContext, useContext } from "react";

{/* niche vala jo hai vo context ko create kar raha aur jab kuch nahinrahega to default me ye jo 3 chij diye hai ye chalega */}
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

{/* ye niche provider banraha hai jisko use karke bind(band dena) kar dege sab ek jagha uper jo create kiya tha context uper */}
export const ThemeProvider = ThemeContext.Provider

{/* niche hmne usetheme banaya hai hiske help se hm kahi bhinjo create kiya tha na context usko use kar sakte hai usecontext context ko use karne ke liye hota hai */}
export default function useTheme(){
    return useContext(ThemeContext)
}