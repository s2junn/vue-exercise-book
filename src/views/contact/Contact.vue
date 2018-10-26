<template>
    <div class="contact">
        <h1>Contact</h1>
        <p>
            <ul>
                <li>Email: {{ email }}</li>
                <li>Homepage: {{ homepage }}</li>
            </ul>
        </p>
    </div>
</template>


<script>
export default {
    name: 'contact',
    data: function () {
        return {
            email: 's2junn@gmail.com',
            homepage: 'https://s2junn.tistory.com/'
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
