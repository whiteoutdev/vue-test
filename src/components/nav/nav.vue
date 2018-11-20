<template>
    <div class="Nav">
        <router-link v-for="route in routes" v-if="route.meta.nav" v-bind:to="route.path" v-bind:key="route.path">
            {{route.meta.title}}
        </router-link>
    </div>
</template>

<script lang="ts" src="./nav.ts"></script>
<style lang="scss" src="./nav.scss"></style>
