function checkCnpj(cnpj) {
    $.ajax({
        'url': 'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/{^0-9}/g, ''),
        'type': "GET",
        'DataType': 'jsonp',
        'success': (dado) => {
            console.log(dado);
        }
    })

}