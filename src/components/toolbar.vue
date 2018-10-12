<template>
    <div class="header">
        <h1>
            <router-link to="/">Michael</router-link>
        </h1>
        <ul>
            <li :key="JSON.stringify(menuItem)" v-for="menuItem in menuItems">
                 <router-link :to="menuItem.url">{{ menuItem.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                name: 'Bio',
                url: '/bio'
                },
                {
                name: 'Works',
                url: '/works' 
                }
            ]
        }
    }

}
</script>

<style scoped>
    .header{
        border: 1px solid black;
    }
</style>
