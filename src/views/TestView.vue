<template>
    <v-sheet class="cardDesing mt-10 ml-10 pa-6">
        <v-sheet color="red">
            <v-row no-gutters>
                <v-col cols="5">
                        <v-img class="imgDesing" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"></v-img>
                </v-col>
                <v-col cols="7">
                    <v-row>
                        <v-col cols="6">
                            <p> 120 +</p>     
                            <p>Completed Projects </p>     
                        </v-col>
                        <v-col cols="6">
                            <p> B+ SSSSS</p>
                            <p>Completed Projects </p>  
                        </v-col>
                        <v-col cols="12">
                            <h2> Glad to Help You</h2>
                            <p> As a full-service digital designer</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-sheet>
    </v-sheet>
</template>

<script setup lang="ts">

</script>

<style>
.cardDesing{
    background-color: rgb(47, 47, 47);
    border-radius: 20px;
    width: 500px;
    height: 250px;

}

.imgDesing {
    border-radius: 15px;
}
</style>