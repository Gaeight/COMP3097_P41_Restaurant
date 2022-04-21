import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard } from '@ionic/react';

const AboutUs: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonTitle class='ion-text-center ion-padding'>Final Assignment Ionic</IonTitle>
                <IonTitle class='ion-text-center ion-padding'>Restaurant App</IonTitle>
                <IonCard>
                    <IonList lines="inset">
                        <IonTitle class='ion-text-center ion-padding'>Members</IonTitle>
                        <IonItem class='ion-text-center' color="white">
                            <IonLabel>Oliver Kmiec</IonLabel>
                            <IonLabel>101247765</IonLabel>
                        </IonItem>
                        <IonItem class='ion-text-center' color="white">
                            <IonLabel>Gabe</IonLabel>
                            <IonLabel>101247765</IonLabel>
                        </IonItem>
                        <IonItem class='ion-text-center' color="white">
                            <IonLabel>Ruzzel</IonLabel>
                            <IonLabel>101247765</IonLabel>
                        </IonItem>
                        <IonItem class='ion-text-center' color="white">
                            <IonLabel>John Michael</IonLabel>
                            <IonLabel>101247765</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default AboutUs;
