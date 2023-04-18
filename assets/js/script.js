var btn = document.querySelector('#btn');
var errore = document.querySelector('#errore');
var lista = document.querySelector('#lista');

function Persona (_nome, _cognome, _dataNascita){
    this.nome = _nome;
    this.cognome = _cognome;
    this.dataNascita = _dataNascita;
    this.calcolaEta = () => {
        var oggi = new Date();
        var anno = (oggi.getFullYear() - this.dataNascita.getFullYear());
    
        if(oggi.getMonth() < this.dataNascita.getMonth() || oggi.getMonth() == 
        this.dataNascita.getMonth() && oggi.getDate() < this.dataNascita.getDate()){
            anno--;
        }
        return anno;
    }
    this.aggiungiRiga = () => {
        let table = document.createElement('tr');
        table.innerHTML += `<td>${this.nome}</td><td>${this.cognome}</td><td>${this.calcolaEta()}</td>`;
        lista.appendChild(table);
        svuotaForm();
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    var newNome = document.querySelector('#nome').value;
    var newCognome = document.querySelector('#cognome').value;
    var dataNascita = new Date (document.querySelector('#dataNascita').value);
    if(newNome && newCognome && dataNascita){
        errore.style.display = 'none';
        var newPersona = new Persona (newNome, newCognome, dataNascita);
        newPersona.aggiungiRiga()
    } else {
        errore.style.display = 'block';
        errore.innerHTML = 'Attenzione! devi scrivere i dati per procedere!'
        svuotaForm();
        return;
    }
})

function svuotaForm(){
    document.querySelector('#nome').value = '';
    document.querySelector('#cognome').value = '';
    document.querySelector('#dataNascita').value = '';
}
