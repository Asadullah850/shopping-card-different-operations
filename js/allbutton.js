let serial = 0;
document.getElementById('fristCard-butt').addEventListener('click',function(){
    serial += 1;
    const pName = document.getElementById('product-name').innerText;
    const pPrice = document.getElementById('price').innerText;
    const pQuantity = document.getElementById('quantity').innerText;
    const pTotal = (parseInt(pPrice) * parseInt(pQuantity)).toFixed(2)

    // display data
    displaData(pName,pPrice,pQuantity,pTotal )
    total(pTotal);
    this.setAttribute('disabled','fristCard-butt')
    
})
// secound-card-butt
document.getElementById('secound-card-butt').addEventListener('click',function(event){
//  console.log(event.target.parentNode.parentNode);
    serial += 1;
  const pName = event.target.parentNode.parentNode.children[0].innerText;
  const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
  const pTotal = (parseFloat(pPrice) / parseFloat(pQuantity)).toFixed(2);
//   show the data
// serial number disply button a incloude kinto opore serial declear korty hobe
displaData(pName,pPrice,pQuantity,pTotal );
total(pTotal);
this.setAttribute('disabled','secound-card-butt')

})
// third-butt-card-butt
document.getElementById('third-card-butt').addEventListener('click',function(event){
    //  console.log(event.target.parentNode.parentNode);
        serial += 1;
      const pName = event.target.parentNode.parentNode.children[0].innerText;
      const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
      const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
      const pTotal = (parseFloat(pPrice) - parseFloat(pQuantity)).toFixed(2);
    
    //   show the data
    // serial number disply button a incloude kinto opore serial declear korty hobe
    displaData(pName,pPrice,pQuantity,pTotal );
    total(pTotal);
    this.setAttribute('disabled','third-card-butt')

    })

    
    // fourth-card-butt
document.getElementById('fourth-card-butt').addEventListener('click',function(event){
    //  console.log(event.target.parentNode.parentNode);
        serial += 1;
      const pName = event.target.parentNode.parentNode.children[0].innerText;
      const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
      const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
      const pTotal = (parseFloat(pPrice) ** parseFloat(pQuantity)).toFixed(2);
    
    //   show the data
    // serial number disply button a incloude kinto opore serial declear korty hobe
    displaData(pName,pPrice,pQuantity,pTotal );
    total(pTotal);
    this.setAttribute('disabled','fourth-card-butt')

    })
    //    sixth seventh eighth
        // fifth-card-butt
document.getElementById('fifth-card-butt').addEventListener('click',function(event){
        serial += 1;
      const pName = event.target.parentNode.parentNode.children[0].innerText;
      const pPrice = event.target.parentNode.parentNode.children[2].value;
      const pQuantity = event.target.parentNode.parentNode.children[3].value;
      if (pPrice == '' || pQuantity == '' ||  pPrice <= 0 || pQuantity <= 0) {
        return alert('please check the input field')
      }
      if (isNaN(pQuantity) || isNaN(pPrice)) {
        return alert('please check the input field')
      }
      const pTotal = (parseFloat(pPrice) * parseFloat(pQuantity)).toFixed(2);
    //   show the data
    // serial number disply button a incloude kinto opore serial declear korty hobe
    displaData(pName,pPrice,pQuantity,pTotal );
    total(pTotal);

    // document.getElementById('fifth-card-butt').setAttribute('disabled','fifth-card-butt')
      this.setAttribute('disabled','fifth-card-butt')
    })
