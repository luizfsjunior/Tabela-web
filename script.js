const table = document.getElementById("alunos");
const addBtn = document.getElementById("add_btn");

addBtn.addEventListener("click", () => {
    const raInput = document.getElementById("ra");
    const nomeInput = document.getElementById("nome");
    const telInput = document.getElementById("telefone");
    const dataNascInput = document.getElementById("data_nasc");

    var ra = raInput.value.trim();
    var nome = nomeInput.value.trim();
    var tel = telInput.value.trim();
    var dataNasc = dataNascInput.value.trim();
    var data_nasc_br = dataNasc.split('-').reverse().join('/');

    if (ra !== "" && nome !== "" && tel !== "" && dataNasc !== "") {
        var newRow = table.insertRow(-1);
        var raCell = newRow.insertCell(0);
        var nomeCell = newRow.insertCell(1);
        var dataNascCell = newRow.insertCell(2);
        var telCell = newRow.insertCell(3);
        var removeCell = newRow.insertCell(4);

        raCell.innerHTML = ra;
        nomeCell.innerHTML = nome;
        dataNascCell.innerHTML = data_nasc_br;
        telCell.innerHTML = tel;
        removeCell.innerHTML = `<button class="remove_btn">Remover</button>`;
        removeCell.firstChild.addEventListener("click", () => {
            table.deleteRow(newRow.rowIndex);
        });

        raInput.value = "";
        nomeInput.value = "";
        telInput.value = "";
        dataNascInput.value = "";
    }
});
