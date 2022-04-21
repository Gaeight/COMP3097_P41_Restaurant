import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Restaurants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          <IonItem>
            <IonLabel>Restaurant 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Restaurant 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Restaurant 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Restaurant 4</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Restaurant 5</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
