import React, {useState} from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonInput, IonLabel, IonButton} from '@ionic/react';


const AddRest: React.FC = () => {


  const [input, setInput] = useState({
    name:'',
    address:'',
    phone:'',
    description:''
  })
 
  function handleChange(e: { target: { name: any; value: any; }; }){
    const {name, value} = e.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]:value
      }
    })
  }
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <form>
          <IonItem lines="full">
            <IonLabel position='floating'>Name</IonLabel>
            <IonInput  value={input.name} name="name" type="text"/>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position='floating'>address</IonLabel>
            <IonInput   value={input.address} name="address" type="text" onIonChange={e => handleChange}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position='floating'>phone</IonLabel>
            <IonInput  value={input.phone} name="phone" type="text" onIonChange={e => handleChange}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position='floating'>description</IonLabel>
            <IonInput   value={input.description} name="description" type="text" onIonChange={e => handleChange}></IonInput>
          </IonItem>
        </form>
       
      </IonContent>
    </IonPage>
    );
};

export default AddRest;