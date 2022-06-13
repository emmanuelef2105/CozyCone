//importar los datos de cozycone desde firebase y guardarlos en una variable
 import { db } from "./utils/firebase";
 db.collection("cozycone").get().then(snapshot => {
        console.log(snapshot.docs.map(doc => doc.data()));
    }
);
