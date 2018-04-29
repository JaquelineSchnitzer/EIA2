namespace L04_Interfaces {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementByID("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            courseOfStudies: inputs[3].value,
            age: parseInt(inputs[4].value),
            gender: genderButton.checked
        };

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;


        function refresh(_event: Event): void {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = "";
            // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
            for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
                let studi: Studi = studiHomoAssoc[matrikel];
                let line: string = matrikel + ": ";
                line += studi.name + ", " + studi.firstname + ", " + studi.courseOfStudies + ", " + studi.age + " Jahre ";
                line += studi.gender ? "(M)" : "(F)";
                output.value += line + "\n";
            }


            function search(_event: Event): void {
                let searchMatrikel: string = inputs[6].value;
                let studi: Studi = studiHomoAssoc[searchMatrikel];
                let outputMatrikel: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
                if (studi) {
                    let line: string = searchMatrikel + ": ";
                    line += studi.courseOfStudies + ", " + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
                    line += studi.gender ? "(M)" : "(F)";

                    outputMatrikel.value = line;
                } else {
                    outputMatrikel.value = "Search not found.";
                }

            }

        // zusätzliche Konsolenausgaben zur Demonstration
        /*console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();*/

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
    }
}}