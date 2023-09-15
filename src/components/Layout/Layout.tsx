import React from 'react'
import { NavBar } from '../NavBar/NavBar'

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <footer>
        <p>This is a footer</p>
      </footer>
    </>
  )
}
