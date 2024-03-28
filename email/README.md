# MAIL

**Consegna**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

**Svolgimento**

1. Creo un array con all'interno alcune email (emails)
2. Chiedo all'utente la sua email
3. Creo una variabile globale tipo boolean con valore base "false" (flag)
4. Controllo se l'email dell'utente è nell'array attraverso un for, controllando elemento per elemento dentro l'array
6. Dentro al for imposto una condizione secondo il quale se l'elemento sotto l'indice corrente è uguale all'email inserita dall'utente, cambio il valore della variabile flag da "false" a "true"
7. Fuori dal ciclo for vado a stampare un messaggio in base all'esito
