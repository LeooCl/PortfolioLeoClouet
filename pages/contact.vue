<template>
  <section class="contact">
    <h1 class="form-title">Contactez-moi</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nom</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="message">Message</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

// Déclare les variables pour le formulaire
const name = ref("");
const email = ref("");
const message = ref("");

// Fonction pour traiter l'envoi du formulaire
const submitForm = () => {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  };

  // Envoie le message avec EmailJS
  emailjs
    .send(
      "service_3mtxcti",
      "template_rnbh6os",
      templateParams,
      "YXyHUFlGir4_WgZYx"
    )
    .then(
      (response) => {
        console.log("Email envoyé avec succès", response);
        alert("Votre message a été envoyé avec succès!");
        // Réinitialiser le formulaire
        name.value = "";
        email.value = "";
        message.value = "";
      },
      (error) => {
        console.error("Erreur lors de l'envoi de l'email", error);
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    );
};
</script>

<style scoped>
.contact {
  padding: 40px;
  padding-top: 80px;
  text-align: center;
}

.form-title {
  font-size: 3rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

form label {
  margin-top: 10px;
  font-size: 1.2rem;
}

form input,
form textarea {
  padding: 10px;
  margin-top: 5px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

form button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

form button:hover {
  background-color: #218838;
}
</style>