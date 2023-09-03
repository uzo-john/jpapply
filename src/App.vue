<template>
  <div id="nav">
    <div class="logo">
      <img v-bind:src="imageSrc" alt="J.png">
    </div>
    <div class="nav-link">
      <router-link to="/">Home</router-link> |
      <router-link to="/apply">Apply</router-link> |
      <router-link to="/contact us">Contact us</router-link>
    </div>
    
  </div>   
  <router-view/>
  
  <div class="container">
    <footer class="footer">
      <div class="footer-content">
      <img src="" alt="">
      <div class="footer-link">
        <router-link to="/contact us">Contact us</router-link>
      </div> 
      <div class="reach">
        <p>Address: 124, Victoria Island, Lagos</p>
        <p>Phone Number: 08026317407</p>
      </div>
      
        <ul class="social-links">
          <li><a href="@JohnpaulUzowuru"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
        <p>&copy; {{ currentYear }} jpapply. All rights reserved.</p>
      </div>
    </footer>
  </div>

  
</template>
<script>
export default {
  data () {
    return {
      imageSrc: require('@/assets/J.png')
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo img {
  width: 60px;
  height: auto;
  margin:auto 20px;
  
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:white;
  color: #333;
}
.nav-link{
  list-style: none;
  display: flex;
  gap: 20px;
 
  
}

#nav a {
  font-weight: bold;
  color:#333;
  text-decoration: none;
  margin: auto 20px;
 
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container .footer {
  background-color:white;
  color:black;
  padding: 50px auto;
  text-align: center;
}
.container .footer-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  padding: 10px;
}
.container .social-links {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.container .social-links li {
  display: inline-block;
  margin: 0 10px;
}

.container .social-links a {
  color:#333;
  font-size: 18px;
}
.container .footer-link a{
  text-decoration: none;
  font-weight: bold;
  color:#333;
}
.container .footer-link a:hover{
  color: #42b983;
}
.reach p{
  font-weight: bold;
}
</style>
