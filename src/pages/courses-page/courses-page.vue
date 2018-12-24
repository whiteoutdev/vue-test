<template>
    <div class="CoursesPage">
        Courses
        <ul>
            <li v-for="courseDefinition in courseDefinitions">{{courseDefinition.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts" src="./courses-page.ts"></script>
<style scoped lang="scss" src="./courses-page.scss"></style>
