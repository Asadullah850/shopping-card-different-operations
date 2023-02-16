let totalid = document.getElementById('total').innerText;
function total(setTotalID) {
    let sum = parseFloat(totalid) + parseFloat(setTotalID);
    totalid = sum;
    let set = document.getElementById('total');
    set.innerText = totalid;
}

function displaData(paraOne,paraTwo,paraThree,paraFour ) {
    let container = document.getElementById('table-conainer');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="border-solid border-b-2 border-indigo-300">${serial}</td>
    <td class="border-solid border-b-2 border-indigo-300">${paraOne}</td>
    <td class="border-solid border-b-2 border-indigo-300">${paraTwo}</td>
    <td class="border-solid border-b-2 border-indigo-300">${paraThree}</td>
    <td class="border-solid border-b-2 border-indigo-300">${paraFour}</td>
    `;
    container.appendChild(tr);
}