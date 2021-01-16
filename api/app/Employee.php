<?php
namespace App;

class Employee
{
    public $id;
    public $email;
    public $fname;
    public $lname;
    public $title;

    public function __construct($id, $email, $fname, $lname, $title)
    {
        $this->id = $id;
        $this->email = $email;
        $this->fname = $fname;
        $this->lname = $lname;
        $this->title = $title;
    }

    public function update($employee) {
        $this->__set('email', $employee->email);
        $this->__set('fname', $employee->fname);
        $this->__set('lname', $employee->lname);
        $this->__set('title', $employee->title);
    }

    public function __set($property, $value) {
        if (property_exists($this, $property)) {
            $this->$property = $value;
        }
    
        return $this;
    }

}
