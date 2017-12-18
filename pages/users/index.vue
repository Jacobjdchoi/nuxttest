<template>
    <div>
        <h1>List of Users</h1>
        <ul>
            <li v-for="user in users">
                <nuxt-link :to="'/users/'+user.username">
                    {{user.username}}
                </nuxt-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'users',
        data: function(){
            return {
                users: [
                    {username: 'jacob'},
                    {username: 'Sarah'},
                    {username: 'Nate'},
                    {username: 'Sophie'}
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
