import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Cocktails from './pages/Cocktails'
import Cocktailcard from './comps/card/cocktail-card'
import Settings from './pages/Settings'
import Learn from './pages/Learn'

function App(): JSX.Element {

  return (
      <Router>
          <div className="App">
            <Routes>

              <Route 
                path="/"
                element={<Home/>}/>
              
                <Route 
                path="/Cocktails"
                element={<Cocktails/>}>


                <Route
                      index
                      element={
                        <p>Select a Cocktail</p>
                      }
                    />

                  <Route path=":cocktailid" element={<Cocktailcard/>}/>

                </Route>
                
                <Route 
                path="/Learn"
                element={<Learn/>}/>
                
                <Route 
                path="/Settings"
                element={<Settings/>}
                
                />
                

                <Route
                      path="*"
                      element={
                        <main>
                          <p>This is not a page</p>
                        </main>
                      }
                />

            </Routes>
        </div>
      </Router>

  )
}

export default App