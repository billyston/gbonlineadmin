<template>

    <!-- Begin page contents -->
    <div class="page-wrapper">

        <!-- Begin breadcrumb -->
        <div class="page-breadcrumb">
            <div class="row">
                <div class="col-5 align-self-center">
                    <h4 class="page-title">Dashboard</h4>
                </div>
                <div class="col-7 align-self-center">
                    <div class="d-flex align-items-center justify-content-end">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- End breadcrumb -->

        <!-- Begin main contents -->
        <div class="container-fluid">

            <!-- Begin basic states -->
            <div class="card-group">

                <!-- Begin business stat -->
                <div class="card">
                    <div class="card-body secondary_color">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex no-block align-items-center">
                                    <div class="pt-1"><i class="fas fa-home font-20 text-muted"></i><p class="font-16 m-b-5">Shops / Businesses</p></div>
                                    <div class="ml-auto pt-2"><h2 class="font-light text-right">10,030</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End business stat -->

                <!-- Begin agents stat -->
                <div class="card">
                    <div class="card-body secondary_color">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex no-block align-items-center">
                                    <div class="pt-1"><i class="fas fa-user font-20  text-muted"></i><p class="font-16 m-b-5">Agents</p></div>
                                    <div class="ml-auto"><h2 class="font-light text-right">169</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Begin agents stat -->

                <!-- Begin products stat -->
                <div class="card">
                    <div class="card-body secondary_color">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex no-block align-items-center">
                                    <div class="pt-1"><i class="fas fas fa-shopping-cart font-20 text-muted"></i><p class="font-16 m-b-5">Products</p></div>
                                    <div class="ml-auto"><h2 class="font-light text-right">100,000,000</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Begin products stat -->

                <!-- Column -->
                <div class="card">
                    <div class="card-body secondary_color">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex no-block align-items-center">
                                    <div><i class="fas fa-users font-20 text-muted"></i><p class="font-16 m-b-5">Users</p></div>
                                    <div class="ml-auto"><h1 class="font-light text-right">158,908,99</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End basic states -->

            <!-- Basic charts -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body secondary_color">
                            <h4 class="card-title">Campaign</h4>
                            <div id="campaign" style="height: 168px; width: 100%;" class="m-t-10"></div>
                            <!-- row -->
                            <div class="row text-center text-lg-left">
                                <!-- column -->
                                <div class="col-4">
                                    <h4 class="m-b-0 font-medium">60%</h4>
                                    <span class="text-muted">Open</span>
                                </div>
                                <!-- column -->
                                <div class="col-4">
                                    <h4 class="m-b-0 font-medium">26%</h4>
                                    <span class="text-muted">Click</span>
                                </div>
                                <!-- column -->
                                <div class="col-4">
                                    <h4 class="m-b-0 font-medium">18%</h4>
                                    <span class="text-muted">Bounce</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body secondary_color">
                            <h5 class="card-title m-b-5">Referral Earnings</h5>
                            <h3 class="font-light">GH₵769.08</h3>
                            <div class="m-t-20 text-center">
                                <div id="earnings"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 order-lg-2 order-md-3">
                    <div class="card">
                        <div class="card-body secondary_color">
                            <div class="d-flex align-items-center">
                                <div>
                                    <h4 class="card-title">Sales Ratio</h4>
                                </div>
                                <div class="ml-auto">
                                    <div class="dl m-b-10">
                                        <select class="custom-select border-0 text-muted">
                                            <option value="0" selected="">August 2018</option>
                                            <option value="1">May 2018</option>
                                            <option value="2">March 2018</option>
                                            <option value="3">June 2018</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center no-block">
                                <div>
                                    <span class="text-muted">This Week</span>
                                    <h3 class="mb-0 text-info font-light">GH₵23.5K</h3>
                                </div>
                                <div class="ml-4">
                                    <span class="text-muted">Last Week</span>
                                    <h3 class="mb-0 text-muted font-light">GH₵945</h3>
                                </div>
                            </div>
                            <div class="sales ct-charts mt-5"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 order-lg-3 order-md-2">
                    <div class="card">
                        <div class="card-body m-b-0 secondary_color">
                            <h4 class="card-title">Thursday <span class="font-14 font-normal text-muted">12th April, 2018</span></h4>
                            <div class="d-flex align-items-center flex-row m-t-30">
                                <h1 class="font-light"><span>35<sup>°</sup></span></h1>
                            </div>
                        </div>
                        <div class="weather-report" style="height:120px; width:100%;"></div>
                    </div>

                    <div class="card">
                        <div class="card-body secondary_color">
                            <h4 class="card-title m-b-0">Users</h4>
                            <h2 class="font-light">35,658 <span class="font-16 text-success font-medium">+23%</span></h2>
                            <div class="m-t-30">
                                <div class="row text-center">
                                    <div class="col-6 border-right">
                                        <h4 class="m-b-0">58%</h4>
                                        <span class="font-14 text-muted">New Users</span>
                                    </div>
                                    <div class="col-6">
                                        <h4 class="m-b-0">42%</h4>
                                        <span class="font-14 text-muted">Repeat Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End charts -->

            <!-- Begin products and stores -->
            <div class="row">

                <!-- Begin products -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body bg-light">
                            <div class="row align-items-center secondary_color">
                                <div class="col-xs-12 col-md-6">
                                    <h4 class="m-b-0 font-light">August 2020</h4>
                                    <span class="font-14 text-muted">Product Report</span>
                                </div>
                            </div>
                        </div>

                        <div class="comment-widgets scrollable" style="height:430px;">
                            <div class="table-responsive">
                                <table class="table table-hover secondary_color">
                                    <thead>
                                        <tr>
                                            <th class="border-top-0">NAME</th>
                                            <th class="border-top-0">STATUS</th>
                                            <th class="border-top-0">DATE</th>
                                            <th class="border-top-0">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class=""><img src="/assets/images/products/1.jpg" alt="user" width="40" class="rounded-circle" /></td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="font-medium">GH₵24</span></td>
                                        </tr>
                                        <tr>
                                            <td class=""><img src="/assets/images/products/2.jpg" alt="user" width="40" class="rounded-circle" /></td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="font-medium">GH₵24</span></td>
                                        </tr>
                                        <tr>
                                            <td class=""><img src="/assets/images/products/3.jpg" alt="user" width="40" class="rounded-circle" /></td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="font-medium">GH₵24</span></td>
                                        </tr>
                                        <tr>
                                            <td class=""><img src="/assets/images/products/4.jpg" alt="user" width="40" class="rounded-circle" /></td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="font-medium">GH₵24</span></td>
                                        </tr>
                                        <tr>
                                            <td class=""><img src="/assets/images/products/5.jpg" alt="user" width="40" class="rounded-circle" /></td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="font-medium">GH₵24</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End products -->

                <!-- Begin stores -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body bg-light">
                            <div class="row align-items-center secondary_color">
                                <div class="col-xs-12 col-md-6">
                                    <h4 class="m-b-0 font-light">August 2020</h4>
                                    <span class="font-14 text-muted">Products Category Report</span>
                                </div>
                            </div>
                        </div>

                        <div class="comment-widgets scrollable" style="height:430px;">
                            <div class="table-responsive">
                                <table class="table secondary_color">
                                    <thead>
                                        <tr>
                                            <th class="border-top-0">CATEGORY</th>
                                            <th class="border-top-0">ITEMS</th>
                                        </tr>
                                    </thead>
                                    <tbody class="secondary_color">
                                        <tr>
                                            <td><a href="#">Apple iPhone XR 256GB red</a></td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Samsung Galaxy A30 3/32GB blue</a></td>
                                            <td>52</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Samsung Galaxy Note9 6/128GB</a></td>
                                            <td>74</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Apple iPhone XR 256GB red</a></td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Samsung Galaxy A30 3/32GB blue</a></td>
                                            <td>11</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Apple iPhone XS Max 256GB gold</a></td>
                                            <td>52</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">ASUS Asus ROG Phone 8/128GB blue</a></td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Apple iPhone XR 256GB Green</a></td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Samsung Galaxy Note9 6/128GB</a></td>
                                            <td>74</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Apple iPhone XR 256GB red</a></td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End stores -->

            </div>
            <!-- End products and stores -->

        </div>
        <!-- End main contents -->

    </div>
    <!-- End page contents -->

</template>

<script>
    export default {}
</script>

<style scoped>

</style>