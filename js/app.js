const section = document.getElementById('section').style.borderRadius = '20px';

const subSection = document.getElementById('sub-section')
subSection.style.display = 'flex';
subSection.style.justifyContent = 'space-between';
subSection.style.alignItems = 'center';

document.getElementById('add').addEventListener('click', function () {
    const input = document.getElementById('input');
    const inputValue = input.value;

    if (inputValue.length == '') {
        alert('Please Fill The Field');
    } else {
        const p = document.createElement('p');
        p.innerText = inputValue;
        p.style.color = 'white';
        p.style.fontSize = '30px';
        p.style.fontWeight = 'bold';

        const i = document.createElement('i');
        i.classList.add('fas');
        i.classList.add('fa-trash-alt');

        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function () {
            li.style.display = 'none';
        })
        deleteButton.appendChild(i);
        deleteButton.style.fontSize = '30px';
        deleteButton.style.color = 'white';
        deleteButton.style.fontWeight = 'bold';
    
        const li = document.createElement('li');
        li.appendChild(p);
        li.appendChild(deleteButton);
        li.style.display = 'flex';
        li.style.width = '100%';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '13px';
        li.style.padding = '4px';
        li.style.borderRadius = '30px';

        const ul = document.getElementById('ul');
        ul.appendChild(li);

        input.value = '';
    }
})