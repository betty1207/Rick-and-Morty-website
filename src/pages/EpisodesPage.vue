<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-10 text-center text-orange-400">Episodes</h1>
      <div v-if="loading" class="text-gray-400 text-center">Loading...</div>
      <div v-if="error" class="text-red-400 text-center">Something went wrong...</div>
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="episode in result.episodes.results" :key="episode.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <router-link :to="{ name: 'EpisodeDetail', params: { id: episode.id } }" class="block mb-4 text-orange-400 hover:underline">
              <h2 class="text-2xl font-semibold">{{ episode.name }}</h2>
            </router-link>
            <p class="text-gray-400"><strong>Air Date:</strong> {{ episode.air_date }}</p>
            <p class="text-gray-400"><strong>Episode:</strong> {{ episode.episode }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const EPISODES_QUERY = gql`
query {
  episodes {
    results {
      id
      name
      air_date
      episode
    }
  }
}`;

export default {
  name: 'EpisodesPage',
  setup() {
    const { result, loading, error } = useQuery(EPISODES_QUERY);
    return {
      result,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
