<template>
  <div class="p-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <span v-for="(character, ind) in characters" :key="`character_${ind}`" class="col-span-1">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img :src="character.image" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">{{ character.name }}</h2>
            <p>{{ character.status === "Alive" ? "VIVO" : "MORTO" }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Characters {
  name: String;
  status: String;
  species: String;
  image: String;
}

const characters = ref([
  {
    name: "",
    status: "",
    species: "",
    image: "",
  },
]);

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const endpoint = "https://rickandmortyapi.com/api/character";
    fetch(endpoint)
      .then((res: any) => res.json())
      .then((data) => {
        characters.value = data.results.map((item: any) => ({
          name: item.name,
          status: item.status,
          species: item.species,
          image: item.image,
        }));
        resolve(characters.value);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

onMounted(() => {
  Promise.all([fetchData()]);
});
</script>
