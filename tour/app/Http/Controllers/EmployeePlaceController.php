<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpPlaceRequest;
use App\Place;
class EmployeePlaceController extends Controller
{
    public function place(){
        $places = Place::where('req', 'Approved')->get();
        return response()->json($places);
    }


    public function placeAdd(){
        return view('employee.placeAdd');
        
    }

    public function placeAdded(Request $req){

        // if ($req->hasFile('image')) {
        //     $file = $req->file('image');
        //     echo "File Name: ".$file->getClientOriginalName()."<br>";
        //     echo "File Extension: ".$file->getClientOriginalExtension()."<br>";
        //     echo "File Mime Type: ".$file->getMimeType()."<br>";
        //     echo "File Size: ".$file->getSize()."<br>";

        //     if($file->move('upload', 'employeePlace'.$req->place.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        // $img='employeePlace'.$req->place.'.'.$file->getClientOriginalExtension();

        $place = new Place;
        $place -> id = $req->id;
        $place -> place = $req->place;
        $place-> district = $req->district;
        //$place -> image = $img;
        $place -> image = $req->image;
        $place -> req= 'Pending';
        $place->save();
        
    }


    public function placeEdit($id){
        $place = Place::find($id);
        return view('employee.placeEdit')->with('places',  $place);
    }

    public function placeEdited(Request $req){

        // if ($req->hasFile('image')) {
        //     $file = $req->file('image');

        //     if($file->move('upload', 'employeePlace'.$req->place.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        // $img='employeePlace'.$req->place.'.'.$file->getClientOriginalExtension();

                $place = Place::find($req->id);;
                $place -> place = $req->place;
                $place-> district = $req->district;
                $place -> image = $req ->image;
                $place -> req= 'Approved';
                $place -> save();
    }

    public function placeDelete($id){
        $place = Place::find($id);
        $place ->delete();
        return redirect()->route('employeePlace.place');
    }

   
    public function placeDestroy(Request $req){
        $place=Place::find($req->id);
        $place->delete();
    }

}
