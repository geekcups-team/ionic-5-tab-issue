import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

const FirstTab: React.FC = () => {
  return (
    <IonRow>
      <IonCol>
        FirstTab
      </IonCol>
    </IonRow>
  );
}


const SecondTab: React.FC = () => {
  return (
    <IonRow>
      <IonCol>
        SecondTab
      </IonCol>
    </IonRow>
  );
}

const Home: React.FC = () => {
  const match = useRouteMatch();

  const RedirectToFirst: React.FC = () => <Redirect to={`${match.url}/first`} />;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTabBar>
            <IonTabButton tab="first" href={`${match.url}/first`}>
              <IonLabel>FirstTab</IonLabel>
            </IonTabButton>
            <IonTabButton tab="second" href={`${match.url}/second`}>
              <IonLabel>Second tab</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Route path={`${match.path}/first`} component={FirstTab} exact={true}/>
        <Route path={`${match.path}/second`}  component={SecondTab} exact={true}/>
        <Route path={`${match.path}`} component={RedirectToFirst} exact={true}/>
      </IonContent>
    </>
  );
};

export default Home;
