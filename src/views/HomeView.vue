<template>
  <div class="homepage-container">
    <div>
      <img v-bind:src="imageSrc" alt="J.png">
    </div>
    <h1>"Embark on a Seamless Journey with Our Application Form"</h1>
  </div>
  <div class="container-body">
    <h2>About Us</h2>
    <p>Welcome to jpapply! We are a passionate team dedicated to creating seamless solutions for your form needs. Our mission is to simplify the process of collecting and managing data, making it effortless for individuals and businesses to gather valuable insights.</p>
    <h2>Our Vision</h2>
    <p>At jpapply, we envision a world where data collection is no longer a daunting task but an enjoyable and efficient experience. We believe that forms play a crucial role in obtaining essential information, and our goal is to transform this process into something that's both user-friendly and productive.</p>
  </div>
 
  
</template>

<script>
export default {
  data () {
    return {
      imageSrc: require('@/assets/J.png'),
      currentYear: new Date().getFullYear()
    }
  }

}
</script>

<style scoped>
.homepage-container {
  /*background-image: url("~@/assets/pexels-skylar-kang-6207368.jpg");*/
  background-size: cover;
  background-position: center;
  color: white; 
  padding: 20px;
  background:#333; 
}
.homepage-container img{
  width: 30%;
}
.container-body p{
   display: flex;
   align-items: center;
   padding: 0 300px;
}
</style>