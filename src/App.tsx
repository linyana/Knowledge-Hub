import { Route, Routes } from 'react-router'
import {
  routes,
} from '@/routes'
import '@/App.css'

function App() {

  return (
    <Routes>
      {
        routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={(
              <>
                { route.element }
              </>
            )}
          />
        ))
      }
    </Routes>
  )
}

export default App
