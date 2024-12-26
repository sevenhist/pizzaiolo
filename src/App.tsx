import './scss/App.scss';
import { Content } from 'pages/Content';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { ROUTES } from 'routes/routes';
import { NotFoundPage } from 'pages/NotFoundPage';
import { useEffect } from 'react';
import useFoodStore from 'modules/foodStore/store';
import { ItemActive, MenuItems } from 'models/IMenuItem';

function App() {
  const setActiveMenuItem = useFoodStore(store => store.setActiveMenuItem)
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const paramValue = searchParams.get('product') as ItemActive;
    setActiveMenuItem(paramValue ? MenuItems[paramValue] ? paramValue : "pizza" : "pizza");
  }, [searchParams])
  return (
      <div className="App">
        <Routes>
          <Route path={ROUTES.home} element={<Content />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
  );
}

export default App;
