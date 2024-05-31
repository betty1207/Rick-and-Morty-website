<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-10 text-center text-orange-400">Location Details</h1>
      <div v-if="loading" class="text-gray-400 text-center">Loading...</div>
      <div v-if="error" class="text-red-400 text-center">Something went wrong...</div>
      <div v-else-if="location">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 class="text-3xl font-semibold mb-4 text-orange-400">{{ location.name }}</h2>
          <p class="text-gray-400"><strong>Type:</strong> {{ location.type }}</p>
          <p class="text-gray-400"><strong>Dimension:</strong> {{ location.dimension }}</p>
          <div class="mt-4">
            <h3 class="text-2xl font-semibold mb-2 text-orange-400">Residents</h3>
            <div class="flex overflow-x-auto space-x-4">
              <div v-for="resident in location.residents" :key="resident.id" class="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-40 hover:shadow-lg transition-shadow duration-300">
                <img :src="resident.image" :alt="resident.name" class="w-24 h-24 object-cover rounded-full border-4 border-orange-400 mb-2">
                <h4 class="text-lg font-semibold text-orange-400">{{ resident.name }}</h4>
                <p class="text-gray-400">Status: {{ resident.status }}</p>
                <p class="text-gray-400">Species: {{ resident.species }}</p>
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

const LOCATION_QUERY = gql`
  query($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        image
      }
    }
  }
`;

export default {
  name: 'LocationDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const variables = { id: props.id };
    const { result, loading, error } = useQuery(LOCATION_QUERY, variables);

    const location = computed(() => {
      return result.value?.location || null;
    });

    return {
      location,
      loading,
      error,
    };
  },
};
</script>
<style scoped>
/* Add any additional styles here */
</style>
