
import { AppProvider } from './contexts/AppContext';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </AppProvider>
  )
}