import * as React from "react"
import styles from "./dashboard-header.module.css"

export default function DesktopNav() {
  const [selected, setSelected] = React.useState("Search")

  const handleNavChange = (e: React.MouseEvent<Element>): void => {
    const value = (e.target as HTMLElement).innerText
    setSelected(value)
  }

  const setClassName = (linkName: string): string => {
    return linkName === selected ? styles.tab : ""
  }

  return (
    <ul onClick={handleNavChange}>
      <li className={setClassName("Search")}>
        <a href="#">Search</a>
      </li>
      <li className={setClassName("Profile")}>
        <a href="#">Profile</a>
      </li>
      <li className={setClassName("Sign Out")}>
        <a href="#">Sign Out</a>
      </li>
    </ul>
  )
}
