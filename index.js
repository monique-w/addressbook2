class AddressBook {
    constructor() {
      this.contacts = [];
        /*new Contact("Adam", "adam@grandcircus.co", "111-222-3333", "friend"),
        new Contact("Shelly", "shelly@grandcircus.co", "111-222-3333", "family"),
        new Contact("Bob", "bob@grandcircus.co", "111-222-3333", "family"),
        new Contact("Megan", "megan@grandcircus.co", "111-222-3333", "coworker")
      ];*/
    }
  

    add(info) {
      this.contacts.push(info);
    }
  
  deleteAt(index) {
      this.contacts.splice(index, 1);
      addressBook.display();
    }
  
  display() {
      const card =
      document.getElementsByClassName(".card");
      contactList.innerHTML ="";
      
    
      //document.getElementById(".contact-card")  //grabbing contact-list//change what seciton holds
    let count = 0; 
    for (let contact of this.contacts) {
        const newEntry = documents.createElement("section")   
        newEntry.setAttribute("data-index", count)  //data-index id's place in index
        newEntry.classList.add("card");   //use contact box to style user info(classList)
        createNewEntry.innerText = `
        <ul class="card">
            <li>${contact.name}</li>
            <li>${contact.email}</li>
            <li>${contact.phone}</li>
            <li>${contact.relation}</li>
        </ul>
        <i class="material-icons">delete</i>`; 
         //blueprint for every section we construct...3 boxes at bottom
        document.querySelector("section").appendChild(newEntry);
        count++;
        button.innerHTML = <i class="material-icons">delete</i>;
        document.appendChild(button);

        button.addEventListener('click', () => {
          this.deleteAt(i);
          this.display();

    });
    
    

  
  
  
  class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  }
}
  

  
  const address = new AddressBook([new contact("Monique Willis", "mo@gmail.com", "678-468-3961", "me")]);
  addressBook.display();


