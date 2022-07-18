import Vue from "vue";
import VueRouter from "vue-router";
import Home_Desktop from "../components/Home_Desktop";
import Contact_component from "../components/Contact_component";
import Actualite_component from "../components/Actualite_component";
import Films_component from "../components/Films_component";
import Detail_film_component from "../components/Detail_film_component";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  routes: [
    {path: "/", component: Home_Desktop},
    {path: "/contact", component: Contact_component},
    {path: "/actualite", component: Actualite_component},
    {path: "/films", component: Films_component},
    {path: "/detail_film", component: Detail_film_component},
  ],
});