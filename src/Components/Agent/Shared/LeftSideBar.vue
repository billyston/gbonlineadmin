<template>

    <!-- Begin side navigations -->
    <aside class="left-sidebar">
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">

                <!-- Begin navigations -->
                <ul id="sidebarnav">

                    <!-- Begin menu title -->
                    <li class="nav-small-cap"><i class="fas fa-ellipsis-h"></i><span class="hide-menu">Dashboard</span></li>
                    <!-- End menu title -->

                    <!-- Begin home nav -->
                    <li class="sidebar-item">
                        <router-link to="dashboard" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                            <i class="fas fa-tv font-10"></i><span class="hide-menu">Home</span>
                        </router-link>
                    </li>
                    <!-- End home nav -->

                    <!-- Begin agents nav -->
                    <li class="sidebar-item">
                        <router-link to="dashboard" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                            <i class="fas fa-home font-10"></i><span class="hide-menu">Shops / Businesses</span>
                        </router-link>
                    </li>
                    <!-- End agents nav -->

                    <!-- Begin agents nav -->
                    <li class="sidebar-item">
                        <router-link to="dashboard" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                            <i class="fas fa-list-alt font-10"></i><span class="hide-menu">Transaction History</span>
                        </router-link>
                    </li>
                    <!-- End agents nav -->

                </ul>
                <!-- End navigations -->

            </nav>
        </div>
    </aside>
    <!-- End side navigations -->

</template>

<script>
    export default {}
</script>

<style scoped>
</style>