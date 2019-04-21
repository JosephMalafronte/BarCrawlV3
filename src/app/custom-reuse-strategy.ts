import {RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot} from '@angular/router';


// This impl. bases upon one that can be found in the router's test cases.
export class CustomReuseStrategy implements RouteReuseStrategy {

    handlers: {[key: string]: DetachedRouteHandle} = {};

    //List of routes to store and retrieve from
    saveRoutes: string[] = ['barlist', 'search'];

    //If true then store
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if(this.saveRoutes.indexOf(route.routeConfig.path)< 0) return false;
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[route.routeConfig.path] = handle;
    }

    //if true then retrieve
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        if(this.saveRoutes.indexOf(route.routeConfig.path)< 0) return false;
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) return null;
        return this.handlers[route.routeConfig.path];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    
}
