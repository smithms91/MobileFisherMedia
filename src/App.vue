<template>
  <div id="app">
    <top-social />
    <get-in-touch />
    <nav-section />
    <about-section />
    <router-view />
    <our-process />
    <worked-with />
    <apply-now />
    <footer-section />
  </div>
</template>

<script>
import TopSocial from './components/TopSocial'
import GetInTouch from './components/GetInTouch'
import NavSection from './components/NavSection'
import AboutSection from './components/AboutSection'
import OurProcess from './components/OurProcess'
import WorkedWith from './components/WorkedWith'
import ApplyNow from './components/ApplyNow'
import Footer from './components/Footer'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    topSocial: TopSocial,
    getInTouch: GetInTouch,
    navSection: NavSection,
    aboutSection: AboutSection,
    ourProcess: OurProcess,
    workedWith: WorkedWith,
    applyNow: ApplyNow,
    footerSection: Footer,
  }
}
</script>

<style>
*::before,
*::after,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

a {
  color: rgb(198, 16, 16);
}

button {
  cursor: pointer;
}
</style>
