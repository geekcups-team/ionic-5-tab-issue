import React from 'react';
import { Route, Redirect } from 'react-router-dom' ;
import { flag, people } from 'ionicons/icons';

import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';

import HomePage from '../pages/Home';
import TabPage from '../pages/Tab';

const RedirectToHome: React.FC = () => <Redirect to="home" />;

const AppLayout = () => {

  return (
    <IonPage>
      <Route path="/home" component={HomePage} exact={true}/>
      <Route path="/tab" component={TabPage} />
      <Route path="/" component={RedirectToHome} exact={true}/>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={flag} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab" href="/tab">
          <IonIcon icon={people} />
          <IonLabel>Tab</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default AppLayout;
