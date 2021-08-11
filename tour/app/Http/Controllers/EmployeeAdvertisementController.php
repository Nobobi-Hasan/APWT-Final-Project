<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpAdsRequest;
use App\Http\Requests\EmpPromoRequest;
use App\Promo;
use App\Ad;
class EmployeeAdvertisementController extends Controller
{
    public function advertisement(){

        $ads = Ad::all();
        return response()->json($ads);
    }

    public function advertisementAdd(Request $req){

        // if ($req->hasFile('image')) {
        //     $file = $req->file('image');

        //     if($file->move('upload','employeeAds'.$file->getClientOriginalName().'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        // $img= 'employeeAds'. $file->getClientOriginalName().'.'.$file->getClientOriginalExtension();

        $ads = new Ad;
        //$ads -> image = $img;
        $ads -> image = $req->image;
        $ads -> save();
        
    }

    public function adsDelete($id){
        
        $ads = Ad::find($id);
         return view('employee.adsDelete')->with('ads', $ads);
    }
    
    public function advertisementDestroy(Request $req){
        Ad::destroy($req -> id);
    }


//promo =>

    public function promo(){
        
        $promos = Promo::all();
       return response()->json($promos);
    }

    public function promoAdd(Request $req){


        // if ($req->hasFile('image')) {
        //     $file = $req->file('image');
        //     if($file->move('upload', 'employeePromos'.$req->id.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        // $img='employeePromos'.$req->id.'.'.$file->getClientOriginalExtension();


        $promos = new Promo;
        //$promos -> image = $img;
        $promos -> image = $req->image;
        $promos -> message = $req->message;
        $promos -> save();
        
    }

    public function promoDelete($id){
        
        $promos = Promo::find($id);
         return view('employee.promoDelete')->with('promos', $promos);
    }
    
    public function promoDestroy(Request $req){

        Promo::destroy($req -> id);
    }

    
}
