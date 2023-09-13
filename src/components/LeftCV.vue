<template>
    <div class="left">
        <div class="left-container">
            <div class="imgProfile">
                <img src="/img/empty.png" alt="">
            </div>
            <div v-if="data.firstName" class="personalInfos">
                <h2 class="title">Personal details</h2>
                <div class="content">
                    <div v-if="data.firstName" class="contentItems">
                        <i class="fa-solid fa-user fa-lg "></i>
                        <span class="username">{{ data.firstName }} {{ data.lastName }}</span>
                    </div>
                    <div v-if="data.email" class="contentItems">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                        <span>{{ data.email }}</span>
                    </div>
                    <div v-if="data.phone" class="contentItems">
                        <i class="fa-solid fa-mobile-screen fa-lg"></i>
                        <span>{{ data.phone }}</span>
                    </div>
                    <div v-if="data.birth" class="contentItems">
                        <i class="fa-solid fa-calendar-days fa-lg"></i>
                        <span>{{ data.birth }}</span>
                    </div>
                    <div v-if="data.livingArea" class="contentItems">
                        <i class="fa-solid fa-house fa-lg"></i>
                        <span>{{ data.livingArea }}</span>
                    </div>
                    <!-- <div class="contentItems">
                        <i class="fa-solid fa-location-dot fa-lg"></i>
                        <span>GBON</span>
                    </div> -->

                </div>
            </div>
            <div v-if="data.skills.length > 0" class="skills">
                <h2 class="title">Skills</h2>
                <div class="content">
                    <div v-for="(skill, index) in data.skills" :key="index">
                        <div class="skillsContentItems">
                            <div class="fiels">{{ skill['formattedNames']?.join(', ').toUpperCase() }}</div>
                            <div v-if="skill['formattedNames'].length > 0" class="level">
                                <span v-for="dotIndex in calculDotsNumber(skill['skillLevel'])" :key="dotIndex"
                                    class="dot"></span>
                                <span v-for="stopIndex in 5 - calculDotsNumber(skill['skillLevel'])" :key="stopIndex"
                                    class="dot stop"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.languages.length > 0" class="languages">
                <h2 class="title">languages</h2>
                <div class="content">
                    <div v-for="(language, index) in data.languages" :key="index">
                        <div class="skillsContentItems">
                            <div class="fiels">{{ language['languageName'].toUpperCase() }}</div>
                            <div class="level">
                                <span v-for="dotIndex in calculDotsNumber(language['languageLevel'])" :key="dotIndex"
                                    class="dot"></span>
                                <span v-for="stopIndex in 5 - calculDotsNumber(language['languageLevel'])" :key="stopIndex"
                                    class="dot stop"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.hobbies.length > 0" class="hobbies">
                <h2 class="title">hobbies</h2>
                <div class="content">
                    <div v-for="(hobbie, index) in data.hobbies.split(',').filter(name => name.trim() !== '')" :key="index"
                        class="contentItems">
                        <div v-if="hobbie" class="rect"></div>
                        <span v-if="hobbie">{{ hobbie }}</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftCV',
    props: {
        data: Object,
        next: String
    },
    methods: {
        calculDotsNumber(pixelNumber) {
            return Math.round(5 * pixelNumber / 100)
        }
    }

}

</script>

<style scoped>
.left {
    background-color: rgb(177, 177, 177);
    flex: 2;
}

.left-container {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

i {
    color: red;
    font-weight: bold;
}

.left-container .title {
    color: red;
    padding-bottom: 10px;
    font-weight: normal;
    border-bottom: 1px solid rgb(85, 84, 84);
}

.left-container .title::first-letter {
    text-transform: capitalize;
}

.username {
    text-transform: capitalize;
}

.imgProfile {
    text-align: center;
}

.imgProfile img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.content {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
}

.contentItems {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 5px;
}

.skillsContentItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.level {
    display: flex;
    gap: 5px;
}

.level .dot {
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
}

.level .dot.stop {
    background: rgb(255, 255, 255);
    border-radius: 50%;
}


.content .rect {
    width: 10px;
    height: 10px;
    background-color: red;

}
</style>