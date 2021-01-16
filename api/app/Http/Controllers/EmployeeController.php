<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Employee;


class EmployeeController extends Controller
{

    static $employees;

    public function __construct()
    {
        $jsonPath = storage_path() . "/app/public/employees.json";
        $employeesJson = json_decode(file_get_contents($jsonPath), true);
        $employeesArr = array();

        foreach ( $employeesJson as $employee ) {
            array_push($employeesArr, new Employee(
                $employee['id'],
                $employee['email'],
                $employee['fname'],
                $employee['lname'],
                $employee['title']
            ));
        }

        EmployeeController::$employees = $employeesArr;
    }

    public function index() {
        return response()->json(EmployeeController::$employees);
    }

    public function employee($id) {

        $employee = $this->getEmployeeById($id);

        return response()->json($employee);
    }

    public function create(Request $request) {

        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'title' => 'required',
            'email' => 'required'
        ]);

        $body = json_decode($request->getContent());
        $employee = new Employee(com_create_guid(), $body->email, $body->fname, $body->lname, $body->title);

        return response()->json(EmployeeController::addEmployee($employee));
    }

    public function update($id, Request $request) {

        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'title' => 'required',
            'email' => 'required'
        ]);

        $body = json_decode($request->getContent());

        $employee = $this->getEmployeeById($id);
        $employee->update($body);

        return  EmployeeController::$employees;
    }

    public function delete($id) {

        $index = $this->getEmployeeIndexById($id);

        if($index >= 0) {
            unset(EmployeeController::$employees[$index]);
            return response('Deleted');
        }

        return response('Delete operation failed');

    }

    private static function getEmployeeById($id){
        foreach ( EmployeeController::$employees as $element ) {
            if ( $id == $element->id ) {
                return $element;
            }
        }

        return null;
    }

    private static function getEmployeeIndexById($id){
        foreach ( EmployeeController::$employees as $key => $element ) {
            if ( $id == $element->id ) {
                return $key;
            }
        }

        return null;
    }

    private static function addEmployee(Employee $employee){
        array_push(EmployeeController::$employees, $employee);
        return $employee;
    }

}
