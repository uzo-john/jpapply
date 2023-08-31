<template>
    <h1>APPLICATION FORM</h1>
  <form @submit.prevent="handleSubmit">
        <label >First Name:</label>
        <input type="first name" required v-model="firstname">
        <label>Surname:</label>
        <input type="surname" required v-model="surname">
        <label>Other Name:</label>
        <input type="other name" required v-model="othername">
    <div class="personal">
      <label>Gender:</label>
      <select class="text" v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="none">None</option>
      </select>
      <label>Role:</label>
      <select class="text" v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
          <option value="designer">Data Analyis</option>
          <option value="designer">Data Science </option>
          <option value="designer">Networking</option>
          <option value="cloud">Cloud Engineering</option>
      </select>
    </div>

    <label >High School:</label>
    <input class="text" type="high school" required v-model="highschool">
    <div class="personal">
        <label for="date">Date of Entry:</label>
        <input class="text" type="date" required v-model="selectedDate1">
        <label for="date">Date of Graduted:</label>
        <input class="text" type="date" required v-model="selectedDate2">
    </div>
    
    <label >Collage:</label>
    <input class="text" type="collage" required v-model="collage">
    <div class="personal">
        <label for="date">Date of Entry:</label>
        <input class="text" type="date" required v-model="selectedDate3">
        <label for="date">Date of Graduted:</label>
        <input class="text" type="date" required v-model="selectedDate4">
    </div>

    <label>Degree:</label>
      <select class="text" v-model="degree">
          <option value="hnd">HND</option>
          <option value="master">Master Degree</option>
          <option value="diploma">Diploma</option>
          <option value="diploma">PHD (Docter of Philosophy)</option>
      </select>

      <label> Personal Skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>
  
      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept Terms And Condition</label>
      </div>
  
      <div class="submit">
          <button v-on:click="moveAccount">create an account</button>
      </div>
  </form>
  
</template>
  
<script>
  export default {
      data() {
          return{
              firstname: "",
              surname: "",
              othername: "",
              password: "",
              gender: "",
              degree:"",
              role: "",
              terms: false,
              tempSkill: '',
              skills: [],
              passwordError: '',
              highschool: "",
              collage: "",
              selectedDate1: null,
              selectedDate2: null,
              selectedDate3: null,
              selectedDate4: null
          }
      },
      methods: {
          addSkill(e){
              if (e.key === ' ' && this.tempSkill){
                  if(!this.skills.includes(this.tempSkill)){
                      this.skills.push(this.tempSkill)
                  }
                  this.tempSkill = ''
              }
          },
          deleteSkill(skill){
              this.skills = this.skills.filter((item) => {
                  return skill !== item
              })
  
          },
          handleSubmit(){
              this.passwordError = this.password.length > 5 ? '' 
                 : 'password must be at least 6 char long'
             
              if(!this.passwordError){
                  console.log('first name:', this.firstname)
                  console.log('surname:', this.surname)
                  console.log('other name:', this.othername)
                  console.log('gender:', this.gender)
                  console.log('degree:', this.degree)
                  console.log('password:', this.password)
                  console.log('role:', this.role)
                  console.log('skills:', this.skills)
                  console.log('highschool:', this.highschool)
                  console.log('selectedDate1:', this.selectedDate1)
                  console.log('selectedDate2:', this.selectedDate2)
                  console.log('collage:', this.collage)
                  console.log('selectedDate3:', this.selectedDate3)
                  console.log('selectedDate4:', this.selectedDate4)
                }
            },
            moveAccount(){
                
            }
                
            }
        }
</script>
  
<style>
body{
  margin:0;
  background: #eeee;
}
.personal{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}
.text{
    margin:10px; 
}
form {
      max-width:600px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
}
  label {
      color:black;
      display: inline-block;
      margin:25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input, select {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: black;
  }
  input[type="checkbox"] {
      display: inline-block;
      width:16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
  }
  .pill{
      display: inline-block;
      margin: 20px 10px 0 0;
      padding: 6px 12px;
      background: #eeee;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
      color: black;
      cursor: pointer;
  }
  .submit{
      text-align: center;
  }
  button{
      background: #0b6dff;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
  }
  .error{
      color: #ff0062;
      margin-top: 10px;
      font-size: 0.8em;
      font-weight: bold;
  }
  
  
  </style>
