import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton expand="block" href='/aboutus'>About Us</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
