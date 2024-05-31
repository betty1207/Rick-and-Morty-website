<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-10 text-center text-orange-400">Characters</h1>
      <div v-if="loading" class="text-gray-400 text-center">Loading...</div>
      <div v-if="error" class="text-red-400 text-center">Something went wrong...</div>
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="character in result.characters.results" :key="character.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <router-link :to="{ name: 'CharacterDetail', params: { id: character.id } }" class="block mb-4 text-orange-400 hover:underline">
              <h2 class="text-2xl font-semibold">{{ character.name }}</h2>
              <img :src="character.image" :alt="character.name" class="w-30 h-30 object-cover border-4 border-orange-400 mb-2 rounded-full">
            </router-link>
            <p class="text-gray-400"><strong>Status:</strong> {{ character.status }}</p>
            <p class="text-gray-400"><strong>Species:</strong> {{ character.species }}</p>
            <p class="text-gray-400"><strong>Gender:</strong> {{ character.gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export default {
  name: 'CharactersPage',
  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
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
