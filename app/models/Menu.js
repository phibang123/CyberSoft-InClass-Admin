// import { MonAn } from "./MonAn.js";

export class Menu
{
    arrMonAn = [];//[{mon:1, tenMon:'Sushi'},{mon:2, tenMon:'Yami'}]

    constructor()
    {
        
    }
    themMonAn = (monAn) => //monAn: đối tượng món ăn
    {
        this.arrMonAn.push(monAn);
    }
    xoaMonAn = (maMon) =>
    {
        let index = this.arrMonAn.findIndex((monAn) =>
      
            monAn.maMon == maMon)
       
        if (index !== -1)
        {
            this.arrMonAn.splice(index,1)
        }
        else
        {
            alert("Tìm không thấy")
        }
    }
    layThongTin = (maMon) =>
    {
        let monAn = this.arrMonAn.find((objectMonAn) =>
        objectMonAn.maMon === maMon
        )
        if (monAn)
        {
            return monAn
        }
        return undefined
    }
    capNhatMonAn = (ma, monAnCapNhat) =>
    {
        let monAn = this.arrMonAn.find(objectMonAn => objectMonAn.maMon === ma);

        //tìm thấy
        if (monAn)
        {
            for (let keyMonAn in monAn)
            {
                monAn[keyMonAn] = monAnCapNhat[keyMonAn];
            }
        }
    }
    taoMenu = () =>
    {
        let arrResult = this.arrMonAn.map((monAn, index) =>
        {
            return `
                 <td>${ monAn.maMon }</td>
                 <td>${ monAn.tenMon }</td>
                 <td>${ monAn.loaiMon }</td>
                 <td>${ monAn.giaMon }</td>
                 <td>${ monAn.khuyenMai }</td>
                 <td>${ monAn.tinhTrang ? 'Còn' : 'Hết' }</td>
                 <td>
                        <button onclick="xoaMonAn('${monAn.maMon}')">Xóa</button>
                        <button data-toggle="modal" data-target="#exampleModal" onclick="chinhSua('${monAn.maMon}')">Chỉnh Sửa</button>
                 </td>
            `
        })
        return arrResult
    }
    renderMenu = (isTable) => {
        let arrHtmlMenu = this.taoMenu(); //khi gọi tạo menu trả kết quả của tạo menu vào arrHtmlMenu
        ///vì mảng rất nhiều index không thể đua hết vào
        ///nên phải dùng vòng lặp dưa từng phần tử của mảng vào
        ///củng như xét từng mảng
        //foreach()


        //thêm content
        //vì lúc xóa gọi lại hàm render
        //thì document.getElementById(isTable).innerHTML += htmlMonAn nó không reset vì nó set cứng
        //content gọi lại nó sẻ  cho giá trị rỗng tr gán sau
        let content = '';
        arrHtmlMenu.forEach((htmlMonAn,index) =>
        {
            content += htmlMonAn;
            //document.getElementById(isTable).innerHTML += htmlMonAn
        })
        document.getElementById(isTable).innerHTML = content;
    }
    LuuStorage()
    {
        //biến dử liệu arrMenu thành chuổi 
        let stringMenu = JSON.stringify(this.arrMonAn)
    
        //luu7 chuổi vào localStorage
        localStorage.setItem('danhSachMonAn',stringMenu)
    }
    LayStorage()
    {   //kiểm tra trong localstogare có dử liệu thì lấy dử liệu từ localstogare ra gán cho thuộc tính menu
        if (localStorage.getItem('danhSachMonAn'))
        {
            
            let stringMenu = localStorage.getItem('danhSachMonAn');
            this.arrMonAn = JSON.parse(stringMenu);
        }
    }
}