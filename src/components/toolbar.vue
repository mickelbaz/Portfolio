<template>
    <div class="header">
            <router-link to="/">
                <img src="../assets/ME-logo-white.png" alt="">
            </router-link>
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
                        name: 'bio',
                        url: '/bio'
                    },
                    {
                        name: 'works',
                        url: '/works'
                    },
                    {
                        name: 'contact',
                        url: '/contact'
                    }
                ]
            }
        }

    }
</script>

<style scoped>
    .header {
        border: 1px solid black;
        display: flex;
        background-color: black;
        justify-content: space-around;
    }

    .header ul {
        list-style-type: none;
        display: inline;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header li {
        list-style-type: none;
        margin-right: 20px;
    }
    .header a {
        font-size: 24px;
        color: white;
        text-decoration: none;
    }
</style>