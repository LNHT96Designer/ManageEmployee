var arrayInput = document.getElementsByTagName('input');
var listEmployee = new ListEmployee();
var tbody = document.getElementById('myTbody');
var employeeUpdateTemp = null;
var itemnavigate = 0;
var itempage = 0;
var totaltemp = 0;
// check validation for form employee when button add employee clicked
function Validation() {
    let bool = false;
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].value == '' || arrayInput[i].value == null) {
            switch (arrayInput[i].getAttribute('id')) {
                case 'txtName':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Name';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtEmail':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Email';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtPhoneNumber':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Phone Number';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtDate':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Birthday';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtSalary':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Basic Salary';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtNumberWorking':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Number of working days';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtPosition':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Position';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
                case 'txtAllowance':
                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Please enter your Allowance';
                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                    bool = true;
                    break;
            }
        } else {
            switch (arrayInput[i].getAttribute('id')) {
                case 'txtName':
                    let patternName = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
                    if (!(patternName.test(arrayInput[i].value.trim()))) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Name is not match with format';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }

                    break;
                case 'txtEmail':
                    let patternEmail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                        + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
                    if (!(patternEmail.test(arrayInput[i].value.trim()))) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Email is not match with format';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        if (document.getElementById('btnAdd').innerHTML == '<i class="fa fa-plus mr-2"></i>Add Employee') {
                            if (checkExistData(arrayInput[i].value.trim())) {
                                arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                bool = true;
                            } else {
                                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                arrayInput[i].nextElementSibling.className = 'iconTick show';

                            }
                        } else {
                            if (checkExistData(arrayInput[i].value.trim())) {
                                if (arrayInput[i].value.trim() == employeeUpdateTemp._Email) {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                    bool = true;
                                }
                            } else {
                                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                arrayInput[i].nextElementSibling.className = 'iconTick show';

                            }
                        }
                    }

                    break;
                case 'txtPhoneNumber':
                    let patternPhoneNumber = new RegExp('(0[3|7|8|5])+([0-9]{8})');
                    if (!(patternPhoneNumber.test(arrayInput[i].value))) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Phone number is not match with format';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        if (document.getElementById('btnAdd').innerHTML == '<i class="fa fa-plus mr-2"></i>Add Employee') {
                            if (checkExistData(arrayInput[i].value)) {
                                arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                bool = true;
                            } else {
                                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                arrayInput[i].nextElementSibling.className = 'iconTick show';

                            }
                        } else {
                            if (checkExistData(arrayInput[i].value)) {
                                if (arrayInput[i].value == employeeUpdateTemp._PhoneNumber) {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                    bool = true;
                                }
                            } else {
                                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                arrayInput[i].nextElementSibling.className = 'iconTick show';

                            }
                        }

                    }
                    break;
                case 'txtDate':
                    let patternDate = new RegExp("(([1-2][0-9])|(0?[1-9])|(3[0-1]))/((1[0-2])|(0?[1-9]))/[1-9][0-9]{3}");
                    if (!patternDate.test(arrayInput[i].value.trim())) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Date is not match with format';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide'
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }
                    break;
                case 'txtSalary':
                    if (arrayInput[i].value <= 0 || arrayInput[i].value <= 2999999) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Basic salary must be 3000000 or more';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }
                    break;
                case 'txtNumberWorking':
                    if (arrayInput[i].value <= 0 || arrayInput[i].value < 24) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Number of working days must be 24 or more';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }
                    break;
                case 'txtPosition':
                    let patternPosition = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
                    if (!(patternPosition.test(arrayInput[i].value.trim()))) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Position is not match with format';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }
                    break;
                case 'txtAllowance':
                    if (arrayInput[i].value <= 0 || arrayInput[i].value <= 499999) {
                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Allowances must be 500000 or more';
                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                        bool = true;
                    } else {
                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                    }
                    break;
            }
        }
    }
    return bool;
}
//check validation for each inputs in form employee with keyup and change event when add employee
function checkValidation(id) {
    let bool = false;
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].getAttribute('id') == id) {
            if (!(arrayInput[i].value == '' || arrayInput[i].value == null)) {
                switch (arrayInput[i].getAttribute('id')) {
                    case 'txtName':
                        let patternName = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
                        if (!(patternName.test(arrayInput[i].value.trim()))) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Name is not match with format';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }

                        break;
                    case 'txtEmail':
                        let patternEmail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                            + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
                        if (!(patternEmail.test(arrayInput[i].value.trim()))) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Email is not match with format';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            if (document.getElementById('btnAdd').innerHTML == '<i class="fa fa-plus mr-2"></i>Add Employee') {
                                if (checkExistData(arrayInput[i].value.trim())) {
                                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                    bool = true;
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';

                                }
                            } else {
                                if (checkExistData(arrayInput[i].value.trim())) {
                                    if (arrayInput[i].value.trim() == employeeUpdateTemp._Email) {
                                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                                    } else {
                                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                        bool = true;
                                    }
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';

                                }
                            }
                        }

                        break;
                    case 'txtPhoneNumber':
                        let patternPhoneNumber = new RegExp('(0[3|7|8|5])+([0-9]{8})');
                        if (!(patternPhoneNumber.test(arrayInput[i].value))) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Phone number is not match with format';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            if (document.getElementById('btnAdd').innerHTML == '<i class="fa fa-plus mr-2"></i>Add Employee') {
                                if (checkExistData(arrayInput[i].value)) {
                                    arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                    arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                    arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                    bool = true;
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';

                                }
                            } else {
                                if (checkExistData(arrayInput[i].value)) {
                                    if (arrayInput[i].value == employeeUpdateTemp._PhoneNumber) {
                                        arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                        arrayInput[i].nextElementSibling.className = 'iconTick show';
                                    } else {
                                        arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Data is existed';
                                        arrayInput[i].parentElement.nextElementSibling.className = 'required';
                                        arrayInput[i].nextElementSibling.className = 'iconTick hide';
                                        bool = true;
                                    }
                                } else {
                                    arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                                    arrayInput[i].nextElementSibling.className = 'iconTick show';

                                }
                            }

                        }
                        break;
                    case 'txtDate':
                        let patternDate = new RegExp("(([1-2][0-9])|(0?[1-9])|(3[0-1]))/((1[0-2])|(0?[1-9]))/[1-9][0-9]{3}");
                        if (!patternDate.test(arrayInput[i].value.trim())) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Date is not match with format';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide'
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }
                        break;
                    case 'txtSalary':
                        if (arrayInput[i].value <= 0 || arrayInput[i].value <= 2999999) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Basic salary must be 3000000 or more';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }
                        break;
                    case 'txtNumberWorking':
                        if (arrayInput[i].value <= 0 || arrayInput[i].value < 24) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Number of working days must be 24 or more';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }
                        break;
                    case 'txtPosition':
                        let patternPosition = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
                        if (!(patternPosition.test(arrayInput[i].value.trim()))) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Position is not match with format';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }
                        break;
                    case 'txtAllowance':
                        if (arrayInput[i].value <= 0 || arrayInput[i].value <= 499999) {
                            arrayInput[i].parentElement.nextElementSibling.innerHTML = '*Allowances must be 500000 or more';
                            arrayInput[i].parentElement.nextElementSibling.className = 'required';
                            arrayInput[i].nextElementSibling.className = 'iconTick hide';
                            bool = true;
                        } else {
                            arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                            arrayInput[i].nextElementSibling.className = 'iconTick show';
                        }
                        break;
                }
            } else {
                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                arrayInput[i].nextElementSibling.className = 'iconTick hide';
                bool = true;
            }
        }
    }
    return bool;
}
//check exist data
function checkExistData(value) {
    let bool = false;
    let data = listEmployee._getList();
    let list = JSON.parse(data);
    for (let i = 0; i < list.length; i++) {
        if (list[i]._Email == value || list[i]._PhoneNumber == value) {
            bool = true;
        }
    }
    return bool;
}
//set value for propertys of emplyee
function setValue() {
    let id, name, email, phonenumber, birthday, salary, numberworkingday, position, allowance;
    for (let i = 0; i < arrayInput.length; i++) {
        switch (arrayInput[i].getAttribute('id')) {
            case 'txtName':
                let tempname = toTitleCase(arrayInput[i].value.trim());
                name = tempname.replace(/\s\s+/g, ' ');
            case 'txtEmail':
                email = arrayInput[i].value.trim();
            case 'txtPhoneNumber':
                phonenumber = arrayInput[i].value;
            case 'txtDate':
                birthday = arrayInput[i].value.trim();
            case 'txtSalary':
                salary = arrayInput[i].value;
            case 'txtNumberWorking':
                numberworkingday = arrayInput[i].value;
            case 'txtPosition':
                let tempposition = toTitleCase(arrayInput[i].value.trim());
                position = tempposition.replace(/\s\s+/g, ' ');
            case 'txtAllowance':
                allowance = arrayInput[i].value;
        }
    }
    var data = listEmployee._getList();
    var list = JSON.parse(data);
    if (list.length == 0) {
        id = 1;
    } else {
        id = parseInt(list[list.length - 1]._Id) + 1;
    }
    var employee = new Employee(id, name, email, phonenumber, birthday, salary, numberworkingday, position, allowance);
    return employee;
}
// function reset form employee
function Reset_Form() {
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].getAttribute('id') != 'txtsearch') {
            if (!(arrayInput[i].value == '' || arrayInput[i].value == null)) {
                arrayInput[i].value = '';
                arrayInput[i].nextElementSibling.className = 'iconTick hide';
                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
                document.getElementById('btnAdd').innerHTML = '<i class="fa fa-plus mr-2"></i>Add Employee';
                document.getElementById('btnAdd').className = 'btn btn-info mt-4 btnAdd';
            } else {
                arrayInput[i].nextElementSibling.className = 'iconTick hide';
                arrayInput[i].parentElement.nextElementSibling.className = 'hide';
            }
        }
    }
}
// Add a employee on list employee
function Add_Employee() {
    if (Validation() == false) {
        if (document.getElementById('btnAdd').innerHTML == '<i class="fa fa-plus mr-2"></i>Add Employee') {
            let employee = setValue();
            document.getElementById('headermodal').innerHTML = 'Notification';
            let btnadd = document.getElementById('btnAdd');
            btnadd.setAttribute('data-toggle', 'modal');
            btnadd.setAttribute('data-target', '#myModal');
            if (listEmployee._addEmplyee(employee)) {
                document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-check mr-2 infotick"></i>Add employee success!';               
                Reset_Form();
            } else {
                document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-times mr-2 infotick"></i>Add employee failed';
            }
            loadList();
        } else {
            let temp = toTitleCase(document.getElementById('txtName').value.trim());
            employeeUpdateTemp._Name = temp.replace(/\s\s+/g, ' ');
            employeeUpdateTemp._Email = document.getElementById('txtEmail').value.trim();
            employeeUpdateTemp._PhoneNumber = document.getElementById('txtPhoneNumber').value;
            employeeUpdateTemp._Birthday = document.getElementById('txtDate').value.trim();
            employeeUpdateTemp._Salary = document.getElementById('txtSalary').value;
            employeeUpdateTemp._NumberWorkingDay = document.getElementById('txtNumberWorking').value;
            let tempposition = toTitleCase(document.getElementById('txtPosition').value.trim());
            employeeUpdateTemp._Position = tempposition.replace(/\s\s+/g, ' ');
            employeeUpdateTemp._Allowance = document.getElementById('txtAllowance').value;
            document.getElementById('headermodal').innerHTML = 'Notification';
            let btnadd = document.getElementById('btnAdd');
            btnadd.setAttribute('data-toggle', 'modal');
            btnadd.setAttribute('data-target', '#myModal');
            if (listEmployee._updateEmployee(employeeUpdateTemp)) {
                document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-check mr-2 infotick"></i>Update employee success';
                document.getElementById('btnAdd').innerHTML = '<i class="fa fa-plus mr-2"></i>Add Employee';
                document.getElementById('btnAdd').className = 'btn btn-info mt-4 btnAdd';
                Reset_Form();
                // window.location.href = '#' + employeeUpdateTemp._Id;
                // $('body').on('hidden.bs.modal', function () {
                //     window.location.href = '#' + employeeUpdateTemp._Id;
                // });
            } else {
                document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-times mr-2 infotick"></i>Update employee failed';
            }
            loadList();
        }
    } else {
        let btnadd = document.getElementById('btnAdd');
        btnadd.setAttribute('data-toggle', '');
        btnadd.setAttribute('data-target', '');
    }
}
//set add function for button add employee
var btnReset = document.getElementById('btnAdd');
btnReset.addEventListener('click', Add_Employee);
// reset form
var btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', Reset_Form);
//set keyup event and change event for inputs in form to check valuedation form 
var inputname = document.getElementById('txtName');
$(inputname).on('keyup', function () {
    checkValidation(inputname.getAttribute('id'));
});
$(inputname).on('change', function () {
    checkValidation(inputname.getAttribute('id'));
});
var inputemail = document.getElementById('txtEmail');
$(inputemail).on('keyup', function () {
    checkValidation(inputemail.getAttribute('id'));
});
$(inputemail).on('change', function () {
    checkValidation(inputemail.getAttribute('id'));
});
var inputphonenumber = document.getElementById('txtPhoneNumber');
$(inputphonenumber).on('keyup', function () {
    checkValidation(inputphonenumber.getAttribute('id'));
});
$(inputphonenumber).on('change', function () {
    checkValidation(inputphonenumber.getAttribute('id'));
});
var inputbirthday = document.getElementById('txtDate');
$(inputbirthday).on('keyup', function () {
    checkValidation(inputbirthday.getAttribute('id'));
});
$(inputbirthday).on('change', function () {
    checkValidation(inputbirthday.getAttribute('id'));
});
var inputsalary = document.getElementById('txtSalary');
$(inputsalary).on('keyup', function () {
    checkValidation(inputsalary.getAttribute('id'));
});
$(inputsalary).on('change', function () {
    checkValidation(inputsalary.getAttribute('id'));
});
var inputnumberworking = document.getElementById('txtNumberWorking');
$(inputnumberworking).on('keyup', function () {
    checkValidation(inputnumberworking.getAttribute('id'));
});
$(inputnumberworking).on('change', function () {
    checkValidation(inputnumberworking.getAttribute('id'));
});
var inputposition = document.getElementById('txtPosition');
$(inputposition).on('keyup', function () {
    checkValidation(inputposition.getAttribute('id'));
});
$(inputposition).on('change', function () {
    checkValidation(inputposition.getAttribute('id'));
});
var inputallowance = document.getElementById('txtAllowance');
$(inputallowance).on('keyup', function () {
    checkValidation(inputallowance.getAttribute('id'));
});
$(inputallowance).on('change', function () {
    checkValidation(inputallowance.getAttribute('id'));
});
//set content for button in head form
document.getElementById('btnAdd').innerHTML = '<i class="fa fa-plus mr-2"></i>Add Employee';
document.getElementById('btnAdd').className = 'btn btn-info mt-4 btnAdd';
//function to catch event for button update on each records in table data employee
function catchEventButtonUpdate(buttonupdate) {
    buttonupdate.addEventListener('click', function () {
        let emploieeJson = listEmployee._findByID(buttonupdate.getAttribute('data-id'));
        let employee = JSON.parse(emploieeJson);
        employeeUpdateTemp = employee;
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById('txtName').value = employee._Name;
        document.getElementById('txtEmail').value = employee._Email;
        document.getElementById('txtPhoneNumber').value = employee._PhoneNumber;
        document.getElementById('txtDate').value = employee._Birthday;
        document.getElementById('txtSalary').value = employee._Salary;
        document.getElementById('txtNumberWorking').value = employee._NumberWorkingDay;
        document.getElementById('txtPosition').value = employee._Position;
        document.getElementById('txtAllowance').value = employee._Allowance;
        document.getElementById('btnAdd').innerHTML = '<i class="fa fa-eject mr-2"></i>Update Employee';
        document.getElementById('btnAdd').className = 'btn btn-info mt-4 btnUpdate';

    })
}
//function to catch event for button payroll staff on each records in table data employee
function catchEventButtonPayroll(buttonpayroll) {
    buttonpayroll.addEventListener('click', function () {
        let data = listEmployee._findByID(buttonpayroll.getAttribute('data-id'));
        let employeeparse = JSON.parse(data);
        let payrollstaff = employeeparse._NumberWorkingDay * employeeparse._Salary + parseInt(employeeparse._Allowance);
        document.getElementById('headermodal').innerHTML = 'Notification';
        document.getElementById('mymodalbody').innerHTML = 'Payroll Staff of ' + employeeparse._Name + ' is ' + payrollstaff + 'd';
        buttonpayroll.setAttribute('data-toggle', 'modal');
        buttonpayroll.setAttribute('data-target', '#myModal');
    });
}
//function to catch event for button delete on each records in table data employee
function catchEventButtonDelete(buttondelete) {
    buttondelete.addEventListener('click', function () {
        var data = listEmployee._findByID(buttondelete.getAttribute('data-id'));
        var employeeparse = JSON.parse(data);
        document.getElementById('headermodal').innerHTML = 'Notification';
        buttondelete.setAttribute('data-toggle', 'modal');
        buttondelete.setAttribute('data-target', '#myModal');
        if (listEmployee._deleteEmployee(employeeparse)) {
        document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-check mr-2 infotick"></i>Delete employee success';   
        } else {
        document.getElementById('mymodalbody').innerHTML = '<i class="fa fa-times mr-2 infotick"></i>Delete employee failed';            
        }
        loadList();
    });
}
//function set page navigation
function setPageNavigation(list) {
    let liprev = document.getElementById('itemPage');
    let total = 0;
    if (list.length == 0) {
        document.getElementById('myPageNavigation').className = 'hide';
    } else {
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center';
        if (list.length % 10 == 0) {
            total = list.length / 10;
            totaltemp = total;
        } else {
            total = parseInt(list.length / 10) + 1;
            totaltemp = total;
        }
        liprev.innerHTML = '';
        for (let i = itemnavigate; i <= total; i++) {
            if (i >= itemnavigate && i <= itemnavigate + 4) {
                let li = document.createElement('li');
                let a = `<a class="page-link mylink" href="#menuFeature">${i}</a>`;
                li.innerHTML = a;
                liprev.appendChild(li);
                setEvenItemPageNavigate(li, list);
                if (i == itempage) {
                    li.className = 'page-item textdecoration';
                    li.setAttribute('id', 'active');
                } else {
                    li.className = 'page-item';
                }
            }
        }
        if (total == 1) {
            document.getElementById('buttonprev').className = 'page-link mylink hide';
            document.getElementById('buttonnext').className = 'page-link mylink hide';
        } else {
            if (document.getElementById('active').firstChild.innerHTML == 1) {
                document.getElementById('buttonprev').className = 'page-link mylink hide';
                document.getElementById('buttonnext').className = 'page-link mylink show';
            } else if (document.getElementById('active').firstChild.innerHTML == total) {
                document.getElementById('buttonprev').className = 'page-link mylink show';
                document.getElementById('buttonnext').className = 'page-link mylink hide';
            } else {
                document.getElementById('buttonprev').className = 'page-link mylink show';
                document.getElementById('buttonnext').className = 'page-link mylink show';
            }
        }
    }
}
//set event click for each item page navigatetion
function setEvenItemPageNavigate(item, list) {
    item.addEventListener('click', function () {
        let ul = document.getElementById('itemPage');
        itempage = item.firstChild.innerHTML;
        tbody.innerHTML = '';
        setList(list, itempage);
        if (list.length % 10 == 0) {
            totaltemp = list.length / 10;
        } else {
            totaltemp = parseInt(list.length / 10) + 1;
        }
        if (totaltemp <= 5) {
            itemnavigate = 1;
            setPageNavigation(list);
        } else {
            if (itempage <= 3) {
                itemnavigate = 1;
                setPageNavigation(list);
            } else if (itempage >= totaltemp - 2) {
                itemnavigate = totaltemp - 4;
                setPageNavigation(list);
            } else {
                if (parseInt(ul.firstChild.firstChild.innerHTML) + 3 == itempage && parseInt(ul.lastChild.firstChild.innerHTML) - 1 == itempage) {
                    itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) + 1;
                    setPageNavigation(list);
                } else if (itempage == ul.lastChild.firstChild.innerHTML) {
                    itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) + 2;
                    setPageNavigation(list);
                } else if (itempage == ul.firstChild.firstChild.innerHTML) {
                    itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) - 2;
                    setPageNavigation(list);
                } else if (parseInt(ul.firstChild.firstChild.innerHTML) + 1 == itempage && parseInt(ul.lastChild.firstChild.innerHTML) - 3 == itempage) {
                    itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) - 1;
                    setPageNavigation(list);
                } else if (parseInt(ul.firstChild.firstChild.innerHTML) + 2 == itempage && parseInt(ul.lastChild.firstChild.innerHTML) - 2 == itempage) {
                    itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML);
                    setPageNavigation(list);
                }
            }
        }
    });
}
//set event click for button of navigation
function setEventButtonNavigation(listtemp) {
    let buttonprev = document.getElementById('buttonprev');
    let buttonnext = document.getElementById('buttonnext');
    buttonprev.addEventListener('click', function () {
        let ul = document.getElementById('itemPage');
        let active = document.getElementById('active');
        itempage = parseInt(active.firstChild.innerHTML) - 1;
        tbody.innerHTML = '';
        setList(listtemp, itempage);
        if (totaltemp <= 5) {
            itemnavigate = 1;
            setPageNavigation(listtemp);
        } else {
            if (itempage <= 3) {
                itemnavigate = 1;
                setPageNavigation(listtemp);
            } else if (itempage >= totaltemp - 2) {
                itemnavigate = totaltemp - 4;
                setPageNavigation(listtemp);
            } else {
                itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) - 1;
                setPageNavigation(listtemp);
            }
        }
    });
    buttonnext.addEventListener('click', function () {
        let ul = document.getElementById('itemPage');
        let active = document.getElementById('active');
        itempage = parseInt(active.firstChild.innerHTML) + 1;
        tbody.innerHTML = '';
        setList(listtemp, itempage);
        if (totaltemp <= 5) {
            itemnavigate = 1;
            setPageNavigation(listtemp);
        } else {
            if (itempage <= 3) {
                itemnavigate = 1;
                setPageNavigation(listtemp);
            } else if (itempage >= totaltemp - 2) {
                itemnavigate = totaltemp - 4;
                setPageNavigation(listtemp);
            } else {
                itemnavigate = parseInt(ul.firstChild.firstChild.innerHTML) + 1;
                setPageNavigation(listtemp);
            }
        }
    });
}
//function show list 
function setList(list, numberpage) {
    for (let i = 0; i < list.length; i++) {
        if (i >= numberpage * 10 - 10 && i < numberpage * 10) {
            let tr = document.createElement('tr');
            let tdId = document.createElement('td');
            tdId.innerHTML = list[i]._Id;
            tr.appendChild(tdId);
            let tdName = document.createElement('td');
            tdName.innerHTML = list[i]._Name;
            tr.appendChild(tdName);
            let tdEmail = document.createElement('td');
            tdEmail.innerHTML = list[i]._Email;
            tr.appendChild(tdEmail);
            let tdPhoneNumber = document.createElement('td');
            tdPhoneNumber.innerHTML = list[i]._PhoneNumber;
            tr.appendChild(tdPhoneNumber);
            let tdBirthday = document.createElement('td');
            tdBirthday.innerHTML = list[i]._Birthday;
            tr.appendChild(tdBirthday);
            let tdSalary = document.createElement('td');
            tdSalary.innerHTML = list[i]._Salary;
            tr.appendChild(tdSalary);
            let tdNumberWorkingDay = document.createElement('td');
            tdNumberWorkingDay.innerHTML = list[i]._NumberWorkingDay;
            tr.appendChild(tdNumberWorkingDay);
            let tdPosition = document.createElement('td');
            tdPosition.innerHTML = list[i]._Position;
            tr.appendChild(tdPosition);
            let tdAllowance = document.createElement('td');
            tdAllowance.innerHTML = list[i]._Allowance;
            tr.appendChild(tdAllowance);
            let tdAction = document.createElement('td');
            tdAction.className = 'd-flex justify-content-between';
            let btnPayroll = `<button type="button" id="btnPay-${list[i]._Id}" data-id="${list[i]._Id}" class="btn btn-primary btnStyle">Payroll staff</button>`;
            let btnUpdate = `<button type="button" name="update" class="btn btn-info btnStyle" id="btnUpdate-${list[i]._Id}" data-id="${list[i]._Id}">Update</button>`;
            let btnDelete = `<button type="button" class="btn btn-danger btnStyle" id="btnDelete-${list[i]._Id}" data-id="${list[i]._Id}">Delete</button>`;
            tdAction.innerHTML = btnPayroll + btnUpdate + btnDelete;
            tr.appendChild(tdAction);
            tr.setAttribute('id', list[i]._Id);
            tbody.appendChild(tr);
            let buttonupdate = document.getElementById('btnUpdate-' + list[i]._Id);
            catchEventButtonUpdate(buttonupdate);
            let buttonpayroll = document.getElementById('btnPay-' + list[i]._Id);
            catchEventButtonPayroll(buttonpayroll);
            let buttondelete = document.getElementById('btnDelete-' + list[i]._Id);
            catchEventButtonDelete(buttondelete);
        }
    }
}
//call function set list when window is isload
function loadList(){
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    tbody.innerHTML = '';
    if(listtemp.length != 0){
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
        itempage = 1;
        setList(listtemp, itempage);
        if(listtemp.length > 10){
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
        itemnavigate = 1;
        setPageNavigation(listtemp);
        setEventButtonNavigation(listtemp);
        }
    }else{
        document.getElementById('emptybar').className = "emptybar show";
    }
}
loadList();
//function set capitalize property name of employee 
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
//function find list employee by keyword
function findByKeyword(keyword) {
    let list = listEmployee._findListEmployeeByKeyword(keyword);
    if (list.length == 0) {
        document.getElementById('declare').className = "declarebar show";
        document.getElementById('declare').innerHTML = '';
        document.getElementById('declare').innerHTML = 'No employees were found';
    } else {
        tbody.innerHTML = '';
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
        itempage = 1;
        setList(list, itempage);
        if(list.length > 10){
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
            itemnavigate = 1;
            setPageNavigation(list);
            setEventButtonNavigation(list);
        }
    }
}
//set event click for button search
var buttonsearch = document.getElementById('btnsearch');
buttonsearch.addEventListener('click', function () {
        let listtemp = JSON.parse(listEmployee._getList());
        document.getElementById('declare').className = "declarebar hide";
        let specialformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let keyword = document.getElementById('txtsearch').value.trim();
        let keywordconvert = keyword.replace(/\s\s+/g, ' ');
        if (keywordconvert != '') {
            if(listtemp.length == 0){
                document.getElementById('declare').className = "declarebar show";
                document.getElementById('declare').innerHTML = '';
                document.getElementById('declare').innerHTML = 'No employees were found';
            }else{
                if (specialformat.test(keywordconvert)) {
                    document.getElementById('declare').className = "declarebar show";
                    document.getElementById('declare').innerHTML = '';
                    document.getElementById('declare').innerHTML = 'No employees were found';
                } else {
                    let realkeyword = keywordconvert.toLowerCase();
                    findByKeyword(realkeyword);
                }
            }
        }
});
//set function comback list for button
var buttoncomback = document.getElementById('btncomback');
buttoncomback.addEventListener('click', function () {
    loadList();
    window.location.href = '#tableEmployee'; 
});
//set stop Propagation for event click of item in menu dropdown sort
$('.mydropdownitemascending').on('click', function (e) {
    return false;
});
$('.mydropdownitemdecrease').on('click', function (e) {
    return false;
});
var itemageascending = document.getElementById('itemageascending');
itemageascending.addEventListener('click', function () {
    $(".mydropdownmenu").trigger("click");
});
var itemsalaryascending = document.getElementById('itemsalaryascending');
itemsalaryascending.addEventListener('click', function () {
    $(".mydropdownmenu").trigger("click");
});
var itemagedecrease = document.getElementById('itemagedecrease');
itemagedecrease.addEventListener('click', function () {
    $(".mydropdownmenu").trigger("click");
});
var itemsalarydecrease = document.getElementById('itemsalarydecrease');
itemsalarydecrease.addEventListener('click', function () {
    $(".mydropdownmenu").trigger("click");
});
//set function sort for item age asending menu dropdown
var itemageasending = document.getElementById('itemageascending');
itemageascending.addEventListener('click', function () {
    let date = new Date();
    let year = date.getFullYear();
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        if (listtemp.length != 1) {
            for (let i = 0; i < listtemp.length - 1; i++) {
                for (let j = i + 1; j < listtemp.length; j++) {
                    if (year - parseInt(listtemp[j]._Birthday.slice(6, 10)) < year - parseInt(listtemp[i]._Birthday.slice(6, 10))) {
                        let t = listtemp[i];
                        listtemp[i] = listtemp[j];
                        listtemp[j] = t;
                    }
                }
            }
            tbody.innerHTML = '';
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
            itempage = 1;
            setList(listtemp, itempage); 
            if (listtemp.length > 10) {
                document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
                itemnavigate = 1;
                setPageNavigation(listtemp);
                setEventButtonNavigation(listtemp);
            }
        }
        window.location.href = '#tableEmployee';
    }
});
//set function sort for item age decrease menu dropdown
var itemagedecrease = document.getElementById('itemagedecrease');
itemagedecrease.addEventListener('click', function () {
    let date = new Date();
    let year = date.getFullYear();
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        if (listtemp.length != 1) {
            for (let i = 0; i < listtemp.length - 1; i++) {
                for (let j = i + 1; j < listtemp.length; j++) {
                    if (year - parseInt(listtemp[j]._Birthday.slice(6, 10)) > year - parseInt(listtemp[i]._Birthday.slice(6, 10))) {
                        let t = listtemp[i];
                        listtemp[i] = listtemp[j];
                        listtemp[j] = t;
                    }
                }
            }
            tbody.innerHTML = '';
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
            itempage = 1;
            setList(listtemp, itempage);
            if (listtemp.length > 10) {
                document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
                itemnavigate = 1;
                setPageNavigation(listtemp);
                setEventButtonNavigation(listtemp);
            }
        }
        window.location.href = '#tableEmployee';
    }
});
//set function sort for item salary asending menu dropdown
var itemsalaryasending = document.getElementById('itemsalaryascending');
itemsalaryascending.addEventListener('click', function () {
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        if (listtemp.length != 1) {
            for (let i = 0; i < listtemp.length - 1; i++) {
                for (let j = i + 1; j < listtemp.length; j++) {
                    if (listtemp[j]._NumberWorkingDay * listtemp[j]._Salary + parseInt(listtemp[j]._Allowance) < listtemp[i]._NumberWorkingDay * listtemp[i]._Salary + parseInt(listtemp[i]._Allowance)) {
                        let t = listtemp[i];
                        listtemp[i] = listtemp[j];
                        listtemp[j] = t;
                    }
                }
            }
            tbody.innerHTML = '';
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
            itempage = 1;
            setList(listtemp, itempage);
            if (listtemp.length > 10) {
                document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
                itemnavigate = 1;
                setPageNavigation(listtemp);
                setEventButtonNavigation(listtemp);
            }
        }
        window.location.href = '#tableEmployee';
    }
});
//set function sort for item salary decrease menu dropdown
var itemsalarydecrease = document.getElementById('itemsalarydecrease');
itemsalarydecrease.addEventListener('click', function () {
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        if (listtemp.length != 1) {
            for (let i = 0; i < listtemp.length - 1; i++) {
                for (let j = i + 1; j < listtemp.length; j++) {
                    if (listtemp[j]._NumberWorkingDay * listtemp[j]._Salary + parseInt(listtemp[j]._Allowance) > listtemp[i]._NumberWorkingDay * listtemp[i]._Salary + parseInt(listtemp[i]._Allowance)) {
                        let t = listtemp[i];
                        listtemp[i] = listtemp[j];
                        listtemp[j] = t;
                    }
                }
            }
            tbody.innerHTML = '';
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
            itempage = 1;
            setList(listtemp, itempage);
            if (listtemp.length > 10) {
                document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
                itemnavigate = 1;
                setPageNavigation(listtemp);
                setEventButtonNavigation(listtemp);
            }
        }
        window.location.href = '#tableEmployee';
    }
});
//sort employee by alphabetical
var itemalphabetical = document.getElementById('itemalphabetical');
itemalphabetical.addEventListener('click', function () {
    let listname = [];
    let listresult = [];
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        if(listtemp.length != 1){
            for(let i=0; i<listtemp.length; i++){
                listname.push(listtemp[i]._Name);
            }
            listname.sort();
            for(let i=0; i<listname.length; i++){
                for(let j=0; j<listtemp.length; j++){
                    if(listtemp[j]._Name == listname[i]){
                        listresult.push(listtemp[j]);
                    }
                }
            }
        tbody.innerHTML = '';
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
        itempage = 1;
        setList(listresult, itempage);
        if (listresult.length > 10) {
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';
            itemnavigate = 1;
            setPageNavigation(listresult);
            setEventButtonNavigation(listresult);
        }
    }
        window.location.href = '#tableEmployee';
    }
});
//show employee has max salary
var itemstaff = document.getElementById('itemstaff');
itemstaff.addEventListener('click', function () {
    let listtemp = JSON.parse(listEmployee._getList());
    document.getElementById('declare').className = "declarebar hide";
    if (listtemp.length != 0) {
        let listresult = [];
        let maxsalary = 0;
        for (let i = 0; i < listtemp.length; i++) {
            if (listtemp[i]._NumberWorkingDay * listtemp[i]._Salary + parseInt(listtemp[i]._Allowance) > maxsalary) {
                maxsalary = listtemp[i]._NumberWorkingDay * listtemp[i]._Salary + parseInt(listtemp[i]._Allowance);
            }
        }
        for (let j = 0; j < listtemp.length; j++) {
            if (listtemp[j]._NumberWorkingDay * listtemp[j]._Salary + parseInt(listtemp[j]._Allowance) == maxsalary) {
                listresult.push(listtemp[j]);
            }
        }
        tbody.innerHTML = '';
        itempage = 1;
        setList(listresult, itempage);
        document.getElementById('myPageNavigation').className = 'd-flex justify-content-center hide';
        if (listresult.length > 10) {
            itemnavigate = 1;
            document.getElementById('myPageNavigation').className = 'd-flex justify-content-center show';           itemnavigate = 1;
            setPageNavigation(listresult);
            setEventButtonNavigation(listresult);
        }
        window.location.href = '#tableEmployee';
    }
});
//count employee has salary up 10 milion
var itemcount = document.getElementById('itemcount');
itemcount.addEventListener('click', function () {
    let count = 0;
    let listtemp = JSON.parse(listEmployee._getList());
    if (listtemp.length != 0) {
        for (let i = 0; i < listtemp.length; i++) {
            if (listtemp[i]._NumberWorkingDay * listtemp[i]._Salary + parseInt(listtemp[i]._Allowance) > 10000000) {
                count += 1;
            }
        }
    }
    document.getElementById('declare').className = "declarebar show";
    document.getElementById('declare').innerHTML = '';
    document.getElementById('declare').innerHTML = 'There are <b>' + count + '</b> salaried employees over 10 million.';
});









