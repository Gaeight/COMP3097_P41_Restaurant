import { Redirect, Route } from 'react-router-dom';

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { searchCircleOutline, accessibilityOutline, homeOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import AboutUs from './pages/AboutUs';
import AddRest from './pages/AddRest.page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/restaurants">
            <Tab1 />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <Redirect to="/restaurants" />
          </Route>
          <Route path="/addRest">
            <AddRest />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/restaurants">
            <IonIcon icon={homeOutline} />
            <IonLabel>Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/about">
            <IonIcon icon={accessibilityOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
