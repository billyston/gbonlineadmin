<template>

    <!-- Begin page wrapper -->
    <div class="container-scroller">

        <!-- Begin left sidebar -->
        <left-side-bar></left-side-bar>
        <!-- End left sidebar -->

        <!-- Begin main contents wrapper -->
        <div class="container-fluid page-body-wrapper">

            <!-- Begin top menu -->
            <top-menu></top-menu>
            <!-- End top menu -->

            <!-- Begin page contents -->
            <page-contents></page-contents>
            <!-- End page contents -->

        </div>
        <!-- End main contents wrapper -->

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