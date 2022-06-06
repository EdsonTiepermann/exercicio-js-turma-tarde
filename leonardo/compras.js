function valorPagamento() {
    let totalCompra = document.getElementById('valor').value;
    let tipoPagamento = document.getElementById('pagamento').value;
    totalCompra = parseFloat(totalCompra);
    let quantParcelas = document.getElementById ('parcelas').value;
    let valorParcela = '';
    let valorFinal = '';
    let cartaDisponivel = true; 

    if (tipoPagamento == 'pix') {
        valorFinal = totalCompra - (totalCompra * 10 / 100);
        document.getElementById ('result').value = ('Total a pagar R$' + valorFinal);
    } else if (tipoPagamento == 'débito' && cartaDisponivel == true){
        document.getElementById ('result').value = ('Total a pagar R$' + totalCompra);
    } else if (tipoPagamento == 'crédito' && cartaDisponivel == true) {
        valorFinal = totalCompra + (totalCompra * 5 / 100);
        document.getElementById ('result').value = ('Total a pagar R$' + valorFinal);
    } else if (tipoPagamento == 'parcelado' && cartaDisponivel == true) {
        if (quantParcelas == '1') {
            valorFinal = totalCompra + (totalCompra * 10 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '2') {
            valorFinal = totalCompra + (totalCompra * 20 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '3') {
            valorFinal = totalCompra + (totalCompra * 30 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '4') {
            valorFinal = totalCompra + (totalCompra * 40 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '5') {
            valorFinal = totalCompra + (totalCompra * 50 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        }
    } else if (tipoPagamento == 'carne') {
        if (quantParcelas == '1') {
            valorFinal = totalCompra + (totalCompra * 20 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '2') {
            valorFinal = totalCompra + (totalCompra * 40 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '3') {
            valorFinal = totalCompra + (totalCompra * 60 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '4') {
            valorFinal = totalCompra + (totalCompra * 80 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        } else if (quantParcelas == '5') {
            valorFinal = totalCompra + (totalCompra * 100 / 100);
            valorParcela = valorFinal / quantParcelas;
            document.getElementById ('result').value = ('Total a pagar R$' + valorFinal + '! Pagamento realizado como '+ tipoPagamento +' em 1x ficando cada parcela por R$' + valorParcela);
        }
    } else {
        alert ('Favor informar valores válidos!');
    }
}

