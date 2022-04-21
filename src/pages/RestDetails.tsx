import React from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonText } from '@ionic/react';
import { star, starHalfOutline, starOutline } from 'ionicons/icons';

const RestDetails: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Restaurant 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Restaurant 1</IonCardSubtitle>
                        <IonCardTitle>Details</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Name:</IonLabel>
                                <IonLabel>XXXXX</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Address:</IonLabel>
                                <IonLabel>XXXXX</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Phone Number:</IonLabel>
                                <IonLabel>XXXXX</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Description:</IonLabel>
                                <IonLabel>XXXXX</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Tags:</IonLabel>
                                <IonLabel>XXXXX</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle class='ion-text-center'>Rated Stars</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent class='ion-text-center ion-padding'>
                        <IonIcon icon={star} />
                        <IonIcon icon={star} />
                        <IonIcon icon={star} />
                        <IonIcon icon={star} />
                        <IonIcon icon={star} />
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle class='ion-text-center'>Map</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default RestDetails;
