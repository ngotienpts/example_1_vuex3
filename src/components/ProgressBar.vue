<script>
import { mapGetters } from "vuex";

export default {
    name: "ProgressBar",
    computed: mapGetters(["progress", "auth"]),
};
</script>
<template>
    <div class="progress-bar" v-if="auth.isAuthenticated">
        <p>Progress: {{ progress ? progress : 0 }} %</p>
    </div>
</template>
<style>
.progress-bar {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    color: black;
}
</style>
