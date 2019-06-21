import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-them-xoa',
  templateUrl: './bt-them-xoa.component.html',
  styleUrls: ['./bt-them-xoa.component.scss']
})
export class BtThemXoaComponent implements OnInit {
  mangSP:any = [
    {MaSP:1, TenSP:"Sony XZ", Gia:1000},
    {MaSP:2, TenSP:"Sony XZ2", Gia:1000},
    {MaSP:3, TenSP:"HTC U Ultra", Gia:1000},
    {MaSP:4, TenSP:"HTC U12 plus", Gia:1000},
    {MaSP:5, TenSP:"Iphone XS Max", Gia:1000},
    {MaSP:6, TenSP:"Iphone XR", Gia:1000},
    {MaSP:7, TenSP:"Xiaomi Mi Note 3", Gia:1000},
    {MaSP:8, TenSP:"Xiaomi Mi 8", Gia:1000},
    {MaSP:9, TenSP:"Galaxy Note 9", Gia:1000},
    {MaSP:10, TenSP:"Galaxy S9 plus", Gia:1000},
    {MaSP:11, TenSP:"Nokia X9", Gia:1000},
  ];
  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

  setLocalStorage(){
    localStorage.setItem("SanPham",JSON.stringify(this.mangSP));
  }

  getLocalStorage(){
    if(localStorage.getItem("SanPham") != null)
    this.mangSP = JSON.parse(localStorage.getItem("SanPham"));
  }

  themSanPham(_MaSP, _TenSP, _Gia){
    const objSanPham = {
      MaSP: _MaSP,
      TenSP: _TenSP,
      Gia: _Gia
    }
    this.mangSP.push(objSanPham);
    this.setLocalStorage();
  }

  xoaSanPham(_MaSP){
    const index = this.mangSP.findIndex(function(item){
      return _MaSP === item.MaSP;
    });
    if (index > -1) {
      this.mangSP.splice(index, 1);
    }
  }
}
