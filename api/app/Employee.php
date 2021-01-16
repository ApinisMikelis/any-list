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

}
