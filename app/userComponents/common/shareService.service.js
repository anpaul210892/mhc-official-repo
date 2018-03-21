mhcApp.factory('shareService', function() {
    var data =
    {
        msg: ''
    };

return {
    getMsg: function () {
        return data.msg;
    },
    setMsg: function (msg) {
        var msgArr = msg.split("_");
        data.msg = msgArr;
    }
};
});