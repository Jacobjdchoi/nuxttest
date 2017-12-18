<template>
    <div>
        <h1>The username is: #{{username}}</h1>  
    </div>
</template>
<script>
   export default {
       name: 'user',
       data: function(){
           return {
               username: this.$route.params.username
           }
       }
   } 

</script>
<style lang="scss" scoped>

</style>
