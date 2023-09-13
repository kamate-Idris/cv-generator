<template>
  <h1 class="main-title">Creer un noveau CV</h1>
  <div class="left-inputs">
    <!-- Personal information inputs (First name, last name, contact etc...) -->
    <div class="personal-details">
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>
      </div>
    </div>
    <!-- Education information inputs(skill field, skill level) -->
    <div class="skills">
      <div class="skills-header">
        <h2 class="title skills">Education</h2>
        <button @click="addSkill" class="btn">Add new</button>
      </div>
      <!-- All skills created by user -->
      <div class="skills-input">
        <!--For Loop to display each skill-->
        <div v-for="(skill, index) in skills" :key="index" class="skill">
          <div class="form-control">
            <label for="skill-name">Degree</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="skill-name">School</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="skill-name">Year</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <button @click="deleteSkill(index)" class="btn delete">Delete</button>
        </div>

      </div>
    </div>

    <!-- Employment information inputs(language name, language level) -->
    <div class="skills">
      <div class="skills-header">
        <h2 class="title skills">Employment</h2>
        <button @click="addSkill" class="btn">Add new</button>
      </div>
      <!-- All skills created by user -->
      <div class="skills-input">
        <!--For Loop to display each skill-->
        <div v-for="(skill, index) in skills" :key="index" class="skill">
          <div class="form-control">
            <label for="skill-name">Employment role</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="skill-name">Location</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="skill-name">Year</label>
            <input @input="sendData" v-model="skill.skillName" type="text" :name="'skill-name-' + index"
              :id="'skill-name-' + index" />
          </div>
          <div class="form-control">
            <label for="description">Brief description of your role</label>
            <textarea name="description" id="description" cols="30" rows="5"></textarea>
          </div>
          <button @click="deleteSkill(index)" class="btn delete">Delete</button>
        </div>

      </div>
    </div>
    <div class="prev">
      <button  @click="this.$emit('prev', 'prevClicked')" class="btn prev"><i class="fa-sharp fa-solid fa-arrow-left"></i> precedent 
      </button>

    </div>
  </div>
</template>


<script>

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

    //Add new Element(Skill or language ) to the ancien
    addNew(allElement, newElement) {
      allElement.push(newElement)
    },

    // Delete a specific element in array of elements
    async deleteInputs(index, allElement) {
      const deletedElement = await allElement.splice(index, 1)[0];
      this.sendData(); // Envoyer les données mises à jour
      // Émettre un événement personnalisé pour informer le composant App de la suppression
      this.$emit('delete-skill', deletedElement);
    },

    // Add new Skill inputs with formatted names
    addSkill() {
      this.addNew(this.skills, { ...this.newSkill, formattedNames: [] })
      this.newSkill = {}
    },
    // Add new language inputs
    addLanguage() {
      this.addNew(this.languages, { ...this.newLanguage })
      this.newLanguage = {}
    },
    deleteSkill(index) {
      this.deleteInputs(index, this.skills)
    },
    deleteLanguage(index) {
      this.deleteInputs(index, this.languages)
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


.btn.prev {
  width: 115px;
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

textarea {
  resize: none;
  outline: none;
  padding: 5px;
  font-size: 18px;
}
</style>

