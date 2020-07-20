import Route                                from "vue-routisan";

// Admin routes
import AdministratorLogin                   from "./Components/Admin/Login/Login";
import AdministratorDashboard               from "./Components/Admin/Dashboard/Dashboard";
import AdministratorProducts                from "./Components/Admin/Products/Products";

Route.group( { prefix: '/admin' }, () =>
{
    Route.view( '/',                        AdministratorLogin ).name( 'administrators/index' );
    Route.view( '/login',                   AdministratorLogin ).name( 'administrators/login' );
    Route.view( '/dashboard',               AdministratorDashboard ).name( 'administrators/dashboard' );
    Route.view( '/products',                AdministratorProducts ).name( 'administrators/products' );
});

// Agent routes
import AgentLogin                           from "./Components/Agent/Login/Login";
import AgentDashboard                       from "./Components/Agent/Dashboard/Dashboard";

Route.group( { prefix: '/agent' }, () =>
{
    Route.view( '/',                        AgentLogin ).name( 'agents/index' );
    Route.view( '/login',                   AgentLogin ).name( 'agents/login' );
    Route.view( '/dashboard',               AgentDashboard ).name( 'agents/dashboard' );
});

// Business routes
import BusinessLogin                        from "./Components/Business/Login/Login";
import BusinessDashboard                    from "./Components/Business/Dashboard/Dashboard";

Route.group( { prefix: '/business' }, () =>
{
    Route.view( '/',                        BusinessLogin ).name( 'business/index' );
    Route.view( '/login',                   BusinessLogin ).name( 'business/login' );
    Route.view( '/dashboard',               BusinessDashboard ).name( 'business/dashboard' );
});

// Export the routes
export default Route.all();