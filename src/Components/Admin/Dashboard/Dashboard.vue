<template>

    <!-- Begin page wrapper -->
    <div id="main-wrapper">

        <!-- Begin top menu -->
        <top-menu></top-menu>
        <!-- End top menu -->

        <!-- Begin left sidebar -->
        <left-side-bar></left-side-bar>
        <!-- End left sidebar -->

        <!-- Begin page contents -->
        <page-contents></page-contents>
        <!-- End page contents -->

    </div>
    <!-- End page wrapper -->

</template>

<script>
    import LeftSideBar              from "../Shared/LeftSideBar"
    import TopMenu                  from "../Shared/TopMenu"
    import PageContents             from "./PageContents"

    export default
    {
        components: { LeftSideBar, TopMenu, PageContents },
        metaInfo: { bodyAttrs: { class: [''] }, title: 'Dashboard - GB Online' },
    }
</script>

<style scoped>

</style>