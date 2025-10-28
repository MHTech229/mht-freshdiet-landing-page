import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import NavBar from './components/common/nav/NavBar.vue';
import MenuIcon from './components/icons/MenuIcon.vue';
import CloseIcon from './components/icons/CloseIcon.vue';
import Header from './containers/home/Header.vue';
import About from './containers/about/About.vue';
import Partner from './containers/partners/Partner.vue';
import Testimonials from './containers/testimonials/Testimonials.vue';
import FAQ from './containers/faq/FAQ.vue';
import Download from './containers/download/Download.vue';
import Footer from './components/common/footer/Footer.vue';
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App);
app.component('NavBar', NavBar);
app.component('Header', Header);
app.component('About', About);
app.component('Partner', Partner);
app.component('Testimonials', Testimonials);
app.component('FAQ', FAQ);
app.component('Download', Download);
app.component('Footer', Footer);

app.component('MenuIcon', MenuIcon);
app.component('CloseIcon', CloseIcon);

app.mount('#app');
