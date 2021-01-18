<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Employee;
use \Cache;


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

        if (!Cache::has('employees')){
            Cache::put('employees', $employeesArr, 60);
            
            Cache::remember('employees', 60, function() {
                return $employeesArr;
            });
        }


        EmployeeController::$employees = Cache::get('employees');
    }

    public function index() {
        $employees = Cache::get('employees');

        return response()->json( $employees);
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

        $employees = Cache::get('employees');
        $index = $this->getEmployeeIndexById($id, $employees);

        if($index >= 0) {
            
            Cache::forget('employees');
            unset($employees[$index]);

            $refreshed_employees = array();

            foreach($employees as $employee) {
                array_push($refreshed_employees, $employee);
            }
            
            Cache::put('employees', $refreshed_employees, 60);

            return 'Deleted';
        }

        return 'Delete operation failed';

    }

    private static function getEmployeeById($id){
        foreach ( EmployeeController::$employees as $element ) {
            if ( $id == $element->id ) {
                return $element;
            }
        }

        return null;
    }

    private static function getEmployeeIndexById($id, $employees){
        foreach ( $employees as $key => $element ) {
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
