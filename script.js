// div_child.style.height = 20;
// div_child.style.width = 20;
var size = 16;
const container = document.querySelector('.container');
sketch(size, container);
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    size = Number(prompt('Enter desired size of the grid'));
    const rows_list = container.querySelectorAll('.div_rows');
    rows_list.forEach(row_list => {
        container.removeChild(row_list);
    });
    
    console.log('Button Pressed = '+size);
    sketch(size, container);
});

function sketch(size, container){
    for(var i = 0 ; i<size ; i++){
        const div_child = document.createElement('div');
        div_child.setAttribute("style","background-color:grey; flex:1; display:flex;");
        div_child.setAttribute("class","div_rows");
        container.appendChild(div_child);
    }

    const rows_list = container.querySelectorAll('.div_rows');

    rows_list.forEach(row => {
        for(var i = 0 ; i<size ; i++){
            const div_child_col = document.createElement('div');
            div_child_col.setAttribute("style","flex:1; height: 100%;");
            div_child_col.setAttribute("class","div_cells");
            row.appendChild(div_child_col);
        }
    });

    const cells = document.querySelectorAll('.div_cells');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e)=>{
            cell.classList.add('hover');
        });
    });
}
