<template>
    <div class="CourseCard card">
        <div class="card-header">
            <h3>{{courseDefinition.name}}</h3>
        </div>
        <div class="card-content">
            <img class="card-image" :src="courseDefinition.image" :alt="courseDefinition.name">
            <div class="card-details">
                <p>{{courseDefinition.description}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./course-card.ts"></script>
<style scoped lang="scss" src="./course-card.scss"/>
