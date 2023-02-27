import { FC } from 'react';
import { Children } from '../../types/types';
import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/react';

export const Layout: FC<Children>  = ({ children }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>logo</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                { children }
            </IonContent>
        </IonPage>
    );
}