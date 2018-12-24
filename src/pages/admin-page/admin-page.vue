<template>
    <div class="AdminPage">
        <h1>Admin</h1>
        <section>
            <h2>Courses</h2>
            <button v-on:click="deleteCourseDefinitions">Clear stored course definitions</button>
            <button v-on:click="reloadCourseDefinitions">Reload course definitions</button>
        </section>
    </div>
</template>

<script lang="ts" src="./admin-page.ts"></script>
