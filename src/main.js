import { createApp } from 'vue'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import './style.css'
import App from './App.vue'
import router from './router'
 
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql',
  })
const app =createApp(App)
app.provide(DefaultApolloClient, apolloClient)
app.use(router)
app.mount('#app')










