namespace L04_Interfaces {
    // Struktur des heterogenen assoziativen Arrays als Datensatz f�r eine studierende Person
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        courseOfStudies: string
        age: number;
        gender: boolean;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
         [matrikel: string]: Studi;
    }

    /* Simples Array zum Speichern der Studi-Datens�tze (nur zur Demonstration)
    export let studiSimpleArray: Studi[] = []; */
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
    
}