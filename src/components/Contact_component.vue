<template>
  <div>
    <div class="container-fluid">
      <!-- Contact -->
      <div class="row justify-content-center">
        <h1>Contact</h1>
      </div>

      <div class="row justify-content-center">
        <h4>Nous serons ravi de rentrer en contact avec vous !</h4>
      </div>

      <div class="row input-container">
        <div class="col-md-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Nom et Prenom</label> 
          </div>
        </div>

        <div class="col-md-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Email</label> 
          </div>
        </div>

        <div class="col-md-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Téléphone</label> 
          </div>
        </div>

        <div class="col-md-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>

        <div class="col-xs-12">
          <div class="btn-lrg submit-btn" @click.prevent="Click_Btn()">Soumettre !</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact_component",

  methods: {
    Click_Btn: function() {
      alert("Bravo, le formulaire de contact à bien était envoyé !")
    }
  }
};
</script>



<style scoped>
h1 {
  font-weight: 600;
  font-size: 72px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}

h4 {
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

/* ///// inputs /////*/

input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
  font-size: 0.75em;
  color: #999;
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
}

@media only screen and (max-width: 768px){
  .styled-input {
      width:100%;
  }
}

.styled-input label {
  color: #999;
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide { 
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 30px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #2d2d2d;
  color: white;
  border-radius: 4px;
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}

.submit-btn {
  padding: 7px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
            0 2px 10px 0 rgba(0,0,0,0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
  background-color: #3d747d;
  color: white;
  transform: translateY(1px);
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.10),
            0 3px 3px 0 rgba(0,0,0,0.09);
}

@media (max-width: 768px) {
  .submit-btn {
      width:100%;
      text-align:center;
  }
}

input[type=checkbox] + label {
  color: #ccc;
  font-style: italic;
} 

input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
}
</style>
