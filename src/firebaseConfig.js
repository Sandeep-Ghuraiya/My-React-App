
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-AOMHM3LyL2oLVha6YpxQ_4SZaeFM9-Y",
    authDomain: "my-react-app-7ee32.firebaseapp.com",
    projectId: "my-react-app-7ee32",
    storageBucket: "my-react-app-7ee32.appspot.com",
    messagingSenderId: "167411495490",
    appId: "1:167411495490:web:cd3709058386744cb733db"

}

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase