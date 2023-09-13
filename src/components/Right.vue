<template>
    <div class="right">
        <div class="right-container">
            <div class="presentation">
                <h1 class="username">{{ data.firstName }} {{ data.lastName }}</h1>
                <div class="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam eligendi laborum accusantium iusto doloribus vero expedita repudiandae veritatis. Provident.
                </div>
            </div>
            <div class="education">
                <h2 class="title">Education</h2>
                <div class="content">
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">One week for more skills</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                Orane Digital Center
                            </div>
                        </div>
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Bachelor</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                universite Virtuelle de Cote d'Ivoire
                            </div>
                        </div>
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Baccalaureat</h3>
                            <h5 class="date">Dec 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                Lycee Moderne Gbon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="employment">
                <h2 class="title">Employment</h2>
                <div class="content">
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">One week for more skills</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                Orane Digital Center
                            </div>
                        </div>
                        <div class="role">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sequi.
                        </div>
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Bachelor</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                universite Virtuelle de Cote d'Ivoire
                            </div>
                        </div>
                        <div class="role">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sequi.
                        </div>
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Baccalaureat</h3>
                            <h5 class="date">Dec 22023</h5>
                        </div>
                        <div class="bottom">
                            <div class="school">
                                Lycee Moderne Gbon
                            </div>
                        </div>
                        <div class="role">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sequi.
                        </div>
                    </div>
                </div>
            </div>
            <div class="cerficates">
                <h2 class="title">Certificates</h2>
                <div class="content">
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">One week for more skills</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                       
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Bachelor</h3>
                            <h5 class="date">Nov 22023</h5>
                        </div>
                        
                    </div>
                    <div class="contentItems">
                        <div class="top">
                            <h3 class="description">Baccalaureat</h3>
                            <h5 class="date">Dec 22023</h5>
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
    props : {
        data : Object
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
.right-container{
    padding: 20px 10px ;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.presentation .username {
    color:  red;
    margin-bottom: 10px;
}
.title {
    color:  red;
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
.contentItems .top{
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