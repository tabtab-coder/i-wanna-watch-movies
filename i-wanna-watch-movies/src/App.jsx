import { useState } from 'react'
import { Routes, Route } from "react-router";

import Layout from './components/Layout'
import {FilmsPage} from './pages/FilmsPage'
import {TheatersPage} from './pages/TheatersPage'
import {CalendarPage} from './pages/CalendarPage'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CalendarPage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="theaters" element={<TheatersPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
