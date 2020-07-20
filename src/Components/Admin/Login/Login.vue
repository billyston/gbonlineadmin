<template>

    <!-- Begin page wrapper -->
    <div class="main-wrapper">

        <!-- Begin login form -->
        <login-form></login-form>
        <!-- End login form -->

    </div>
    <!-- End page wrapper -->

</template>

<script>
    import LoginForm                from "./LoginForm"

    export default
    {
        components: { LoginForm },
        metaInfo: { bodyAttrs: { class: [''] }, title: 'Login - GB Online' },
    }
</script>

<style scoped>

</style>