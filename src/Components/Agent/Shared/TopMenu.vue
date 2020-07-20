<template>

    <!-- Begin top menu -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">

            <!-- Begin logo contents -->
            <div class="navbar-header">
                <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>

                <!-- Begin logos -->
                <div class="navbar-brand">
                    <router-link to="dashboard" class="logo">
                        <b class="logo-icon">
                            <img src="/assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                        </b>
                    </router-link>
                    <a class="sidebartoggler d-none d-md-block" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="fas fa-toggle-on font-15"></i></a>
                </div>
                <!-- End logos -->
                <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
            </div>
            <!-- End logo contents -->

            <!-- Begin navs contents -->
            <div class="navbar-collapse collapse" id="navbarSupportedContent">

                <!-- Begin search contents -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item search-box">
                        <a class="nav-link waves-effect waves-dark" href="javascript:void(0)">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-search font-15 mr-1"></i>
                                <div class="ml-1 d-none d-sm-block">
                                    <span>Search</span>
                                </div>
                            </div>
                        </a>
                        <form class="app-search position-absolute">
                            <input type="text" class="form-control" placeholder="Search &amp; enter">
                            <a class="srh-btn">
                                <i class="fas fa-window-close"></i>
                            </a>
                        </form>
                    </li>
                </ul>
                <!-- End search contents -->

                <!-- Begin notifications contents -->
                <ul class="navbar-nav">

                    <!-- Begin messages -->
                    <div class="button-group mt-3 mr-2">
                        <button type="button" class="btn waves-effect waves-light btn-sm btn-success"><i class="ti-wallet m-r-5 m-l-5"></i> Balance: GH₵120,000</button>
                    </div>
                    <!-- End messages -->

                    <!-- Begin notifications -->
                    <li class="nav-item dropdown border-right"></li>
                    <!-- End notifications -->

                    <!-- Begin user -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark pro-pic" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://www.wrappixel.com/demos/admin-templates/nice-admin/assets/images/users/2.jpg" alt="user" class="rounded-circle" width="40">
                            <span class="m-l-5 font-medium d-none d-sm-inline-block">Micheal <i class="fas fa-angle-down"></i></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <span class="with-arrow">
                                    <span class="bg-primary"></span>
                                </span>
                            <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                                <div class="">
                                    <img src="https://www.wrappixel.com/demos/admin-templates/nice-admin/assets/images/users/2.jpg" alt="user" class="rounded-circle" width="60">
                                </div>
                                <div class="m-l-10">
                                    <h4 class="m-b-0">Michael Kabutey</h4>
                                    <p class=" m-b-0">billyston@gmail.com</p>
                                </div>
                            </div>
                            <div class="profile-dis scrollable">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                            </div>
                        </div>
                    </li>
                    <!-- End user -->

                </ul>
                <!-- End notifications contents -->

            </div>
            <!-- Begin navigation contents -->

        </nav>
    </header>
    <!-- End top menu -->

</template>

<script>
    export default {}
</script>

<style scoped>
</style>