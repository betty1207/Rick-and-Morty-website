<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-10 text-center text-orange-400">Character Details</h1>
      <div v-if="loading" class="text-gray-400 text-center">Loading...</div>
      <div v-if="error" class="text-red-400 text-center">Something went wrong...</div>
      <div v-else-if="character">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 class="text-3xl font-semibold mb-4 text-orange-400">{{ character.name }}</h2>
          <img :src="character.image" :alt="character.name" class="w-40 h-40 object-cover rounded-full border-4 border-orange-400 mb-4">
          <p class="text-gray-400"><strong>Status:</strong> {{ character.status }}</p>
          <p class="text-gray-400"><strong>Species:</strong> {{ character.species }}</p>
          <p class="text-gray-400"><strong>Gender:</strong> {{ character.gender }}</p>
          <p class="text-gray-400"><strong>Origin:</strong> {{ character.origin.name }}</p>
          <p class="text-gray-400"><strong>Location:</strong> {{ character.location.name }}</p>
          <div class="mt-4">
            <h3 class="text-2xl font-semibold mb-2 text-orange-400">Episodes Character Participated on: </h3>
            <div class="flex overflow-x-auto space-x-4">
              <div v-for="episode in character.episode" :key="episode.id" class="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-40">
                <router-link :to="{ name: 'EpisodeDetail', params: { id: episode.id } }" class="block text-orange-400 hover:underline">
                  <h4 class="text-lg font-semibold">{{ episode.name }}</h4>
                  <p class="text-gray-400">Episode: {{ episode.episode }}</p>
                  <p class="text-gray-400">Air Date: {{ episode.air_date }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

const CHARACTER_QUERY = gql`
query($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    gender
    image
    origin {
      name
    }
    location {
      name
    }
    episode {
      id
      name
      episode
      air_date
    }
  }
}`;

export default {
  name: 'CharacterDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const variables = { id: props.id };
    const { result, loading, error } = useQuery(CHARACTER_QUERY, variables);
    
    const character = computed(() => {
      return result.value?.character || null;
    });

    return {
      character,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
