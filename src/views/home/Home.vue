<template>
    <div class="home">
        <h1>Home</h1>
        <p>{{ message }}</p>
    </div>
</template>


<script>
export default {
    name: 'home',
    data: function () {
        return {
            message: '*** Some Informations ***'
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
