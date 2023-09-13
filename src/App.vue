<template>
  <div class="cv">
    <div class="cv-container">
      <div class="dataInputs">
        <LeftInputs v-if="nextRef === ''" :class="{ 'hide-left': nextRef !== '' }"   @data-input="handleDataInput" @delete-skill="deleteSkill" @next="next" />
        <RightInputs v-else :class="{ 'show-right': nextRef !== '' }" />
      </div>
      <div class="preview">
        <div class="cv-content">
          <LeftCV :data="inputData" :next="nextRef" />
          <Right :data="inputData"  />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import LeftCV from './components/LeftCV.vue';
import Right from './components/Right.vue';
import LeftInputs from './components/LeftInputs.vue';
import RightInputs from './components/RightInputs.vue';

let inputData = ref({
  firstName: '',
  lastName: '',
  phone: '',
  birth: '',
  livingArea: '',
  skills: [],
  languages: [],
  hobbies: ''
})
let nextRef = ref('')


const handleDataInput = (data) => {
  inputData.value = data
}
const deleteSkill = (deletedSkill) => {
  // Supprimer la compétence correspondante des données inputData
  console.log(deletedSkill.formattedNames);
  const index = inputData.value.skills.indexOf(deletedSkill);
  if (index !== -1) {
    inputData.value.skills.splice(index, 1);
  }
};
const next = (value) => {
  
  nextRef.value = value
}




</script>

<style scoped>
.cv-container {
  padding: 10px 20px;
  display: flex;
  height: 1200px;

}

.dataInputs {
  flex: 2;
  height: 100%;
  margin-right: 10px;
}

.preview {
  flex: 3;
}

.cv-content {
  border: 1px solid gray;
  border-left: 30px solid red;
  height: 100%;
  display: flex;
}
/* Classe pour cacher le composant LeftInputs avec une transition */
.hide-left {
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.5s, transform 0.5s;
  pointer-events: none; /* Pour désactiver les interactions sur l'élément caché */
}

/* Classe pour afficher le composant RightInputs avec une transition */
.show-right {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s;
}
</style>
