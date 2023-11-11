function copy() {
    const copyText = document.getElementById('copytext').getAttribute('data-value');

    navigator.clipboard.writeText(copyText).then(() => {
        console.log('Texto copiado com sucesso.');
        msg('Email copiado', 'success');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        msg('Seu navegador não suporta', 'danger');
    });
}


function msg(mensagem, tipo) {
    const alert = document.getElementById('alert');

    alert.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${tipo} alert-dismissible fade show" role="alert">`,
        `   <div>${mensagem}</div>`,
        '</div>'
    ].join('');

    alert.append(wrapper);

    setTimeout(() => {
        wrapper.classList.add('alert-fade-out');
        wrapper.addEventListener('transitionend', () => {
            wrapper.remove();
        });
    }, 2000);
}

function btnemail() {
    const btn = document.getElementById('copytext');

    btn.addEventListener('mouseover', function() {
        this.innerHTML = 'geovanispop@gmail.com'; 
    });

    btn.addEventListener('mouseout', function() {
        this.innerHTML = '<i class="fa-regular fa-envelope"></i> Email <spam class="emailspam">(clique para copiar)</spam>'; 
    });
}

btnemail();

function btngithub() {
    const btn = document.getElementById('github');

    btn.addEventListener('mouseover', function() {
        this.innerHTML = 'github/geovaniorsoli'; 
    });

    btn.addEventListener('mouseout', function() {
        this.innerHTML = '<i class="fa-brands fa-github"></i> GitHub'; 
    });
}

btngithub();

function btnlinkdin() {
    const btn = document.getElementById('linkedin');

    btn.addEventListener('mouseover', function() {
        this.innerHTML = 'in/geovani-orsoli'; 
    });

    btn.addEventListener('mouseout', function() {
        this.innerHTML = '<i class="fa-brands fa-linkedin"></i> LinkedIn'; 
    });
}

btnlinkdin();

function animation(){
    document.addEventListener('DOMContentLoaded', ()=>{
        var elementos = document.querySelectorAll('.elementos')
        elementos.forEach(function(elementos){
            elementos.classList.add('animado')
        })
    })
}

    animation()