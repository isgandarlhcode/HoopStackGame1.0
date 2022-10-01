const listArray = document.querySelectorAll('#list');
const listItemArray = document.querySelectorAll('#hoop1,#hoop2,#hoop3,#hoop4,#hoop5');

for (let i = 0; i < listItemArray.length; i++) {
    let draggedItem = null;
    let item = listItemArray[i];


    item.addEventListener('dragstart', function () {
        draggedItem = item;
        this.style.opacity = '0.4';
        console.log(draggedItem);
    })
    item.addEventListener('dragend', function (e) {
        this.style.opacity = '1';
        console.log(item.parentElement);

    })

    function animate_string(id) {
        var element = document.getElementById(id);
        var textNode = element.childNodes[0];
        var text = textNode.data;

        setInterval(function () {
            text = text[text.length - 1] + text.substring(0, text.length - 1);
            textNode.data = text;
        }, 100);
    }

    for (let j = 0; j < listArray.length; j++) {

        const currentList = listArray[j];

        currentList.addEventListener('dragover', function (e) {
            e.preventDefault();
        })
        currentList.addEventListener('dragleave', function (e) {

            currentList.style.backgroundColor = 'rgba(7, 4, 1, 0.2)';
        })
        currentList.addEventListener('dragenter', function (e) {
            currentList.style.backgroundColor = 'rgba(3, 2, 2, 0.1)';
        })
        currentList.addEventListener('drop', function () {
            currentList.style.backgroundColor = 'rgba(3, 4, 1, 0.2)';
            if (draggedItem != null) {
                currentList.appendChild(draggedItem);
            }

            draggedItem = null;
        })
    }

}
