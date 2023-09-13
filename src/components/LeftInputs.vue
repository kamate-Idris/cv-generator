<template>
  <h1 class="main-title">Creer un noveau CV</h1>
  <div class="left-inputs">
    <!-- Personal information inputs (First name, last name, contact etc...) -->
    <div class="personal-details">
      <h2 class="title">Personal Informations</h2>
      <div class="form-control">
        <label for="first-name">First name</label>
        <input @input="sendData" v-model="firstName" type="text" name="first-name" id="first-name">
      </div>
      <div class="form-control">
        <label for="last-name">Last name</label>
        <input @input="sendData" v-model="lastName" type="text" name="last-name" id="last-name">
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input required @input="sendData" v-model="email" type="email" name="emaile" id="email">
      </div>
      <div class="form-control">
        <label for="phone">Phone</label>
        <input @input="sendData" v-model="phone" type="text" name="phone" id="phone">
      </div>
      <div class="form-control">
        <label for="birth">birthday</label>
        <input @input="sendData" v-model="birth" type="text" name="birth" id="birth">
      </div>
      <div class="form-control">
        <label for="birth">Living area</label>
        <input @input="sendData" v-model="livingArea" type="text" name="birth" id="birth">
      </div>
      <!-- <button @click="getData" class="btn">save</button> -->
    </div>
    <!-- Skills information inputs(skill field, skill level) -->
    <div class="skills">
      <div class="skills-header">
        <h2 class="title skills">Skills</h2>
        <button @click="addSkill" class="btn">Add new</button>
      </div>
      <!-- All skills created by user -->
      <div class="skills-input">
        <!--For Loop to display each skill-->
        <div v-for="(skill, index) in skills" :key="index" class="skill">
          <div class="form-control">
            <label for="skill-name">Skill Field</label>
            <input @input="sendData" @blur="formatNames(skill, index)" v-model="skill.skillName" type="text"
              :name="'skill-name-' + index" :id="'skill-name-' + index" />
            <!-- Button for each values enter by user -->
            <div v-if="skill.formattedNames.length > 0" class="formatted-names">
              <span class="formatted-name-container" v-for="(formattedName, i) in skill.formattedNames" :key="i">
                <span class="formatted-name">{{ formattedName }}</span>
                <button @click="removeFormattedName(i, skill)" class="remove-button">x</button>
              </span>
            </div>
          </div>
          <div class="form-control">
            <label for="skill-level">Skill level</label>
            <input @input="sendData" v-model="skill.skillLevel" type="range" :name="'skill-level-' + index"
              :id="'skill-level-' + index" min="0" max="100" />
          </div>
          <button @click="deleteSkill(index)" class="btn delete">Delete</button>
        </div>

      </div>
    </div>

    <!-- Languages information inputs(language name, language level) -->
    <div class="skills">
      <div class="skills-header">
        <h2 class="title skills">Languages</h2>
        <button @click="addLanguage" class="btn">Add new</button>
      </div>
      <!-- All skills created by user -->
      <div class="skills-input">
        <!--For Loop to display each skill-->
        <div v-for="(language, index) in languages" :key="index" class="skill">
          <div class="form-control">
            <label for="skill-name">Language name</label>
            <input @input="sendData" v-model="language.languageName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="skill-level">Language level</label>
            <input @input="sendData" v-model="language.languageLevel" type="range" :name="'skill-level-' + index"
              :id="'skill-level-' + index" min="0" max="100" />
          </div>
          <button @click="deleteLanguage(index)" class="btn delete">Delete</button>
        </div>
      </div>
    </div>
    <!-- Hobiies information inputs(hobbie) -->
    <div class="skills">
      <div class="skills-header">
        <h2 class="title skills">Hobbies</h2>
      </div>
      <!-- All skills created by user -->
      <div class="skills-input">
        <!--For Loop to display each skill-->
        <div class="skill">
          <div class="form-control">
            <label for="hobbie">Ajouter vos hobbies</label>
            <input placeholder="Enter your hobbies lists speareted by coma ex : Foot, reac, Natation " @input="sendData"
              type="text" v-model="hobbies" id="hobbie" />
          </div>
        </div>
      </div>
    </div>
    <div class="next">
      <button @click="this.$emit('next', 'clicked')" class="btn ">Suivant <i class="fa-solid fa-arrow-right"></i>
      </button>

    </div>
  </div>
</template>


<script>
import { addNew, deleteInputs } from '../utils/functions';


export default {
  name: 'LeftInputs',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birth: '',
      livingArea: '',
      // skillsInputs: false,
      skills: [], // Tableau pour stocker les compétences
      newSkill: {},
      languages: [],
      newLanguage: {},
      hobbies: ''
    }
  },

  methods: {
    sendData() {
      // Exclure skillName de l'envoi des données
      const skillsData = this.skills.map(skill => ({
        skillLevel: skill.skillLevel,
        formattedNames: skill.formattedNames,
      }));
      this.$emit('data-input', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        birth: this.birth,
        livingArea: this.livingArea,
        skills: skillsData,
        languages: this.languages,
        hobbies: this.hobbies
      })
    },

    // Add new Skill inputs with formatted names
    addSkill() {
      addNew(this.skills, { ...this.newSkill, formattedNames: [] })
      this.newSkill = {}
    },
    // Add new language inputs
    addLanguage() {
      addNew(this.languages, { ...this.newLanguage })
      this.newLanguage = {}
    },
/*    async  deleteSpecificElement(index) {
      const deletedElement = await deleteInputs(index, this.skills)
      this.sendData(); // Envoyer les données mises à jour
      this.$emit('delete-skill', deletedElement);
    }, */
    async deleteSkill(index) {
      const deletedElement = await deleteInputs(index, this.skills)
      this.sendData(); // Envoyer les données mises à jour
      this.$emit('delete-skill', deletedElement);
    },
    async deleteLanguage(index) {
      const deletedElement = await deleteInputs(index, this.languages)
      this.sendData(); // Envoyer les données mises à jour
      this.$emit('delete-skill', deletedElement);
    },

    formatNames(skill, skillIndex) {
      const names = skill.skillName.split(' ').filter(name => name.trim() !== '');
      this.skills[skillIndex].formattedNames = names;
    },
    removeFormattedName(index, skill) {
      skill.formattedNames.splice(index, 1);
      skill.skillName = skill.formattedNames.join(' ');
    },


  }

}
</script>

<style scoped>
.left-inputs {
  display: flex;
  gap: 50px;
  flex-direction: column;
  overflow-y: scroll;
  height: 1200px;
}

.main-title {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.title.skills {
  margin-bottom: 0;
}

.form-control {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 15px;
  position: relative;
}

label {
  font-weight: bold;
}

.form-control input {
  padding: 8px 5px;
  outline: none;
  font-size: 18px;
}

.btn {
  padding: 10px 5px;
  width: 100px;
  background-color: green;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.next {
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
}


.btn.delete {
  background-color: red;
  margin-top: 15px;
}

.skill {
  margin-bottom: 15px;
}

.skills-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skills-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-level {
  margin-top: 10px
}

input[type=range] {
  padding: 0;
}

.formatted-names {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: white;
  position: absolute;
  top: 30px;
  margin-left: 8px;
}

.formatted-name {
  background-color: pink;
  border-radius: 5px;
  padding: 2px 5px;
  margin-right: 5px;
}

.remove-button {
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
}
</style>

