<template>
  
  <div class="bg-gray-900 text-orange-400 min-h-screen font-serif">
    <div class="flex justify-end p-4 text-orange-400">
  <router-link to="/" class="mr-4">Home</router-link>
  <router-link to="/episodes" class="mr-4">Episodes</router-link>
  <router-link to="/characters" class="mr-4">Characters</router-link>
  <router-link to="/locations" class="mr-4">Locations</router-link>
</div>
    <h1 class="text-4xl font-bold mb-8 text-center">Welcome to the Rick and Morty Universe</h1>
    <div class="carousel mb-8 relative" style="height: 550px;">
      <div class="overflow-hidden h-full">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentImage * 100}%)` }"
          style="height: 100%;"
        >
          <div v-for="image in carouselImages" :key="image.id" class="w-full flex-shrink-0">
            <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <button
        @click="prevImage"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        @click="nextImage"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
    <div class="description mb-8 px-5">
  <h2 class="text-3xl font-bold mb-4 text-gray-200">Description</h2>
  <p class="text-justify text-gray-400 leading-relaxed">
    Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon
    for Cartoon Network's nighttime programming block, Adult Swim. <br><br>
    The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith,
    who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities,
    often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies 
    on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.
  </p>
</div>
<div class="details mt-8 px-5">
  <h2 class="text-3xl font-bold mb-6 text-gray-200">Show Details</h2>
  <p class="text-gray-400 mb-2">
    <strong class="font-semibold text-orange-400">Genre:</strong> Animated, Science Fiction, Sitcom
  </p>
  <p class="text-gray-400 mb-2">
    <strong class="font-semibold text-orange-400">Creators:</strong> Justin Roiland, Dan Harmon
  </p>
  <p class="text-gray-400 mb-2">
    <strong class="font-semibold text-orange-400">Stars:</strong> Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke
  </p>
  <p class="text-gray-400">
    <strong class="font-semibold text-orange-400">Rating:</strong> IMDb: 9.2/10, Rotten Tomatoes: 94%
  </p>
</div>

      <p class="text-2xl font-semibold text-gray-300 leading-relaxed max-w-4xl mx-auto my-8">
  Explore the amazing world of <span class="text-orange-500">Rick and Morty</span>, discover <span class="text-orange-500">characters</span>, <span class="text-orange-500">episodes</span>, and <span class="text-orange-500">locations</span> from the show.
</p>

    <div class="max-w-6xl mx-auto px-4">
      <div class="lists px-4">
        <h2 class="text-2xl font-semibold mb-4"> Explore Episodes</h2>
        <div v-if="episodesLoading" class="text-gray-500 text-center">Loading episodes...</div>
        <div v-if="episodesError" class="text-red-500 text-center">Something went wrong loading episodes...</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="episode in episodes" :key="episode.id" class="card p-4 rounded-lg shadow-lg bg-gray-800 text-orange-400">
            <router-link :to="{ name: 'EpisodeDetail', params: { id: episode.id } }" class="text-orange-500">
              {{ episode.name }}
            </router-link>
          </div>
        </div>
        <router-link to="/episodes" class="text-blue-500 mt-4 mb-6 block text-center">View All Episodes</router-link>
      </div>
      <div class="lists px-4">
        <h2 class="text-2xl font-semibold mb-4">Explore Characters</h2>
        <div v-if="charactersLoading" class="text-gray-500 text-center">Loading characters...</div>
        <div v-if="charactersError" class="text-red-500 text-center">Something went wrong loading characters...</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="character in characters" :key="character.id" class="card p-4 rounded-lg shadow-lg bg-gray-800 text-orange-400">
            <router-link :to="{ name: 'CharacterDetail', params: { id: character.id } }" class="text-orange-500">
              {{ character.name }}
            </router-link>
          </div>
        </div>
        <router-link to="/characters" class="text-blue-500 mt-4 mb-6 block text-center">View All Characters</router-link>
      </div>
      <div class="lists px-4 mb-32">
        <h2 class="text-2xl font-semibold mb-4">Explore Locations</h2>
        <div v-if="locationsLoading" class="text-gray-500 text-center">Loading locations...</div>
        <div v-if="locationsError" class="text-red-500 text-center">Something went wrong loading locations...</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="location in locations" :key="location.id" class="card p-4 rounded-lg shadow-lg bg-gray-800 text-orange-400">
            <router-link :to="{ name: 'LocationDetail', params: { id: location.id } }" class="text-orange-500">
              {{ location.name }}
            </router-link>
          </div>
        </div>
        <router-link to="/locations" class="text-blue-500 mt-4 mb-6 block text-center">View All Locations</router-link>
      </div>
    </div>
    <footer class="bg-gray-900 bg-opacity-80 text-gray-400 py-4 mt-8 fixed inset-x-0 bottom-0 flex flex-col items-center">
  
  <div class="flex flex-col items-center space-y-2 mt-2">
    <a href="https://github.com/your-github-profile" target="_blank" class="flex items-center space-x-2">
      <span class="text-white hover:text-orange-400">GitHub link:</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5a11.5 11.5 0 00-3.636 22.419c.575.106.786-.25.786-.556 0-.274-.01-1.002-.015-1.966-3.2.695-3.878-1.541-3.878-1.541-.523-1.326-1.276-1.678-1.276-1.678-1.043-.714.08-.7.08-.7 1.155.08 1.763 1.186 1.763 1.186 1.025 1.758 2.688 1.25 3.344.956.104-.742.4-1.25.726-1.538-2.554-.29-5.24-1.277-5.24-5.684 0-1.256.447-2.282 1.183-3.085-.118-.292-.513-1.465.113-3.054 0 0 .965-.309 3.163 1.18A10.996 10.996 0 0112 6.845c.977.005 1.96.131 2.877.384 2.196-1.489 3.158-1.18 3.158-1.18.63 1.59.235 2.763.118 3.054.738.803 1.183 1.829 1.183 3.085 0 4.416-2.693 5.392-5.256 5.674.412.356.772 1.062.772 2.138 0 1.543-.014 2.783-.014 3.164 0 .311.208.666.791.555A11.51 11.51 0 0012 .5z" />
      </svg>
      
    </a>
    <a href="https://www.figma.com/design/d3QH3bc5ZWxCBwCaRQ7LYU/Untitled?node-id=4-377&t=BbYYNUckN5wLSclq-0" target="_blank" class="flex items-center space-x-2">
      <span class="text-white hover:text-orange-400">Figma link:</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-orange-400" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0ZM16 0C13.7909 0 12 1.79086 12 4C12 6.20914 13.7909 8 16 8C18.2091 8 20 6.20914 20 4C20 1.79086 18.2091 0 16 0ZM16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8ZM8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12C12 9.79086 10.2091 8 8 8ZM8 16C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24C10.2091 24 12 22.2091 12 20C12 17.7909 10.2091 16 8 16ZM16 16C13.7909 16 12 17.7909 12 20C12 22.2091 13.7909 24 16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16Z" fill="#0ACF83"/>
      </svg>
      
    </a>
    <div>&copy; 2024 Your Name. All rights reserved.</div>
  </div>
</footer>



  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { ref, computed, onMounted } from 'vue';

const EPISODES_QUERY = gql`
  query {
    episodes {
      results {
        id
        name
      }
    }
  }
