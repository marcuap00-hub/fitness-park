// Configurația proiectului Firebase pentru Fitness Park.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB-Mz-XXMZ9iLfEjh5k8rqbc90P60qIEMM",
  authDomain: "fitness-park-9e224.firebaseapp.com",
  projectId: "fitness-park-9e224",
  storageBucket: "fitness-park-9e224.firebasestorage.app",
  messagingSenderId: "531088923349",
  appId: "1:531088923349:web:c3fd1a49d035efa4d6605c"
};
// Notificari pe email (EmailJS) - functioneaza fara server, gratuit pana la 200 email-uri/luna.
// Pasi (o singura data): mergi pe emailjs.com -> creeaza cont -> Email Services -> conecteaza contul
// fintessart@gmail.com (acesta e Gmail-ul de la care vor porni efectiv toate email-urile - il alegi
// cand conectezi serviciul, nu se poate schimba din cod).
// Din Account -> General copiezi Public Key si Service ID, le pui mai jos. Apoi creezi DOUA template-uri
// (Email Templates -> Create New Template) si pui ID-ul fiecaruia in constantele corespunzatoare:
//
// 1) EMAILJS_TEMPLATE_ID_OWNER - trimis TIE cand un client cere online un abonament (inainte de aprobare).
//    Variabile disponibile in template: {{client_name}}, {{client_phone}}, {{plan_name}}, {{price}},
//    {{wants_trainer}}, {{note}}. Campul "To Email" din template pune-l pe {{to_email}}.
//
// 2) EMAILJS_TEMPLATE_ID_CLIENT - trimis CLIENTULUI cand i se activeaza efectiv abonamentul (creat de
//    receptie sau dupa ce aprobi cererea lui). Variabile: {{client_name}}, {{plan_name}}, {{valid_until}},
//    {{member_code}}, {{portal_link}} (link catre contul lui, unde intra automat si isi vede codul QR).
//    Campul "To Email" din template pune-l tot pe {{to_email}}.
const EMAILJS_PUBLIC_KEY = "ayfStW2w7VhfkjjUW";
const EMAILJS_SERVICE_ID = "service_wy9lfxo";
const EMAILJS_TEMPLATE_ID_OWNER = "template_8jr921c";
const EMAILJS_TEMPLATE_ID_CLIENT = "template_34o7sg7";
// Adresa de gmail unde vrei sa primesti notificarile cand cineva cumpara/cere un abonament.
const OWNER_NOTIFY_EMAIL = "fintessart@gmail.com";

