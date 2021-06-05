requirejs.config({
    baseUrl: "js/",
    paths: {
        jquery: "../lib/jquery/dist/jquery",
        "jquery-ui": "../lib/jquery-ui",
        underscore: "../lib/underscore",
        knockout: "../lib/knockout",
    },
});

// Set RequireJS entry point.
requirejs(["viewmodels/app"]);
