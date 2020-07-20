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
                                    <div class="pt-1"><i class="fas fa-home font-20 text-muted"></i><p class="font-16 m-b-5">Registered Shops / Businesses</p></div>
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
                                    <div class="pt-1"><i class="fas fa-shopping-cart font-20  text-muted"></i><p class="font-16 m-b-5">Added Productos</p></div>
                                    <div class="ml-auto"><h2 class="font-light text-right">169,970,000</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Begin agents stat -->
            </div>
            <!-- End basic states -->


            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-4">
                            <form><input type="text" class="form-control product-search" id="input-search" placeholder="Search Shop / Business..."></form>
                        </div>
                        <div class="col-md-8 text-right d-flex justify-content-md-end justify-content-center mt-md-0">
                            <button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#add-shop">Add Shop / Business</button>

                            <div id="add-shop" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content secondary_color">
                                        <div class="modal-header d-flex align-items-center">
                                            <h4 class="modal-title" id="myModalLabel">Add New Shop / Business</h4>
                                            <button type="button" class="close ml-auto" data-dismiss="modal" aria-hidden="true">×</button>
                                        </div>
                                        <div class="modal-body">
                                            <from class="form-horizontal form-material">
                                                <div class="form-group">
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Type name"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Email"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Phone"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Designation"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Age"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Date of joining"> </div>
                                                    <div class="col-md-12 m-b-20">
                                                        <input type="text" class="form-control" placeholder="Salary"> </div>
                                                </div>
                                            </from>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info waves-effect" data-dismiss="modal">Save</button>
                                            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                    <!-- /.modal-content -->
                                </div>
                                <!-- /.modal-dialog -->
                            </div>
                        </div>
                    </div>

                    <div class="accordion" id="accordionTable">
                        <div class="card m-b-5">
                            <div id="col1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionTable">
                                <div class="mt-4">
                                    <div class="table-responsive">
                                        <table id="demo-foo-accordion" class="table table-bordered m-b-0 toggle-arrow-tiny secondary_color" data-filtering="true" data-cascade="true" data-sorting="true" data-toggle-column="last" data-paging="true" data-paging-size="6">
                                            <thead>
                                            <tr class="footable-filtering">
                                                <th data-toggle="true"> Shop / Business Name </th>
                                                <th> Know As </th>
                                                <th data-hide="phone"> Office address </th>
                                                <th data-hide="all"> Date Added </th>
                                                <th data-hide="all"> Status </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Isidra</td>
                                                <td>Boudreaux</td>
                                                <td>Traffic Court Referee</td>
                                                <td>22 Jun 1972</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Shona</td>
                                                <td>Woldt</td>
                                                <td>Airline Transport Pilot</td>
                                                <td>3 Oct 1981</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Granville</td>
                                                <td>Leonardo</td>
                                                <td>Business Services Sales Representative</td>
                                                <td>19 Apr 1969</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Easer</td>
                                                <td>Dragoo</td>
                                                <td>Drywall Stripper</td>
                                                <td>13 Dec 1977</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maple</td>
                                                <td>Halladay</td>
                                                <td>Aviation Tactical Readiness Officer</td>
                                                <td>30 Dec 1991</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maxine</td>
                                                <td><a href="javascript:void(0)">Woldt</a></td>
                                                <td><a href="javascript:void(0)">Business Services Sales Representative</a></td>
                                                <td>17 Oct 1987</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lorraine</td>
                                                <td>Mcgaughy</td>
                                                <td>Hemodialysis Technician</td>
                                                <td>11 Nov 1983</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lizzee</td>
                                                <td><a href="javascript:void(0)">Goodlow</a></td>
                                                <td>Technical Services Librarian</td>
                                                <td>1 Nov 1961</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Judi</td>
                                                <td>Badgett</td>
                                                <td>Electrical Lineworker</td>
                                                <td>23 Jun 1981</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lauri</td>
                                                <td>Hyland</td>
                                                <td>Blackjack Supervisor</td>
                                                <td>15 Nov 1985</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Isidra</td>
                                                <td>Boudreaux</td>
                                                <td>Traffic Court Referee</td>
                                                <td>22 Jun 1972</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Shona</td>
                                                <td>Woldt</td>
                                                <td>Airline Transport Pilot</td>
                                                <td>3 Oct 1981</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Granville</td>
                                                <td>Leonardo</td>
                                                <td>Business Services Sales Representative</td>
                                                <td>19 Apr 1969</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Easer</td>
                                                <td>Dragoo</td>
                                                <td>Drywall Stripper</td>
                                                <td>13 Dec 1977</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maple</td>
                                                <td>Halladay</td>
                                                <td>Aviation Tactical Readiness Officer</td>
                                                <td>30 Dec 1991</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maxine</td>
                                                <td><a href="javascript:void(0)">Woldt</a></td>
                                                <td><a href="javascript:void(0)">Business Services Sales Representative</a></td>
                                                <td>17 Oct 1987</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lorraine</td>
                                                <td>Mcgaughy</td>
                                                <td>Hemodialysis Technician</td>
                                                <td>11 Nov 1983</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lizzee</td>
                                                <td><a href="javascript:void(0)">Goodlow</a></td>
                                                <td>Technical Services Librarian</td>
                                                <td>1 Nov 1961</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Judi</td>
                                                <td>Badgett</td>
                                                <td>Electrical Lineworker</td>
                                                <td>23 Jun 1981</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lauri</td>
                                                <td>Hyland</td>
                                                <td>Blackjack Supervisor</td>
                                                <td>15 Nov 1985</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Isidra</td>
                                                <td>Boudreaux</td>
                                                <td>Traffic Court Referee</td>
                                                <td>22 Jun 1972</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Shona</td>
                                                <td>Woldt</td>
                                                <td>Airline Transport Pilot</td>
                                                <td>3 Oct 1981</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Granville</td>
                                                <td>Leonardo</td>
                                                <td>Business Services Sales Representative</td>
                                                <td>19 Apr 1969</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Easer</td>
                                                <td>Dragoo</td>
                                                <td>Drywall Stripper</td>
                                                <td>13 Dec 1977</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maple</td>
                                                <td>Halladay</td>
                                                <td>Aviation Tactical Readiness Officer</td>
                                                <td>30 Dec 1991</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maxine</td>
                                                <td><a href="javascript:void(0)">Woldt</a></td>
                                                <td><a href="javascript:void(0)">Business Services Sales Representative</a></td>
                                                <td>17 Oct 1987</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lorraine</td>
                                                <td>Mcgaughy</td>
                                                <td>Hemodialysis Technician</td>
                                                <td>11 Nov 1983</td>
                                                <td><span class="label label-table label-inverse">Disabled</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lizzee</td>
                                                <td><a href="javascript:void(0)">Goodlow</a></td>
                                                <td>Technical Services Librarian</td>
                                                <td>1 Nov 1961</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            <tr>
                                                <td>Judi</td>
                                                <td>Badgett</td>
                                                <td>Electrical Lineworker</td>
                                                <td>23 Jun 1981</td>
                                                <td><span class="label label-table label-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>Lauri</td>
                                                <td>Hyland</td>
                                                <td>Blackjack Supervisor</td>
                                                <td>15 Nov 1985</td>
                                                <td><span class="label label-table label-danger">Suspended</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



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