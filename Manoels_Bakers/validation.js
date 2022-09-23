


function formValidator() {

    
    var txtNome = document.getElementById("txtNome").value;
    var txtCPF = document.getElementById("txtCpf").value;
    var txtEmail = document.getElementById("txtEmail");
    console.log(txtEmail);
    var txtTelefone = document.getElementById('telefone').value
    console.log(txtNome.length);
    if (txtNome.length < 3) {
        alert('O nome deve ser maior que 3');
    }

    if (!cpfValidator(txtCPF)) {
        alert('CPF inválido');
    }

    if(txtTelefone.length < 11){
        alert('Telefone inválido');
    }
  

    if(txtEmail.value.indexOf("@") == -1 || txtEmail.value.indexOf(".") || (txtEmail.value.indexOf("@") - txtEmail.value.indexOf("."))){
        alert("Email inválido");
    }

    return false;


}
function cpfValidator(cpf) {


    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}