`;

const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
      }
    }
  }
`;

const LOCATIONS_QUERY = gql`
  query {
    locations {
      results {
        id
        name
      }
    }
  }
`;

export default {
  name: 'HomePage',
  setup() {
    const { result: episodesResult, loading: episodesLoading, error: episodesError } = useQuery(EPISODES_QUERY);
    const { result: charactersResult, loading: charactersLoading, error: charactersError } = useQuery(CHARACTERS_QUERY);
    const { result: locationsResult, loading: locationsLoading, error: locationsError } = useQuery(LOCATIONS_QUERY);

    const carouselImages = [
      { id: 1, url: '/images/image1.jpg', alt: 'Rick and Morty Image 1' },
      { id: 2, url: '/images/image2.webp', alt: 'Rick and Morty Image 2' },
      { id: 3, url: '/images/image3.jpg', alt: 'Rick and Morty Image 3' },
      { id: 4, url: '/images/image4.jpg', alt: 'Rick and Morty Image 4' },
      { id: 5, url: '/images/image5.png', alt: 'Rick and Morty Image 5' },
      { id: 6, url: '/images/image6.jpg', alt: 'Rick and Morty Image 6' },
      { id: 7, url: '/images/image7.webp', alt: 'Rick and Morty Image 7' },
    ];

    const currentImage = ref(0);

    const nextImage = () => {
      currentImage.value = (currentImage.value + 1) % carouselImages.length;
    };

    const prevImage = () => {
      currentImage.value = (currentImage.value - 1 + carouselImages.length) % carouselImages.length;
    };

    onMounted(() => {
      setInterval(() => {
        nextImage();
      }, 3000);
    });

    return {
      episodes: computed(() => episodesResult.value?.episodes.results || []),
      characters: computed(() => charactersResult.value?.characters.results || []),
      locations: computed(() => locationsResult.value?.locations.results || []),
      episodesLoading,
      episodesError,
      charactersLoading,
      charactersError,
      locationsLoading,
      locationsError,
      carouselImages,
      currentImage,
      nextImage,
      prevImage,
    };
  },
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
