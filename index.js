
(function(){
    "uses strict";
    const fs = require('fs');
    const prompt = require('prompt-sync')();
    let data = fs.readFileSync('./data.json');
    let studentData = JSON.parse(data);
        studentNewData = JSON.stringify(studentData);
        fs.writeFileSync('./data.json', studentNewData);

    function createStudent()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        let studentName = prompt("Enter name: ");
        let studentId = prompt("Enter Id: ");
        let studentPhoneNumber = prompt("Enter phone number: ");
        let student = {'name':studentName, 'id':studentId, 'phoneNumber':studentPhoneNumber};
        studentData.push(student);
        studentNewData = JSON.stringify(studentData);
        fs.writeFileSync('./data.json', studentNewData);;
    }

    function editStudent()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        let id = prompt("Enter student id: ");
        for (let i of studentData)
        {
            if (id === i['id'])
            {
                console.log(`Nhập 1 thuộc tính muốn:
                                1.name - Sửa tên.
                                2.id - Sửa id.
                                3.phoneNumber - Sửa số điện thoại..`);
                choice = prompt("Nhap thuoc tinh: ");
                newData = prompt("Nhap thong tin moi: ");
                i[choice] = newData;
            }
        }
         studentNewData = JSON.stringify(studentData);
        fs.writeFileSync('./data.json', studentNewData);
    }
    function deleteStudent()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        let id = prompt("Enter student id: ");
        for (let i = 0; i < studentData.length; i++)
        {
            if (studentData[i]['id'] === id)
                studentData.splice(i, 1);
        }
         studentNewData = JSON.stringify(studentData);
        fs.writeFileSync('./data.json', studentNewData);
    }
    function showAStudent()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        let id = prompt("Enter student id: ");
        for (let i of studentData)
        {
            if (id === i['id'])
            {
                console.log(`Nhập 1 thuộc tính muốn xem:
                                1.name - Xem tên.
                                2.phoneNumber - Xem số điện thoại..
                                3.Xem toàn bộ thông tin`);
                choice = prompt("Nhap thuoc tinh: ");
                if (choice ==='3')
                    console.log(i);
                else
                    console.log(i[choice]);
            }
        }
    }
    function showAllStudents()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        console.log(studentData);
    }
    function showSortedStudents()
    {
        let data = fs.readFileSync('./data.json');
        let studentData = JSON.parse(data);
        studentData.sort(
            function compare(a, b){
                if (parseInt(a['id']) < parseInt(b['id']))
                    return -1;
                else return 1;
            });
        console.log(studentData);
    }
    let state = 1;
    while (state === 1)
    {
        console.log(`Chọn một trong các số sau để thực hiện thao tác:
                        1.Nhập Thông tin Sinh Viên
                        2.Sửa thông tin Sinh Viên
                        3.Xoá Sinh Viên
                        4.Hiển thị  dữ liệu  Sinh Viên theo mã sinh viên mà mình cần tìm
                        5.Hiển thị dữ liệu tất cả Sinh Viên đã nhập
                        6.Hiển thị danh sách sinh viên theo chiều tăng dần của id
                        7.Thoát`
                    );
        let choice = prompt("Enter your choice: ");
        switch (choice)
        {
            case '1':
                createStudent();
                break;
            case '2':
                editStudent();
                break;
            case '3':
                deleteStudent();
                break;
            case '4':
                showAStudent();
                break;
            case '5':
                showAllStudents();
                break;
            case '6':
                showSortedStudents();
                break;
            case '7':
                console.log("exit...");
                state = 0;
                break;
            default:
                console.log(`Wrong choice.`);
                break;
        }
    }
})()
