<template>
    <div class="right">
        <div class="right-container">
            <div class="presentation">
                <h1 class="username">{{ data.firstName }} {{ data.lastName }}</h1>
                <div class="desc">
                    {{ dataLeft.selfDescribe }}
                </div>
            </div>
            <div v-if="dataLeft.degrees.length > 0"  class="education">
                <h2 class="title">Education</h2>
                <div class="content">
                    <div v-for="(degree, index) in dataLeft.degrees" :key="index" class="contentItems">
                        <div class="top">
                            <h3 class="description">{{ degree['degreeName'] }}</h3>
                            <h5 class="date">{{ degree['degreeYear'] }}</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                {{ degree['degreeSchool'] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="dataLeft.employments.length > 0" class="employment">
                <h2 class="title">Employment</h2>
                <div class="content">
                    <div v-for="(employment, index) in dataLeft.employments" :key="index" class="contentItems">
                        <div class="top">
                            <h3 class="description">{{ employment['employmentRole'] }}</h3>
                            <h5 class="date">{{ employment['employmentYear'] }}</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                {{ employment['employmentLocation'] }}
                            </div>
                        </div>
                        <div class="role">
                            {{ employment['employmentRoleDescription'] }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="dataLeft.certificates.length > 0" class="cerficates">
                <h2 class="title">Certificates</h2>
                <div class="content">
                    <div v-for="(certificate , index) in dataLeft.certificates" :key="index" class="contentItems">
                        <div class="top">
                            <h3 class="description">{{ certificate.name }}</h3>
                            <h5 class="date">{{ certificate.year }}</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RightCV",
    props: {
        data: Object,
        dataLeft: Object
    }
}
</script>

<style scoped>
.right {
    flex: 3;

}

.username {
    text-transform: capitalize;
}

.right-container {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.presentation .username {
    color: red;
    margin-bottom: 10px;
}

.title {
    color: red;
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(85, 84, 84);
    margin-bottom: 20px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.contentItems {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.contentItems .top {
    display: flex;
    justify-content: space-between;
    flex: 2;

}

.top .date {
    color: red;
}

.bottom .school {
    color: red;
    flex: 1;
}
</style>