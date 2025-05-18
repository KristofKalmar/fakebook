import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getStorage, provideStorage} from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAq7qQbhqQUQ3XnOm7TJEQA3bqxpPJNuiE",
  authDomain: "fakebook-c6354.firebaseapp.com",
  projectId: "fakebook-c6354",
  storageBucket: "fakebook-c6354.firebasestorage.app",
  messagingSenderId: "1018804087202",
  appId: "1:1018804087202:web:efcb84360e58598bd1eafb"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ]
};
