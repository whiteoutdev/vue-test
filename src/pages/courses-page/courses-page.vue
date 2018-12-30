<template>
    <div class="CoursesPage">
        <h1>Courses</h1>
        <card-container v-for="courseDefinition in courseDefinitions" :key="courseDefinition.id">
            <course-card :course-definition="courseDefinition"/>
        </card-container>
    </div>
</template>

<script lang="ts" src="./courses-page.ts"></script>
<style scoped lang="scss" src="./courses-page.scss"></style>
