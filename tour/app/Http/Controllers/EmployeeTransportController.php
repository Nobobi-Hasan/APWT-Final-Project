<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transport;
class EmployeeTransportController extends Controller
{   
    
    public function transport(){
    $transport = Transport::all();
    return view('employee.transport')->with('transports', $transport);
    }
}