<template>

    <!-- Begin login form -->
    <div class="auth-wrapper d-flex no-block justify-content-center align-items-center" style="background:url(/assets/images/background/auth-bg.jpg) no-repeat center center;">
        <div class="auth-box">
            <div id="loginform">

                <!-- Begin logo -->
                <div class="logo secondary_color">
                    <span class="db"><img src="/assets/images/logo.png" alt="logo" /></span>
                    <h5 class="font-medium m-b-20 mt-3">Sign In to Agent</h5>
                </div>
                <!-- End logo -->

                <!-- Begin login form -->
                <div class="row">
                    <div class="col-12 secondary_color">
                        <form class="form-horizontal m-t-20" id="" @submit.prevent="LogIn">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="ti-user"></i></span>
                                </div>
                                <input type="text" class="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon2"><i class="ti-pencil"></i></span>
                                </div>
                                <input type="text" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="custom-control custom-checkbox d-flex align-items-center">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                        <label class="custom-control-label" for="customCheck1">Remember me</label>
                                        <a href="javascript:void(0)" id="to-recover" class="text-dark ml-auto"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <div class="col-xs-12 p-b-20">
                                    <button class="btn btn-block btn-lg btn-info" type="submit">Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End login form -->

            </div>
        </div>
    </div>
    <!-- End login form -->

</template>

<script>
    export default
    {
        methods:
        {
            LogIn: function ()
            {
                window.location = '/agent/dashboard'
            }
        }
    }
</script>

<style scoped>

</style>