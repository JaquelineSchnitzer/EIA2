var L08;
(function (L08) {
    window.addEventListener("load", init);
    let address = "https://eianodeschnitzer.herokuapp.com/";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            courseOfStudies: inputs[3].value,
            age: parseInt(inputs[4].value),
            gender: genderButton.checked
        };
        let stringifyJSON = JSON.stringify(studi);
        /* Request an Server */
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?action=insert&data=" + stringifyJSON, true);
        xhr.send();
    }
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?action=refresh", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let studis = JSON.parse(xhr.responseText);
                let answer = "";
                for (let i = 0; i < studis.length; i++) {
                    answer += "Name: " + studis[i].name + ", " + studis[i].firstname + ", Matrikel: " + studis[i].matrikel + ", "
                        + studis[i].courseOfStudies + ", Mann: " + studis[i].gender + ", Alter: " + studis[i].age + "\n";
                }
                document.getElementsByTagName("textarea")[1].value = answer;
            }
        };
        xhr.send();
    }
    function handleStateChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search(_event) {
        let mtrkl = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?action=find&data=" + mtrkl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let studi = JSON.parse(xhr.responseText);
                console.log(studi);
                let answer = "Name: " + studi.name + ", " + studi.firstname + ", Mtrkl: " + studi.matrikel + ", "
                    + studi.courseOfStudies + ", Mann: " + studi.gender + ", Alter: " + studi.age + "\n";
                document.getElementsByTagName("textarea")[0].value = answer;
            }
        };
        xhr.send();
    }
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=ProcessForm.js.map