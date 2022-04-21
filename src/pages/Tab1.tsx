import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
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
            <IonLabel>Restaurant</IonLabel>
            <IonButton color="medium">View</IonButton>
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
