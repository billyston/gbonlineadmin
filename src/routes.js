import Route                                from "vue-routisan";

// Administrators routes
import AdministratorLogin                   from "./Components/Administrators/Login/Login";
import AdministratorDashboard               from "./Components/Administrators/Dashboard/Dashboard";

Route.group( { prefix: '/administrators' }, () =>
{
    Route.view( '/',                        AdministratorLogin ).name( 'administrators/login' );
    Route.view( '/login',                   AdministratorLogin ).name( 'administrators/login' );
    Route.view( '/dashboard',               AdministratorDashboard ).name( 'administrators/dashboard' );
});

// Agents routes
import AgentLogin                           from "./Components/Agents/Login/Login";
import AgentDashboard                       from "./Components/Agents/Dashboard/Dashboard";

Route.group( { prefix: '/agents' }, () =>
{
    Route.view( '/',                        AgentLogin ).name( 'administrators/login' );
    Route.view( '/login',                   AgentLogin ).name( 'administrators/login' );
    Route.view( '/dashboard',               AgentDashboard ).name( 'administrators/dashboard' );
});

// Business routes
import BusinessLogin                        from "./Components/Business/Login/Login";
import BusinessDashboard                    from "./Components/Business/Dashboard/Dashboard";

Route.group( { prefix: '/business' }, () =>
{
    Route.view( '/',                        BusinessLogin ).name( 'administrators/login' );
    Route.view( '/login',                   BusinessLogin ).name( 'administrators/login' );
    Route.view( '/dashboard',               BusinessDashboard ).name( 'administrators/dashboard' );
});

// Export the routes
export default Route.all();