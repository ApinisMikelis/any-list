<?php

namespace App\Http\Controllers;
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

    private static function getEmployeeById($id){
        foreach ( EmployeeController::$employees as $element ) {
            if ( $id == $element->id ) {
                return $element;
            }
        }

        return null;
    }
}
