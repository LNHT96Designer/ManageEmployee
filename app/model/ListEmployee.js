function ListEmployee() {
    //get list employee
    this._getList = function () {
        let data = localStorage.getItem('listemployee');
        if (data == undefined) {
            let list = [];
            let datacreate = JSON.stringify(list);
            localStorage.setItem('listemployee', datacreate);
            let datarecieve = localStorage.getItem('listemployee');
            return datarecieve;
        } else {
            return data;
        }
    }
    //find employee by Id
    this._findByID = function (id) {
        let data = this._getList();
        let list = JSON.parse(data);
        for (let i = 0; i < list.length; i++) {
            if (list[i]._Id == id) {
                return JSON.stringify(list[i]);
            }
        }
    }
    //find employee by name
    this._findByName = function (name) {
        let data = this._getList();
        let list = JSON.parse(data);
        for (let i = 0; i < list.length; i++) {
            if (list[i]._Name == name) {
                return JSON.stringify(list[i]);
            }
        }
    }
    //find employees by keyword ID or name
    this._findListEmployeeByKeyword = function (keyword) {
        let data = this._getList();
        let list = JSON.parse(data);
        if (list.length == 0) {
            return list;
        } else {
            let listTemp = [];
            for (let i = 0; i < list.length; i++) {
                let id = list[i]._Id.toString();
                if (id.indexOf(keyword) != -1 || list[i]._Name.indexOf(keyword) != -1 || list[i]._Name.indexOf(this._toTitleCase(keyword)) != -1
                || list[i]._Position.indexOf(keyword) != -1 || list[i]._Position.indexOf(this._toTitleCase(keyword)) != -1
                ) {
                    listTemp.push(list[i]);
                }
            }
            return listTemp;
        }
    }
    //add employee
    this._addEmplyee = function (employee) {
        let result = false;
        let data = this._getList();
        let list = JSON.parse(data);
        if (list.push(employee) != 0) {
            let newdata = JSON.stringify(list);
            localStorage.setItem('listemployee', newdata);
            result = true;
        }
        return result;
    }
    //update employee 
    this._updateEmployee = function (employee) {
        let result = false;
        let data = this._getList();
        let list = JSON.parse(data);
        for (let i = 0; i < list.length; i++) {
            if (list[i]._Id == employee._Id) {
                list[i] = employee;
                result = true;
            }
        }
        let newdata = JSON.stringify(list);
        localStorage.setItem('listemployee', newdata);
        return result;
    }
    //delete employee
    this._deleteEmployee = function (employee) {
        let result = false;
        let data = this._getList();
        let list = JSON.parse(data);
        for (let i = 0; i < list.length; i++) {
            if (list[i]._Id == employee._Id) {
                list.splice(i, 1);
                result = true;
            }
        }
        let newdata = JSON.stringify(list);
        localStorage.setItem('listemployee', newdata);
        return result;
    }
    //set capitalized for keyword
    this._toTitleCase = function(str){
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}