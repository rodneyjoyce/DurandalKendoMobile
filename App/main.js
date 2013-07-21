require.config({
    paths: { "text": "durandal/amd/text" }
});

define(function (require)
{
    var system = require('durandal/system'),
        app = require('durandal/app'),
        viewModelBinder = require('durandal/viewModelBinder'),
        router = require('durandal/plugins/router');

    //>>excludeStart(“build”, true);
    system.debug(true);
    //>>excludeEnd(“build”);

    app.start().then(function ()
    {
        var routes = [
            { url: 'home', moduleId: 'home', name: 'home', visible: true },
            { url: 'about', moduleId: 'about', name: 'about', visible: true }
        ];
        router.map(routes);

        //http://durandaljs.com/documentation/KendoUI/
        kendo.ns = "kendo-";
        viewModelBinder.beforeBind = function (obj, view)
        {
            kendo.bind(view, obj.viewModel || obj);
        };


        app.adaptToDevice();
        app.setRoot('shell');

        router.handleInvalidRoute = function (route, params)
        {
            console.log('No route found');
        };
    });
});


