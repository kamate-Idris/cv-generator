<template>
  <div class="cv">
    <div class="cv-container">
      <div class="dataInputs">
        <LeftInputs v-if="nextRef === ''" @data-input="handleDataInput" @delete-skill="deleteSkill" @next="next" />
        <RightInputs v-else @prev="prev" @data-input-right="handleDataRightInput" />
      </div>
      <div class="preview">
        <div class="cv-content">
          <LeftCV :data="inputData" :next="nextRef" />
          <Right :data="inputData" :dataLeft="inputRightData" />
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

let inputRightData = ref({
  selfDescribe: '',
  degrees: [],
  employments: [],
  certificates : []
})

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

const prev = () => {
  nextRef.value = ''
}

const handleDataRightInput = (data) => {
  inputRightData.value = data
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
</style>
