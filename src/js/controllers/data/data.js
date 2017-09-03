function DataCtrl($scope,$state,$stateParams){
    $('.pagination li').click(function () {
        alert(11);
    })
    $scope.list = [
        {
            from: 'Admin',
            name: 'dahei',
            id: '0',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '1',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '2',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '3',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '4',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '5',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '6',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '7',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '8',
            account: '123',
            create: '2016-10-12 17:30'
        },
        {
            from: 'Admin',
            name: 'dahei',
            id: '9',
            account: '123',
            create: '2016-10-12 17:30'
        }
    ]
    $scope.pages = {
        totalnum:'143',
        current:'1',
        totalpage:'15'
    }
    /*require('datetimepicker');
    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left"
    });*/
}