// Configurația proiectului Firebase pentru Fitness Park.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB-Mz-XXMZ9iLfEjh5k8rqbc90P60qIEMM",
  authDomain: "fitness-park-9e224.firebaseapp.com",
  projectId: "fitness-park-9e224",
  storageBucket: "fitness-park-9e224.firebasestorage.app",
  messagingSenderId: "531088923349",
  appId: "1:531088923349:web:c3fd1a49d035efa4d6605c"
};
// Cheia VAPID pentru notificari push (Project Settings -> Cloud Messaging -> Web configuration -> Generate key pair).
// Pana nu pui cheia reala aici, butonul "Activeaza notificarile" din contul clientului va arata o eroare - e normal.
const FCM_VAPID_KEY = "";

// Notificare pe email (EmailJS) cand un client trimite o cerere de cumparare abonament online.
// Pasi (o singura data, gratuit): mergi pe emailjs.com -> creeaza cont -> Email Services -> conecteaza-ti Gmail-ul ->
// Email Templates -> creeaza un template cu variabilele: client_name, client_phone, plan_name, price, wants_trainer, note, to_email ->
// copiaza Service ID, Template ID si Public Key (din Account -> General) si pune-le mai jos.
const EMAILJS_PUBLIC_KEY = "";
const EMAILJS_SERVICE_ID = "";
const EMAILJS_TEMPLATE_ID = "";
// Adresa de gmail unde vrei sa primesti notificarile cand cineva cumpara/cere un abonament.
const OWNER_NOTIFY_EMAIL = "marcu.ap00@gmail.com";

