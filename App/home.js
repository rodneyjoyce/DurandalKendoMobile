define(function (require)
{
    function viewModel()
    {
        var self = this;
        self.activate = activate,
        self. viewAttached = viewAttached;

        function activate()
        {
            console.log("Home activate");
        }

        function viewAttached()
        {
            console.log("Home viewAttached");
        }
    }
    var vm = new viewModel();
    return vm;
});