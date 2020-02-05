

function cadastrar()
{
    var tbody = document.getElementById("alunos");
    var nome = document.getElementById("nome").value;

    if (nome == "")
    {
        alert("O campo nome é obrigatorio");
        return false;
    }

    var linha = "<tr>"
        +"<td>"+ nome +"</td>"
        +"<td>pedro@paulo.com</td>"
        +"<td>11-1234-1234</td>"
        +"<td>Masculino</td>"
        +"<td>Noiturno</td>"
        +"</tr>";
    
    tbody.innerHTML += linha; 
}