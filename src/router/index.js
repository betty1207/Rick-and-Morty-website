import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EpisodesPage from '../pages/EpisodesPage.vue';
import EpisodeDetail from '../pages/EpisodeDetail.vue';
import CharactersPage from '../pages/CharactersPage.vue';
import CharacterDetail from '../pages/CharacterDetail.vue';
import LocationsPage from '../pages/LocationsPage.vue';
import LocationDetail from '../pages/LocationDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/episodes', name: 'Episodes', component: EpisodesPage },
  { path: '/episode/:id', name: 'EpisodeDetail', component: EpisodeDetail, props: true },
  { path: '/characters', name: 'Characters', component: CharactersPage },
  { path: '/character/:id', name: 'CharacterDetail', component: CharacterDetail, props: true },
  { path: '/locations', name: 'Locations', component: LocationsPage },
  { path: '/location/:id', name: 'LocationDetail', component: LocationDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
