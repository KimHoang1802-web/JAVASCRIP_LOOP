// In tất cả số nguyên dương lẻ/ chẵn nhỏ hơn 100
const ketQua = () =>{
    console.log("test");
    let soChanLe = +document.querySelector("#chanLe").value;
    let insochanle = document.querySelector("#inSoChanLe");
    let numbers = [];
    if (soChanLe % 2 == 0) {
        for (let i = 0; i <= soChanLe; i += 2) {
            numbers.push(i);
        }
    } else {
        for (let i = 1; i <= soChanLe; i += 2) {
            numbers.push(i);
        }
    }
    insochanle.innerHTML = numbers.join(', ');

};